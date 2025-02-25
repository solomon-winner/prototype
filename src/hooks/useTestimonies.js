import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchTestimonies, removeTestimony, updateTestimonies } from '../utils/api.js';
import { useSetRecoilState } from 'recoil';
import { testimoniesState } from '../state/state.js';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

// Fetch Testimonies Hook
export const useTestimonies = () => {
  const setTestimonies = useSetRecoilState(testimoniesState);

  const { data, isError, isLoading, error } = useQuery({
    queryKey: ['testimonies'],
    queryFn: fetchTestimonies,
    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
    retry: 2,
  });

  useEffect(() => {
    if (data) {
      setTestimonies(data);
    }
  }, [data, setTestimonies]);

  useEffect(() => {
    if (isError) {
      console.error('Fetching testimonies failed:', error.message);
      toast.error('Failed to load testimonies. Please try again.');
    }
  }, [isError, error]);

  return { data, isLoading, isError };
};

export const useAddTestimony = () => {
  const queryClient = useQueryClient();
  const setTestimonies = useSetRecoilState(testimoniesState);

  const mutation = useMutation({
    mutationFn: addTestimony, // The API function to add a testimony
    onSuccess: (newTestimony) => {
      // Invalidate the 'testimonies' query to refetch the updated list
      queryClient.invalidateQueries({ queryKey: ['testimonies'] });

      // Update the Recoil state with the new testimony
      setTestimonies((prevTestimonies) => [...prevTestimonies, newTestimony]);

      // Show a success toast notification
      toast.success('Testimony added successfully!');
    },
    onError: (error) => {
      // Show an error toast notification
      toast.error(`Failed to add testimony: ${error.message}`);
      console.error('Error adding testimony:', error);
    },
  });

  return mutation;
};
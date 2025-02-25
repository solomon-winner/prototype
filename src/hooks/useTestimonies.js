import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchTestimonies,addTestimony} from '../utils/api.js';
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
    mutationFn: addTestimony, 
    onSuccess: (newTestimony) => {
      queryClient.invalidateQueries({ queryKey: ['testimonies'] });

      setTestimonies((prevTestimonies) => [...prevTestimonies, newTestimony]);

      toast.success('Testimony added successfully!');
    },
    onError: (error) => {
      toast.error(`Failed to add testimony: ${error.message}`);
      console.error('Error adding testimony:', error);
    },
  });

  return mutation;
};
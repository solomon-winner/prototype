import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchBannerCards, createBannerCard, updateBannerCard, deleteBannerCard } from '../utils/api.js';
import { useSetRecoilState } from 'recoil';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import {cardInfoState} from '../state/state.js';

export const useBannerCards = () => {
  const setCardInfo = useSetRecoilState(cardInfoState);

  const { data, isError, isLoading, error } = useQuery({
    queryKey: ['bannerCards'],
    queryFn: fetchBannerCards,
    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
    retry: 2,
  });

  useEffect(() => {
    if (data) {
      setCardInfo(data);
    }
  }, [data, setCardInfo]);

  useEffect(() => {
    if (isError) {
      console.error('Fetching cardInfo failed:', error.message);
      toast.error('Failed to load cardInfo. Please try again.');
    }
  }, [isError, error]);

  return { data, isLoading, isError };
};
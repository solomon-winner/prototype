import { useQuery, } from '@tanstack/react-query';
import { fetchGeneralInfo } from '../utils/api.js';
import handleError from '../utils/errorHandler.js';
import { useSetRecoilState } from 'recoil';
import { generalInfoState } from '../state/state.js';

export const useGeneralInfo = () => {
  const setgeneralInfo = useSetRecoilState(generalInfoState);

  return useQuery({
    queryKey: ['generalInfo'], // Query key as an array
    queryFn: fetchGeneralInfo, // Query function
    onSuccess: (data) => {
      setgeneralInfo(data); // Update Recoil state on success
    },
    onError: handleError, // Handle errors
  });
};



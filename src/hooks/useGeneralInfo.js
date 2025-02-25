import { useQuery, } from '@tanstack/react-query';
import { fetchGeneralInfo } from '../utils/api.js';
import handleError from '../utils/errorHandler.js';
import { useSetRecoilState } from 'recoil';
import { companyInfoState } from '../state/state.js';

export const useGeneralInfo = () => {
  const setCompanyInfo = useSetRecoilState(companyInfoState);

  return useQuery('generalInfo', fetchGeneralInfo, {
    onSuccess: (data) => {
      setCompanyInfo(data);
    },
    onError: handleError,
  });
};



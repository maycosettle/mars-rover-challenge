import { useState, useCallback } from 'react';

export const useRequestData = ({ service }) => {
  const [res, setRes] = useState({ data: null, error: null, isLoading: false, success: false });

  const callAPI = useCallback(async (payload = null) => {
    setRes((prevState) => ({ ...prevState, isLoading: true }));

    const { data, problem } = await service(payload);

    if (problem) {
      setRes({ data: null, isLoading: false, error: problem, success: false });
    } else {
      setRes({ data: data?.data, isLoading: false, error: null, success: true });
    }
  }, []);

  const resetState = () => setRes({ data: null, error: null, isLoading: false, success: false });

  return [res, callAPI, resetState];
};

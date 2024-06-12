import { useQuery } from '@tanstack/react-query';
import { getCabinById } from '../../../../services/apiCabins';
export const useCabinById = (id) => {
  const {
    data: cabins,
    error,
    isLoading,
  } = useQuery({
    queryKey: ['CabinById_86'],
    queryFn: getCabinById,
  });
  return { cabins, isLoading, error };
};

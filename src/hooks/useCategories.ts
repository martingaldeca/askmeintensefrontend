import { RootState } from '@/store/store';
import { useAppSelector } from '@/hooks/hooks';

export function useCategories() {
  const categories = useAppSelector((state: RootState) => state.categories.instance);
  return { categories };
}

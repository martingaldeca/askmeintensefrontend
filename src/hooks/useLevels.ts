import { RootState } from '@/store/store';
import { useAppSelector } from '@/hooks/hooks';

export function useLevels() {
  const levels = useAppSelector((state: RootState) => state.levels.instance);
  return { levels };
}

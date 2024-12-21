import { RootState } from '@/store/store';
import { useAppSelector } from '@/hooks/hooks';

export function useProfile() {
  const profile = useAppSelector((state: RootState) => state.profile.instance);
  return { profile };
}

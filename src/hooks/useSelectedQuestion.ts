import { RootState } from '@/store/store';
import { useAppSelector } from '@/hooks/hooks';

export function useSelectedQuestion() {
  const selectedQuestion = useAppSelector((state: RootState) => state.selectedQuestion.instance);
  return { selectedQuestion };
}

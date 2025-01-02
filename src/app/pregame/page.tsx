'use client';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CardSelector from '@/components/CardSelector/CardSelector';
import { fetchCategories } from '@/store/slices/categoriesSlice';
import { fetchLevels } from '@/store/slices/levelsSlice';
import { QuestionsService } from '@/app/lib/client';
import { CTAButton } from '@/atoms';
import { Container } from '@mui/material';
import { theme } from '@/constants/theme';
import { RootState } from '@/store/store';
import { useCategories, useLevels } from '@/hooks';
import { PATHS } from '@/constants/paths';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

export default function PregamePage() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { categories } = useCategories();
  const { levels } = useLevels();
  const { selectedCategory, selectedLevel } = useSelector((state: RootState) => state.gameOptions);

  useEffect(() => {
    QuestionsService.categoriesList()
      .then(data => {
        dispatch(fetchCategories(data.results));
      })
      .catch(error => {
        console.log(error);
        toast.error('Error during request', {
          toastId: 'api-error',
        });
      });
  }, [dispatch]);

  useEffect(() => {
    QuestionsService.levelsList()
      .then(data => {
        dispatch(fetchLevels(data.results));
      })
      .catch(error => {
        console.log(error);
        toast.error('Error during request', {
          toastId: 'api-error',
        });
      });
  }, [dispatch]);

  function handleStart() {
    if (!selectedCategory?.uuid || !selectedLevel?.uuid) return;
    router.push(PATHS.QUESTION_DETAIL);
  }

  return (
    <div>
      <CardSelector
        items={categories}
        image="categories"
        buttonText={selectedCategory?.name || 'Selecciona categoría'}
        type="category"
      />
      <CardSelector
        items={levels}
        image="levels"
        buttonText={selectedLevel ? `${selectedLevel.number} - ${selectedLevel.name}` : 'Selecciona nivel'}
        type="level"
      />
      <Container sx={{ mt: theme.sizes.bigMargin }}>
        <CTAButton
          text="¡Empezar!"
          onClick={handleStart}
          disabled={!selectedCategory?.uuid || !selectedLevel?.uuid}
          disabledText="Selecciona Categoría y Nivel"
        />
      </Container>
    </div>
  );
}

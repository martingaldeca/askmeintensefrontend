'use client';
import React, { useEffect, useState } from 'react';
import { CircularProgress } from '@mui/material';
import { QuestionsService } from '@/app/lib/client';
import type { Category, Level } from '@/app/lib/client';
import { ListSelector } from '@/atoms';
import { FavoritesFiltersStyled } from '@/components/FavoritesFilters/FavoritesFilters.styles';

const FavoritesFilters: React.FC = () => {
  const [categories, setCategories] = useState<Category[] | null>(null);
  const [levels, setLevels] = useState<Level[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([QuestionsService.categoriesList(), QuestionsService.levelsList()])
      .then(([categoriesRes, levelsRes]) => {
        setCategories(categoriesRes.results);
        setLevels(levelsRes.results);
      })
      .catch(error => {
        console.error('Error fetching filters:', error);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <FavoritesFiltersStyled>
      <ListSelector items={categories} buttonText="Categoría" type="category" />
      <ListSelector items={levels} buttonText="Nivel" type="level" />
    </FavoritesFiltersStyled>
  );
};

export default FavoritesFilters;

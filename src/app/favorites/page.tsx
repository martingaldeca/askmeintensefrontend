'use client';
import React from 'react';
import { Box } from '@mui/material';
import { BackgroundImage, CTAButton } from '@/atoms';
import { PATHS } from '@/constants/paths';
import { FavoriteQuestionList, FavoritesFilters } from '@/components';

export default function FavoritesPage() {
  const handleExploreNew = () => {
    window.location.assign(PATHS.PREGAME);
  };

  return (
    <BackgroundImage image="question_detail">
      <Box position="relative" height="100dvh" p={2} pb={10}>
        <FavoritesFilters />
        <FavoriteQuestionList />
        <CTAButton text="¡Explorar nuevas!" onClick={handleExploreNew} withMargin={true} />
      </Box>
    </BackgroundImage>
  );
}

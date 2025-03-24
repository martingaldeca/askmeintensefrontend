'use client';
import React, { useEffect, useState } from 'react';
import { Box, CircularProgress } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { QuestionsService, ReactionEnum } from '@/app/lib/client';
import type { Question } from '@/app/lib/client';
import { QuestionAccordion } from '@/atoms';

const FavoriteQuestionList: React.FC = () => {
  const selectedCategory = useSelector((state: RootState) => state.gameOptions.selectedCategory);
  const selectedLevel = useSelector((state: RootState) => state.gameOptions.selectedLevel);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchFavorites = () => {
    setLoading(true);
    QuestionsService.favoriteQuestionsList(selectedCategory?.uuid, selectedLevel?.uuid)
      .then(res => {
        setQuestions(res.results);
      })
      .catch(err => {
        console.error('Error fetching favorite questions:', err);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchFavorites();
  }, [selectedCategory, selectedLevel]);

  const handleRemoveFavorite = (questionUuid: string) => {
    QuestionsService.questionsReactRemoveCreate(questionUuid, {
      reaction: ReactionEnum.FAVORITE,
    })
      .then(() => {
        fetchFavorites();
      })
      .catch(err => {
        console.error('Error removing favorite:', err);
      });
  };

  return (
    <Box mt={2} height="70vh" overflow="auto" pr={1}>
      {loading ? (
        <CircularProgress />
      ) : (
        questions.map(question => (
          <QuestionAccordion
            key={question.uuid}
            questionUuid={question.uuid}
            question={question.question}
            example={question.example}
            categories={question.categories}
            levels={question.levels}
            onRemoveFavorite={handleRemoveFavorite}
          />
        ))
      )}
    </Box>
  );
};

export default FavoriteQuestionList;

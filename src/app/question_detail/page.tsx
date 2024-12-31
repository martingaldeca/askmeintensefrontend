'use client';
import React, { useEffect, useCallback } from 'react';
import { Box } from '@mui/material';
import { CTAButton } from '@/atoms';
import { QuestionDetail } from '@/components';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { QuestionsService } from '@/app/lib/client';
import { fetchSelectedQuestion } from '@/store/slices/selectedQuestionSlice';

export default function QuestionDetailPage() {
  const dispatch = useDispatch();
  const { selectedCategory, selectedLevel } = useSelector((state: RootState) => state.gameOptions);
  const selectedQuestion = useSelector((state: RootState) => state.selectedQuestion);

  const loadQuestion = useCallback(() => {
    if (!selectedCategory?.uuid || !selectedLevel?.uuid) return;
    QuestionsService.randomQuestionRetrieve(selectedCategory.uuid, selectedLevel.uuid)
      .then(data => {
        dispatch(fetchSelectedQuestion(data));
      })
      .catch(error => {
        console.error('Error al obtener la pregunta:', error);
      });
  }, [selectedCategory, selectedLevel, dispatch]);

  useEffect(() => {
    loadQuestion();
  }, [loadQuestion]);

  const handleNext = () => {
    loadQuestion();
  };

  return (
    <div>
      {selectedCategory && selectedLevel && selectedQuestion && selectedQuestion.instance && (
        <QuestionDetail category={selectedCategory} level={selectedLevel} question={selectedQuestion.instance} />
      )}
      <Box mt={2}>
        <CTAButton text="Siguiente" onClick={handleNext} />
      </Box>
    </div>
  );
}

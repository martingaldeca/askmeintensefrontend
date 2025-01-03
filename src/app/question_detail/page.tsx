'use client';
import React, { useEffect, useCallback } from 'react';
import { Box } from '@mui/material';
import { BackgroundImage, CTAButton } from '@/atoms';
import { QuestionDetail } from '@/components';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { QuestionsService } from '@/app/lib/client';
import { fetchSelectedQuestion } from '@/store/slices/selectedQuestionSlice';
import { toast } from 'react-toastify';
import { useSession } from '@/providers/SessionProvider';

export default function QuestionDetailPage() {
  const dispatch = useDispatch();
  const { selectedCategory, selectedLevel } = useSelector((state: RootState) => state.gameOptions);
  const selectedQuestion = useSelector((state: RootState) => state.selectedQuestion);
  const { logout } = useSession();

  const loadQuestion = useCallback(() => {
    if (!selectedCategory?.uuid || !selectedLevel?.uuid) return;
    QuestionsService.randomQuestionRetrieve(selectedCategory.uuid, selectedLevel.uuid)
      .then(data => {
        dispatch(fetchSelectedQuestion(data));
      })
      .catch(error => {
        console.error('Error during request:', error);
        logout();
        toast.error('Error during request', {
          toastId: 'api-error',
        });
      });
  }, [selectedCategory, selectedLevel, dispatch, logout]);

  useEffect(() => {
    loadQuestion();
  }, [loadQuestion]);

  const handleNext = () => {
    loadQuestion();
  };

  return (
    <BackgroundImage image="question_detail">
      {selectedCategory && selectedLevel && selectedQuestion && selectedQuestion.instance && (
        <QuestionDetail category={selectedCategory} level={selectedLevel} question={selectedQuestion.instance} />
      )}
      <Box>
        <CTAButton text="Siguiente" onClick={handleNext} />
      </Box>
    </BackgroundImage>
  );
}

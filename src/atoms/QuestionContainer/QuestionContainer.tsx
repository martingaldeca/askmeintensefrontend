import { Typography } from '@mui/material';
import React from 'react';
import {
  QuestionContainerStyled,
  QuestionContainerTitleStyled,
  QuestionTextContainerStyled,
} from '@/atoms/QuestionContainer/QuestionContainer.styles';

export type QuestionContainerProps = {
  question: string;
};

const QuestionContainer = (props: QuestionContainerProps) => {
  return (
    <QuestionContainerStyled>
      <QuestionContainerTitleStyled variant="body1">Pregunta</QuestionContainerTitleStyled>
      <QuestionTextContainerStyled>
        <Typography>{props.question || 'No question available'}</Typography>
      </QuestionTextContainerStyled>
    </QuestionContainerStyled>
  );
};
export default QuestionContainer;

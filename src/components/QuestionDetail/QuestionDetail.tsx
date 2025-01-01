'use client';

import React from 'react';
import { QuestionContainer, TextAccordion } from '@/atoms';
import { Category, Level, SimpleQuestion } from '@/app/lib/client';
import { CategoryLevelInfo } from '@/components';
import { QuestionDetailStyled } from '@/components/QuestionDetail/QuestionDetail.styles';
import QuestionActions from '../QuestionActions/QuestionActions';
import { useSession } from '@/providers/SessionProvider';

export type QuestionDetailProps = {
  category: Category;
  level: Level;
  question: SimpleQuestion;
};

export default function QuestionDetail(props: QuestionDetailProps) {
  const { user } = useSession();
  const disabled = !user?.access;
  return (
    <QuestionDetailStyled>
      <CategoryLevelInfo category={props.category} level={props.level} />
      <QuestionContainer question={props.question?.question} />
      <TextAccordion label="Ejemplo" text={props.question?.example} />
      <QuestionActions
        disable={disabled}
        liked={props.question?.liked}
        disliked={props.question?.disliked}
        favorite={props.question?.favorite}
      />
    </QuestionDetailStyled>
  );
}

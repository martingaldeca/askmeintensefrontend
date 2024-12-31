'use client';

import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import { CTAButton, TextAccordion } from '@/atoms';
import { Category, Level, SimpleQuestion } from '@/app/lib/client';
import { CategoryLevelInfo } from '@/components';

export type QuestionDetailProps = {
  category: Category;
  level: Level;
  question: SimpleQuestion;
};

export default function QuestionDetail(props: QuestionDetailProps) {
  const handleSuggestion = () => {
    console.log('TODO suggestion');
  };

  const handleLike = () => {
    console.log('TODO LIKE AND UNLIKE');
  };

  const handleUnlike = () => {
    console.log('TODO LIKE AND UNLIKE');
  };

  return (
    <Box sx={{ width: '100%', maxWidth: 600, margin: '0 auto', padding: 2 }}>
      {props.category && props.level && <CategoryLevelInfo category={props.category} level={props.level} />}

      <Box sx={{ mb: 2 }}>
        <Typography variant="body1" sx={{ fontWeight: 'bold', mb: 1 }}>
          Pregunta
        </Typography>
        <Box
          sx={{
            border: '1px solid #ccc',
            borderRadius: 1,
            padding: 1,
          }}
        >
          <Typography>{props.question?.question || 'No question available'}</Typography>
        </Box>
      </Box>

      <TextAccordion label="Ejemplo" text={props.question?.example} />
      <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
        <IconButton onClick={handleLike} color="primary">
          <ThumbUpIcon />
        </IconButton>
        <IconButton onClick={handleUnlike} color="error">
          <ThumbDownIcon />
        </IconButton>
        <CTAButton text="Sugerencia de cambio" onClick={handleSuggestion} />
      </Box>
    </Box>
  );
}

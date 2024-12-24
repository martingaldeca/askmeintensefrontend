'use client';

import React, { useState } from 'react';
import { Box, Typography, TextField, IconButton, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import { CTAButton } from '@/atoms';
import { Category, Level, SimpleQuestion } from '@/app/lib/client';
import { CategoryLevelInfo } from '@/components';

export type QuestionDetailProps = {
  category: Category;
  level: Level;
  question: SimpleQuestion;
};

export default function QuestionDetail(props: QuestionDetailProps) {
  const [storeAnswer, setStoreAnswer] = useState('');

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

      <Accordion sx={{ mb: 2 }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="body1">Ejemplo</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <TextField
            variant="filled"
            fullWidth
            multiline
            value={props.question?.example || ''}
            slotProps={{
              input: {
                readOnly: true,
              },
            }}
          />
        </AccordionDetails>
      </Accordion>

      <Box sx={{ mb: 2 }}>
        <TextField
          label="Tu respuesta"
          variant="outlined"
          fullWidth
          multiline
          rows={3}
          value={storeAnswer}
          onChange={e => setStoreAnswer(e.target.value)}
        />
      </Box>

      <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
        <IconButton onClick={handleLike} color="primary">
          <ThumbUpIcon />
        </IconButton>
        <IconButton onClick={handleUnlike} color="error">
          <ThumbDownIcon />
        </IconButton>
        <CTAButton text="Sugerencia de cambio" type="standalone" onClick={handleSuggestion} />
      </Box>
    </Box>
  );
}

'use client';
import React, { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Chip, Typography, AccordionSummary, AccordionDetails } from '@mui/material';
import { CTAButton } from '@/atoms';
import {
  AccordionStyled,
  QuestionTitleTypographyStyled,
  ExampleBoxStyled,
  ActionContainerStyled,
  ChipContainerStyled,
} from './QuestionAccordion.styles';
import { theme } from '@/constants/theme';

export interface QuestionAccordionProps {
  questionUuid: string;
  question: string;
  example?: string | null | undefined;
  categories?: Array<{ uuid: string; name: string }>;
  levels?: Array<{ uuid: string; name: string; number?: number }>;
  onRemoveFavorite?: (questionUuid: string) => void;
}

const QuestionAccordion: React.FC<QuestionAccordionProps> = ({
  questionUuid,
  question,
  example,
  categories,
  levels,
  onRemoveFavorite,
}) => {
  const [expanded, setExpanded] = useState(false);

  const truncateText = (text: string): string => {
    if (text.length <= theme.maxCharacters) return text;
    return text.slice(0, theme.maxCharacters) + '...';
  };

  const handleChange = (_event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded);
  };

  const displayedQuestion = expanded ? question : truncateText(question);

  const handleRemove = () => {
    if (onRemoveFavorite) {
      onRemoveFavorite(questionUuid);
    }
  };

  return (
    <AccordionStyled expanded={expanded} onChange={handleChange}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <QuestionTitleTypographyStyled variant="h6">{displayedQuestion}</QuestionTitleTypographyStyled>
      </AccordionSummary>

      <AccordionDetails>
        {example && (
          <ExampleBoxStyled>
            <Typography variant="subtitle1">
              <strong>Ejemplo</strong>:
            </Typography>
            <Typography>{example}</Typography>
          </ExampleBoxStyled>
        )}

        <ActionContainerStyled>
          <ChipContainerStyled>
            {categories?.map(cat => <Chip key={cat.uuid} label={cat.name} size="small" />)}

            {levels?.map(lev => (
              <Chip key={lev.uuid} label={lev.number ? `${lev.number} - ${lev.name}` : lev.name} size="small" />
            ))}
          </ChipContainerStyled>

          <CTAButton text="Eliminar de favoritos" onClick={handleRemove} error widthOption="medium" />
        </ActionContainerStyled>
      </AccordionDetails>
    </AccordionStyled>
  );
};

export default QuestionAccordion;

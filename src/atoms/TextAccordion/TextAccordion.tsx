import { AccordionDetails, AccordionSummary, TextField, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from 'react';
import { TextAccordionStyled } from '@/atoms/TextAccordion/TextAccordion.styles';

export type TextAccordionProps = {
  label: string;
  text: string | null | undefined;
  defaultValue?: string;
  readonly?: boolean;
};

const TextAccordion = (props: TextAccordionProps) => {
  return (
    <TextAccordionStyled>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant="body1">{props.label}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <TextField
          variant="filled"
          fullWidth
          multiline
          value={props.text || props.defaultValue || ''}
          slotProps={{
            input: {
              readOnly: props.readonly !== undefined ? props.readonly : true,
            },
          }}
        />
      </AccordionDetails>
    </TextAccordionStyled>
  );
};

export default TextAccordion;

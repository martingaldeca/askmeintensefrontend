'use client';

import React, { useState } from 'react';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import StarIcon from '@mui/icons-material/Star';
import { CTAButton } from '@/atoms';
import { QuestionActionsStyled } from '@/components/QuestionActions/QuestionActions.styles';
import CustomIconButton from '../../atoms/CustomIconButton/CustomIconButton';
import { theme } from '@/constants/theme';

export type QuestionActionsProps = {
  disable: boolean;
  liked: boolean | null;
  disliked: boolean | null;
  favorite: boolean | null;
};

const QuestionActions = ({ disable, liked = false, disliked = false, favorite = false }: QuestionActionsProps) => {
  const [isLiked, setIsLiked] = useState(liked);
  const [isDisliked, setIsDisliked] = useState(disliked);
  const [isFavorite, setIsFavorite] = useState(favorite);

  const handleSuggestion = () => {
    console.log('TODO suggestion');
  };

  const handleLike = () => {
    if (disable) return;
    setIsLiked(prev => {
      const newValue = !prev;
      if (newValue) {
        setIsDisliked(false);
      }
      return newValue;
    });
  };

  const handleUnlike = () => {
    if (disable) return;
    setIsDisliked(prev => {
      const newValue = !prev;
      if (newValue) {
        setIsLiked(false);
      }
      return newValue;
    });
  };

  const handleAddFavorite = () => {
    if (disable) return;
    setIsFavorite(prev => !prev);
  };

  return (
    <QuestionActionsStyled>
      <CustomIconButton
        disabled={disable}
        icon={ThumbUpIcon}
        handler={handleLike}
        iconColor={isLiked ? theme.colors.mainColor : theme.colors.unselectedColor}
      />
      <CustomIconButton
        disabled={disable}
        icon={ThumbDownIcon}
        handler={handleUnlike}
        iconColor={isDisliked ? '' : theme.colors.unselectedColor}
        color={isDisliked ? 'error' : undefined}
      />
      <CustomIconButton
        disabled={disable}
        icon={StarIcon}
        handler={handleAddFavorite}
        iconColor={isFavorite ? theme.colors.secondaryColor : theme.colors.unselectedColor}
      />
      <CTAButton disabled={disable} text="Sugerencia de cambio" onClick={handleSuggestion} />
    </QuestionActionsStyled>
  );
};

export default QuestionActions;

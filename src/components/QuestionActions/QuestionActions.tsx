'use client';

import React from 'react';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import StarIcon from '@mui/icons-material/Star';
import { CTAButton } from '@/atoms';
import { QuestionActionsStyled } from '@/components/QuestionActions/QuestionActions.styles';
import CustomIconButton from '../../atoms/CustomIconButton/CustomIconButton';
import { theme } from '@/constants/theme';
import { QuestionsService, ReactionEnum } from '@/app/lib/client';
import { fetchSelectedQuestion } from '@/store/slices/selectedQuestionSlice';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

export type QuestionActionsProps = {
  disabled: boolean;
  questionUuid: string;
  liked: boolean | null;
  disliked: boolean | null;
  favorite: boolean | null;
};

const QuestionActions = (props: QuestionActionsProps) => {
  const dispatch = useDispatch();
  const handleSuggestion = () => {
    toast.error('Not available yet!', {
      toastId: 'not-available',
    });
  };

  const handleLike = () => {
    if (props.disabled) return;
    if (!props.liked) {
      QuestionsService.questionsReactCreate(props.questionUuid, { reaction: ReactionEnum.LIKE })
        .then(data => {
          dispatch(fetchSelectedQuestion(data));
        })
        .catch(error => {
          console.error('Error during request:', error);
          toast.error('Error during request', {
            toastId: 'api-error',
          });
        });
    } else {
      QuestionsService.questionsReactRemoveCreate(props.questionUuid, { reaction: ReactionEnum.LIKE })
        .then(data => {
          dispatch(fetchSelectedQuestion(data));
        })
        .catch(error => {
          console.error('Error during request:', error);
          toast.error('Error during request', {
            toastId: 'api-error',
          });
        });
    }
  };

  const handleDislike = () => {
    if (props.disabled) return;
    if (!props.disliked) {
      QuestionsService.questionsReactCreate(props.questionUuid, { reaction: ReactionEnum.DISLIKE })
        .then(data => {
          dispatch(fetchSelectedQuestion(data));
        })
        .catch(error => {
          console.error('Error during request:', error);
          toast.error('Error during request', {
            toastId: 'api-error',
          });
        });
    } else {
      QuestionsService.questionsReactRemoveCreate(props.questionUuid, { reaction: ReactionEnum.DISLIKE })
        .then(data => {
          dispatch(fetchSelectedQuestion(data));
        })
        .catch(error => {
          console.error('Error during request:', error);
          toast.error('Error during request', {
            toastId: 'api-error',
          });
        });
    }
  };

  const handleAddFavorite = () => {
    if (props.disabled) return;
    if (!props.favorite) {
      QuestionsService.questionsReactCreate(props.questionUuid, { reaction: ReactionEnum.FAVORITE })
        .then(data => {
          dispatch(fetchSelectedQuestion(data));
        })
        .catch(error => {
          console.error('Error during request:', error);
          toast.error('Error during request', {
            toastId: 'api-error',
          });
        });
    } else {
      QuestionsService.questionsReactRemoveCreate(props.questionUuid, { reaction: ReactionEnum.FAVORITE })
        .then(data => {
          dispatch(fetchSelectedQuestion(data));
        })
        .catch(error => {
          console.error('Error during request:', error);
          toast.error('Error during request', {});
        });
    }
  };

  return (
    <QuestionActionsStyled>
      <CustomIconButton
        disabled={props.disabled}
        icon={ThumbUpIcon}
        handler={handleLike}
        iconColor={props.liked ? theme.colors.mainColor : theme.colors.unselectedColor}
      />
      <CustomIconButton
        disabled={props.disabled}
        icon={ThumbDownIcon}
        handler={handleDislike}
        iconColor={props.disliked ? '' : theme.colors.unselectedColor}
        color={props.disliked ? 'error' : undefined}
      />
      <CustomIconButton
        disabled={props.disabled}
        icon={StarIcon}
        handler={handleAddFavorite}
        iconColor={props.favorite ? theme.colors.secondaryColor : theme.colors.unselectedColor}
      />
      <CTAButton disabled={props.disabled} text="Sugerencia de cambio" onClick={handleSuggestion} />
    </QuestionActionsStyled>
  );
};

export default QuestionActions;

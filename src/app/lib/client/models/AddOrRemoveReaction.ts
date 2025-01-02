/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ReactionEnum } from './ReactionEnum';
import type { StatusEnum } from './StatusEnum';
export type AddOrRemoveReaction = {
  /**
   * UUID of the question
   */
  readonly uuid: string;
  /**
   * Question
   */
  readonly question: string;
  /**
   * The status of the question
   *
   * * `APPROVED` - APPROVED
   * * `DENIED` - DENIED
   * * `PENDING_REVIEW` - PENDING_REVIEW
   */
  status?: StatusEnum;
  /**
   * Example of one valid answer for the question
   */
  example?: string | null;
  /**
   * Field that indicate if the question is liked by the user.
   */
  readonly liked: boolean;
  /**
   * Field that indicate if the question is disliked by the user.
   */
  readonly disliked: boolean;
  /**
   * Field that indicate if the question is one of the user's favorite questions.
   */
  readonly favorite: boolean;
  /**
   * Reaction to add or remove
   *
   * * `LIKE` - LIKE
   * * `DISLIKE` - DISLIKE
   * * `FAVORITE` - FAVORITE
   */
  reaction: ReactionEnum;
};

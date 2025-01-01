/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Category } from './Category';
import type { Level } from './Level';
import type { StatusEnum } from './StatusEnum';
export type Question = {
  uuid: string;
  /**
   * Question text, this is the main question that will appear to the asker
   */
  question: string;
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
   * Categories of the question
   */
  categories: Array<Category>;
  /**
   * Levels of the question
   */
  levels: Array<Level>;
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
};

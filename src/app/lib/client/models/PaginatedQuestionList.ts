/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Question } from './Question';
export type PaginatedQuestionList = {
  count: number;
  next?: string | null;
  previous?: string | null;
  results: Array<Question>;
};

/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ReactionEnum } from './ReactionEnum';
export type AddOrRemoveInputReactionRequest = {
  /**
   * Reaction to add or remove
   *
   * * `LIKE` - LIKE
   * * `DISLIKE` - DISLIKE
   * * `FAVORITE` - FAVORITE
   */
  reaction: ReactionEnum;
};

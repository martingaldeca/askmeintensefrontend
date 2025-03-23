/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AddOrRemoveInputReactionRequest } from '../models/AddOrRemoveInputReactionRequest';
import type { AddOrRemoveReaction } from '../models/AddOrRemoveReaction';
import type { PaginatedCategoryList } from '../models/PaginatedCategoryList';
import type { PaginatedLevelList } from '../models/PaginatedLevelList';
import type { PaginatedQuestionList } from '../models/PaginatedQuestionList';
import type { SimpleQuestion } from '../models/SimpleQuestion';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class QuestionsService {
  /**
   * @param limit Number of results to return per page.
   * @param offset The initial index from which to return the results.
   * @returns PaginatedCategoryList
   * @throws ApiError
   */
  public static categoriesList(limit?: number, offset?: number): CancelablePromise<PaginatedCategoryList> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/categories/',
      query: {
        limit: limit,
        offset: offset,
      },
    });
  }
  /**
   * @param limit Number of results to return per page.
   * @param offset The initial index from which to return the results.
   * @returns PaginatedQuestionList
   * @throws ApiError
   */
  public static favoriteQuestionsList(limit?: number, offset?: number): CancelablePromise<PaginatedQuestionList> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/favorite_questions/',
      query: {
        limit: limit,
        offset: offset,
      },
    });
  }
  /**
   * @param limit Number of results to return per page.
   * @param offset The initial index from which to return the results.
   * @returns PaginatedLevelList
   * @throws ApiError
   */
  public static levelsList(limit?: number, offset?: number): CancelablePromise<PaginatedLevelList> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/levels/',
      query: {
        limit: limit,
        offset: offset,
      },
    });
  }
  /**
   * @param category Category uuid
   * @param level Level uuid
   * @param limit Number of results to return per page.
   * @param offset The initial index from which to return the results.
   * @returns PaginatedQuestionList
   * @throws ApiError
   */
  public static questionsList(
    category?: string,
    level?: string,
    limit?: number,
    offset?: number,
  ): CancelablePromise<PaginatedQuestionList> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/questions/',
      query: {
        category: category,
        level: level,
        limit: limit,
        offset: offset,
      },
    });
  }
  /**
   * @param uuid
   * @param requestBody
   * @returns AddOrRemoveReaction
   * @throws ApiError
   */
  public static questionsReactCreate(
    uuid: string,
    requestBody: AddOrRemoveInputReactionRequest,
  ): CancelablePromise<AddOrRemoveReaction> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/api/questions/{uuid}/react/',
      path: {
        uuid: uuid,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }
  /**
   * @param uuid
   * @param requestBody
   * @returns AddOrRemoveReaction
   * @throws ApiError
   */
  public static questionsReactRemoveCreate(
    uuid: string,
    requestBody: AddOrRemoveInputReactionRequest,
  ): CancelablePromise<AddOrRemoveReaction> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/api/questions/{uuid}/react/remove/',
      path: {
        uuid: uuid,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }
  /**
   * @param category
   * @param level
   * @returns SimpleQuestion
   * @throws ApiError
   */
  public static randomQuestionRetrieve(category: string, level: string): CancelablePromise<SimpleQuestion> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/random_question/{category}/{level}',
      path: {
        category: category,
        level: level,
      },
    });
  }
}

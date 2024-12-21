/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PaginatedCategoryList } from '../models/PaginatedCategoryList';
import type { PaginatedLevelList } from '../models/PaginatedLevelList';
import type { PaginatedQuestionList } from '../models/PaginatedQuestionList';
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
}

/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Me } from '../models/Me';
import type { PatchedMe } from '../models/PatchedMe';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class UsersService {
  /**
   * @returns Me
   * @throws ApiError
   */
  public static meRetrieve(): CancelablePromise<Me> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/me/',
    });
  }
  /**
   * @param requestBody
   * @returns Me
   * @throws ApiError
   */
  public static meUpdate(requestBody: Me): CancelablePromise<Me> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/api/me/',
      body: requestBody,
      mediaType: 'application/json',
    });
  }
  /**
   * @param requestBody
   * @returns Me
   * @throws ApiError
   */
  public static mePartialUpdate(requestBody?: PatchedMe): CancelablePromise<Me> {
    return __request(OpenAPI, {
      method: 'PATCH',
      url: '/api/me/',
      body: requestBody,
      mediaType: 'application/json',
    });
  }
}

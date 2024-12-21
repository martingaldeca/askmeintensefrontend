/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Me } from '../models/Me';
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
}

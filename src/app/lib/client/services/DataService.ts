/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DataEvent } from '../models/DataEvent';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class DataService {
  /**
   * @param requestBody
   * @returns DataEvent
   * @throws ApiError
   */
  public static dataEventCreate(requestBody: DataEvent): CancelablePromise<DataEvent> {
    const bodyWithVersion = {
      ...requestBody,
      app_version: OpenAPI.VERSION,
    };
    return __request(OpenAPI, {
      method: 'POST',
      url: '/api/data_event/',
      body: bodyWithVersion,
      mediaType: 'application/json',
    });
  }
}

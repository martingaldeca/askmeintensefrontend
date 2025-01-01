/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GoogleSocialAuth } from '../models/GoogleSocialAuth';
import type { Register } from '../models/Register';
import type { TokenObtainPair } from '../models/TokenObtainPair';
import type { TokenRefresh } from '../models/TokenRefresh';
import type { TokenVerify } from '../models/TokenVerify';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class TokenService {
  /**
   * @param requestBody
   * @returns Register
   * @throws ApiError
   */
  public static registerCreate(requestBody: Register): CancelablePromise<Register> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/api/register/',
      body: requestBody,
      mediaType: 'application/json',
    });
  }
  /**
   * @param requestBody
   * @returns GoogleSocialAuth
   * @throws ApiError
   */
  public static tokenGoogleCreate(requestBody: GoogleSocialAuth): CancelablePromise<TokenObtainPair> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/api/token/google/',
      body: requestBody,
      mediaType: 'application/json',
    });
  }
  /**
   * Takes a set of user credentials and returns an access and refresh JSON web
   * token pair to prove the authentication of those credentials.
   * @param requestBody
   * @returns TokenObtainPair
   * @throws ApiError
   */
  public static tokenLoginCreate(requestBody: TokenObtainPair): CancelablePromise<TokenObtainPair> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/api/token/login/',
      body: requestBody,
      mediaType: 'application/json',
    });
  }
  /**
   * Takes a refresh type JSON web token and returns an access type JSON web
   * token if the refresh token is valid.
   * @param requestBody
   * @returns TokenRefresh
   * @throws ApiError
   */
  public static tokenRefreshCreate(requestBody: TokenRefresh): CancelablePromise<TokenRefresh> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/api/token/refresh/',
      body: requestBody,
      mediaType: 'application/json',
    });
  }
  /**
   * Takes a token and indicates if it is valid.  This view provides no
   * information about a token's fitness for a particular use.
   * @param requestBody
   * @returns TokenVerify
   * @throws ApiError
   */
  public static tokenVerifyCreate(requestBody: TokenVerify): CancelablePromise<TokenVerify> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/api/token/verify/',
      body: requestBody,
      mediaType: 'application/json',
    });
  }
}

/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AvatarEnum } from './AvatarEnum';
export type PatchedMe = {
  readonly uuid?: string;
  /**
   * User's email.
   */
  email?: string;
  first_name?: string;
  last_name?: string;
  /**
   * Name of the avatar. It will be obtained from the frontend statics.
   *
   * * `black` - Black
   * * `white` - White
   * * `orange` - Orange
   * * `blue` - Blue
   * * `purple` - Purple
   * * `red` - Red
   * * `green` - Green
   * * `pink` - Pink
   * * `yellow` - Yellow
   */
  avatar?: AvatarEnum;
  /**
   * User's birthdate.
   */
  birthdate?: string | null;
};

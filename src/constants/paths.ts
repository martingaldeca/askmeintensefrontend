export enum PATHS {
  LOGIN_OR_REGISTER = '/login_or_register',
  LOGIN = '/login',
  REGISTER = '/register',
  QUESTION_DETAIL = '/question_detail',
  PREGAME = '/pregame',
  FAVORITES = '/favorites',
  PROFILE = '/profile',
  HOME = '/',
}

export const PATHS_WITHOUT_NAVBAR: PATHS[] = [PATHS.LOGIN, PATHS.REGISTER, PATHS.LOGIN_OR_REGISTER];
export const PATHS_ONLY_ALLOWED_WHEN_NOT_LOGIN: PATHS[] = [PATHS.LOGIN, PATHS.REGISTER, PATHS.LOGIN_OR_REGISTER];
export const PATHS_ONLY_ALLOWED_WHEN_LOGIN: PATHS[] = [PATHS.PROFILE, PATHS.FAVORITES];

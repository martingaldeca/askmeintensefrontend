export enum PATHS {
  LOGIN_OR_REGISTER = '/login_or_register',
  LOGIN = '/login',
  REGISTER = '/register',
  QUESTION_DETAIL = '/question_detail',
  PREGAME = '/pregame',
  HOME = '/',
}

export const PATHS_WITHOUT_NAVBAR: PATHS[] = [PATHS.LOGIN, PATHS.REGISTER, PATHS.LOGIN_OR_REGISTER];

export const users = {
  standard: {
    username: 'standard_user',
    password: 'secret_sauce',
  },
  invalidUsername: {
    username: 'invalid_user',
    password: 'secret_sauce',
  },
  invalidPassword: {
    username: 'standard_user',
    password: 'invalid_password',
  },
  emptyPassword: {
    username: 'standard_user',
    password: '',
  },
  blockedUsername: {
    username: 'locked_out_user',
    password: 'secret_sauce',
  },
};
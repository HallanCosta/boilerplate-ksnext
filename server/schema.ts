import { Lists } from '.keystone/types';

import { user } from './lists/user';
import { functionality } from './lists/functionality';
import { post } from './lists/post';
import { tag } from './lists/tag';

export const lists: Lists = {
  User: user,
  Post: post,
  Tag: tag,
  Functionality: functionality,
};

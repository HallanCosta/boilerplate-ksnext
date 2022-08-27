import { list } from '@keystone-6/core';
import { 
  text,
  password,
  relationship
} from '@keystone-6/core/fields';

export const user = list({
  fields: {
    name: text({ validation: { isRequired: true } }),
    email: text({
      validation: { isRequired: true },
      isIndexed: 'unique',
      isFilterable: true,
    }),
    password: password({ validation: { isRequired: true } }),
    posts: relationship({ ref: 'Post.author', many: true }),
  },
  ui: {
    listView: {
      initialColumns: ['name', 'posts'],
    },
  },
});
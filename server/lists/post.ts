import { list } from '@keystone-6/core';
import { document } from '@keystone-6/fields-document';
import { 
  text,
  select,
  relationship,
  timestamp
} from '@keystone-6/core/fields';

export const post = list({
  fields: {
    title: text(),
    status: select({
      options: [
        { label: 'Publicado', value: 'published' },
        { label: 'Rascunho', value: 'draft' },
      ],
      defaultValue: 'draft',
      ui: {
        displayMode: 'segmented-control',
      },
    }),
    content: document({
      formatting: true,
      layouts: [
        [1, 1],
        [1, 1, 1],
        [2, 1],
        [1, 2],
        [1, 2, 1],
      ],
      links: true,
      dividers: true,
    }),
    publishDate: timestamp(),
    author: relationship({
      ref: 'User.posts',
      ui: {
        displayMode: 'cards',
        cardFields: ['name', 'email'],
        inlineEdit: { fields: ['name', 'email'] },
        linkToItem: true,
        inlineConnect: true,
      },
    }),
    tags: relationship({
      ref: 'Tag.posts',
      ui: {
        displayMode: 'cards',
        cardFields: ['name'],
        inlineEdit: { fields: ['name'] },
        linkToItem: true,
        inlineConnect: true,
        inlineCreate: { fields: ['name'] },
      },
      many: true,
    }),
  },
});
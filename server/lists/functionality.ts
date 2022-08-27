import { list } from '@keystone-6/core';
import { 
  text,
  image
} from '@keystone-6/core/fields';

export const functionality = list({
  fields: {
    title: text({ validation: { isRequired: true } }),
    description: text({ validation: { isRequired: true } }),
    url: text()
  },
  ui: {
    label: 'Funcionalidades',
    description: 'Adicione uma nova funcionalidade',
  },
});
import { config } from '@keystone-6/core';
import dotenv from 'dotenv';

import { lists } from './schema';

import { withAuth, session } from './auth';

dotenv.config();

const {
  S3_BUCKET_NAME: bucketName = 'keystone-test',
  S3_REGION: region = 'ap-southeast-2',
  S3_ACCESS_KEY_ID: accessKeyId = 'keystone',
  S3_SECRET_ACCESS_KEY: secretAccessKey = 'keystone',
  ASSET_BASE_URL: baseUrl = 'http://localhost:3333',
} = process.env;

export default withAuth(
  config({
    db: {
      provider: 'sqlite',
      url: 'file:./app.db'
    },
    server: {
      port: 3333,
      cors: {
        origin: '*'
      }
    },
    ui: {
      isAccessAllowed: (context) => !!context.session?.data,
    },
    lists,
    storage: {
      my_local_images: {
        kind: 'local',
        type: 'image',
        generateUrl: path => `${baseUrl}/images${path}`,
        serverRoute: {
          path: '/images',
        },
        storagePath: 'public/images',
      },
    },
    session,
  })
);
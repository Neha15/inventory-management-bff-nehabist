import {ObjectFactory} from 'typescript-ioc';

const baseUrl: string = process.env.SERVICE_URL || '127.0.0.1:9080';

export const stockItemConfigFactory: ObjectFactory = () => ({
  baseUrl,
});
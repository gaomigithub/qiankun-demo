import DevConfig from './config.dev';
import QaConfig from './config.qa';
import PreConfig from './config.pre';
import ProdConfig from './config.prod';
import { Config } from './types';

let config: Config;

if (process.env.NODE_ENV === 'development') {
  config = DevConfig;
} else if (process.env.NODE_ENV === 'qa') {
  config = QaConfig;
} else if (process.env.NODE_ENV === 'pre') {
  config = PreConfig;
} else if (process.env.NODE_ENV === 'prod') {
  config = ProdConfig;
} else {
  config = DevConfig;
}

export default config;

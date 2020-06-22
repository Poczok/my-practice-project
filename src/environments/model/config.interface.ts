import { IAuth0Config } from './auth0-config.interface';
import { IO365Config } from './o365-config.interface';

export interface IConfig {
  production: boolean;
  apiUrl: string;
  adminApiUrl: string;
  auth0: IAuth0Config;
  o365: IO365Config;
  idleTimeout: number;
}

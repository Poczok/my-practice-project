export interface IAuth0Config {
  domain: string;
  clientId: string;
  redirectUrl: string;
  audience: string;
  allowedConnections: string[];
  claims: {
    email: string;
    subscription: string;
    language: string;
  };
}

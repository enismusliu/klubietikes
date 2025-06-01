import { JWTPayload } from "jose";
import { UserIdentity } from "./authentication.interfaces";

export interface SessionPayload extends JWTPayload {
  access_token: string;
  refresh_token: string;
  refresh_token_exp: string;
  user: UserIdentity;
}

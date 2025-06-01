import { PropsWithChildren } from 'react';

export interface UserProviderProps extends PropsWithChildren {
  user: UserIdentity | null;
}

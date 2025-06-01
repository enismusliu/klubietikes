"use client";

import { UserIdentity } from "@/interfaces/auth/authentication.interfaces";
import { PropsWithChildren, useEffect } from "react";
import { useUserStore } from "stores/user.store";

interface Props extends PropsWithChildren {
  data: UserIdentity | null;
}
export default function UserProvider({ data, children }: Props) {
  /**
   * @globals
   */
  const setUser = useUserStore((state) => state.setUser);
  /**
   * @effects
   */
  useEffect(() => {
    if (data) {
      setUser(data);
    }
  }, [data]);

  return <>{children}</>;
}

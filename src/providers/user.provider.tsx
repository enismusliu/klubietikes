"use client";

import { UserIdentity } from "@/interfaces/auth/authentication.interfaces";
import { useUserStore } from "@/stores/user.store";
import { PropsWithChildren, useEffect } from "react";

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

"use client";

import { RotateCwIcon, Search } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState, useTransition } from "react";

import { Input, InputProps } from "../ui/input";

import { useDebounceCallback } from "usehooks-ts";

interface MyInputProps extends InputProps {
  className?: string;
}

export default function SearchInput({ className, ...rest }: MyInputProps) {
  const [query, setQuery] = useState("");

  /**
   * @hooks
   */
  const { replace } = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const debounced = useDebounceCallback(setQuery, 150);

  /**
   * @effects
   */
  useEffect(() => {
    handleSearch(query);
  }, [query]);

  /**
   * @handlers
   */
  function handleSearch(query: string) {
    const params = new URLSearchParams(window.location.search);

    if (query) {
      params.set("q", query);
      if (params.has("page")) params.delete("page");
    } else params.delete("q");

    startTransition(() => {
      replace(`${pathname}?${params.toString()}`);
    });
  }

  return (
    <Input
      id="search"
      name="search"
      startAdornment={<Search className="h-5 w-5 text-muted-foreground" />}
      onChange={(event) => debounced(event.target.value)}
      {...rest}
      placeholder="Search"
      endAdornment={
        isPending ? (
          <RotateCwIcon className="h-5 w-5 animate-spin text-muted" />
        ) : (
          <></>
        )
      }
      className={`h-9 max-w-60 ${className}`}
    />
  );
}

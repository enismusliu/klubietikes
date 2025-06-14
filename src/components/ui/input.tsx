import * as React from "react";

import { cn } from "@/lib/utils";
import { JSX } from "react";

export interface InputProps extends React.ComponentProps<"input"> {
  startAdornment?: JSX.Element;
  endAdornment?: JSX.Element;
}
function Input({
  className,
  type,
  startAdornment,
  endAdornment,
  ...props
}: InputProps) {
  const hasAdornment = Boolean(startAdornment) || Boolean(endAdornment);
  return (
    <>
      {hasAdornment ? (
        <label
          className={cn(
            "flex h-11 items-center justify-center gap-2 rounded-lg border border-input bg-white px-3 shadow-xs ring-offset-background focus-within:ring-1 focus-within:ring-ring focus-within:ring-offset-1 data-[disabled=true]:cursor-not-allowed data-[disabled=true]:opacity-50  focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[1px]",
            className
          )}
          data-disabled={props.disabled}
        >
          {startAdornment && (
            <div className={cn("text-muted-foreground")}>{startAdornment}</div>
          )}
          <input
            type={type}
            data-slot="input"
            className={cn(
              "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30  flex h-11 w-full min-w-0 rounded-lg  bg-transparent px-2 py-1 text-base  transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
              "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
              className
            )}
            {...props}
          />
          {endAdornment && (
            <div className={cn("text-muted-foreground")}>{endAdornment}</div>
          )}
        </label>
      ) : (
        <input
          type={type}
          data-slot="input"
          className={cn(
            "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-11 w-full min-w-0 rounded-lg border bg-transparent px-2 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
            "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
            className
          )}
          {...props}
        />
      )}
    </>
  );
}

export { Input };

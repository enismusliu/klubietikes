import { JSX, ReactNode } from "react";
import { Control, FieldValues, Path } from "react-hook-form";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input, type InputProps } from "@/components/ui/input";

interface TextFieldProps<TField extends FieldValues> extends InputProps {
  control: Control<TField>;
  name: Path<TField>;
  label?: ReactNode;
  description?: ReactNode;
  icon?: JSX.Element;
  readonly?: boolean;
}

export default function TextField<TField extends FieldValues>({
  control,
  name,
  icon,
  label,
  description,
  required,
  readOnly,
  ...rest
}: TextFieldProps<TField> & { defaultValue?: string }) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>
            {label}
            {required && <span className="text-destructive">*</span>}
          </FormLabel>
          <FormControl>
            <Input
              id={`input-${name}`}
              startAdornment={icon}
              readOnly={readOnly}
              onWheel={(e) => (e.target as HTMLInputElement).blur()}
              {...rest}
              {...field}
            />
          </FormControl>
          {description}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

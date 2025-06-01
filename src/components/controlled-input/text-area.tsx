import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { type InputProps } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { JSX, ReactNode } from "react";
import { Control, FieldValues, Path } from "react-hook-form";
import { Textarea } from "../ui/textarea";

interface TextAreaProps<TField extends FieldValues> extends InputProps {
  control: Control<TField>;
  name: Path<TField>;
  label?: ReactNode;
  placeholder?: string;
  description?: ReactNode;
  icon?: JSX.Element;
  classname?: string;
  disabled?: boolean;
  readOnly?: boolean;
}

export default function TextArea<TField extends FieldValues>({
  control,
  name,
  label,
  placeholder,
  description,
  className,
  disabled,
  required,
  readOnly,
}: TextAreaProps<TField>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>
            {label}
            {required && <span>*</span>}
          </FormLabel>
          <FormControl>
            <Textarea
              id={`input-${name}`}
              placeholder={placeholder}
              disabled={disabled}
              readOnly={readOnly}
              {...field}
              className={cn(className, "bg-white")}
            />
          </FormControl>
          {description}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

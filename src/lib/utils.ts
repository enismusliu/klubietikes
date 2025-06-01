import React from "react";
import { Error as ErrorType, Option } from "@/types";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export class CustomError extends Error {
  code = "invalid_credentials";

  constructor(code?: any, message?: any, errorOptions?: any) {
    super(message, errorOptions);
    this.code = code;
    this.message = message;
  }
}

export function getValidChildren(children: React.ReactNode) {
  return React.Children.toArray(children).filter((child) =>
    React.isValidElement(child)
  ) as React.ReactElement[];
}

export function replaceFalsyValuesWithDefault<T extends Record<string, any>>(
  obj: T,
  defaultValue: string = ""
): { [K in keyof T]: string } {
  const result: { [K in keyof T]: string } = {} as any;

  for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      result[key] = obj[key] ? obj[key].toString() : defaultValue;
    }
  }

  return result;
}

/**
 *
 */
export interface DataObject {
  [key: string]: string | string[] | number;
}

export function filterIdentityObject(obj: DataObject): DataObject {
  const filteredObj: DataObject = {};
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const value = obj[key];
      if (value === "read" || Array.isArray(value)) {
        filteredObj[key] = value;
      }
    }
  }
  return filteredObj;
}

/**
 * Filters an object from falsy values
 * @param obj
 * @returns
 */
export function filterObject<T>(obj: Record<string, T>): Record<string, T> {
  return Object.keys(obj).reduce((acc, key) => {
    if (obj[key]) acc[key] = obj[key];

    return acc;
  }, {} as Record<string, T>);
}

export const generateDropzoneAcceptObject = (
  types: string[],
  fileType: string
): { [key: string]: string[] } => {
  const result: { [key: string]: string[] } = {};

  types.forEach((type) => {
    const mimeType = `${fileType}/${type}`;
    result[mimeType] = [`.${type}`];
  });

  return result;
};

export const getLanguageName = (value: string) => {
  const languageMap = {
    en: "English",
    fr: "French",
    nl: "Dutch",
  };
  type LanguageCode = keyof typeof languageMap;

  return languageMap[value as LanguageCode];
};

/**
 * converts an error string to @Error object
 */
export function formatError(error: Error) {
  return JSON.parse(error.message) as ErrorType[];
}

export function removeFalsyValuesFromObj<T extends Record<string, any>>(
  obj: T
): Partial<T> {
  const result: Partial<T> = {};

  for (const key in obj) {
    if (obj[key]) {
      result[key] = obj[key];
    }
  }

  return result;
}

interface TransformResult {
  options: Option[];
  defaultValues?: Option[];
  isLoading: boolean;
}

export function transformMultiSelectItems(
  options: Option[],
  defaultValues?: Option[],
  isLoading: boolean = false
): TransformResult {
  if (!defaultValues) return { options, isLoading };

  const filteredDefaultValue = defaultValues.filter(
    (defaultItem) => !options.some((item) => item.value === defaultItem.value)
  );

  return {
    options: [...filteredDefaultValue, ...options],
    defaultValues: defaultValues,
    isLoading,
  };
}
export const safeDecode = (text: string): string => {
  try {
    const decoded = decodeURIComponent(text);
    return decoded !== text ? decoded : text;
  } catch {
    return text;
  }
};

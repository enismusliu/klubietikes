import type {} from "react-select/base";
// This import is necessary for module augmentation.
// It allows us to extend the 'Props' interface in the 'react-select/base' module
// and add our custom property 'leftSection' to it.

declare module "react-select/base" {
  export interface Props<
    Option,
    IsMulti extends boolean,
    Group extends GroupBase<Option>
  > {
    leftSection?: React.ReactNode;
    rightSection?: React.ReactNode;
  }
}

export type TFunction = {
  <
    TargetKey extends MessageKeys<
      NestedValueOf<
        {
          "!": IntlMessages;
        },
        [NestedKey] extends [never] ? "!" : `!.${NestedKey}`
      >,
      NestedKeyOf<
        NestedValueOf<
          {
            "!": IntlMessages;
          },
          [NestedKey] extends [never] ? "!" : `!.${NestedKey}`
        >
      >
    >
  >(
    key: TargetKey,
    values?: TranslationValues,
    formats?: Partial<Formats>
  ): string;
  rich<
    TargetKey extends MessageKeys<
      NestedValueOf<
        {
          "!": IntlMessages;
        },
        [NestedKey] extends [never] ? "!" : `!.${NestedKey}`
      >,
      NestedKeyOf<
        NestedValueOf<
          {
            "!": IntlMessages;
          },
          [NestedKey] extends [never] ? "!" : `!.${NestedKey}`
        >
      >
    >
  >(
    key: TargetKey,
    values?: RichTranslationValues,
    formats?: Partial<Formats>
  ): string | ReactElement | ReactNodeArray;
  markup<
    TargetKey extends MessageKeys<
      NestedValueOf<
        {
          "!": IntlMessages;
        },
        [NestedKey] extends [never] ? "!" : `!.${NestedKey}`
      >,
      NestedKeyOf<
        NestedValueOf<
          {
            "!": IntlMessages;
          },
          [NestedKey] extends [never] ? "!" : `!.${NestedKey}`
        >
      >
    >
  >(
    key: TargetKey,
    values?: MarkupTranslationValues,
    formats?: Partial<Formats>
  ): string;
  raw<
    TargetKey extends MessageKeys<
      NestedValueOf<
        {
          "!": IntlMessages;
        },
        [NestedKey] extends [never] ? "!" : `!.${NestedKey}`
      >,
      NestedKeyOf<
        NestedValueOf<
          {
            "!": IntlMessages;
          },
          [NestedKey] extends [never] ? "!" : `!.${NestedKey}`
        >
      >
    >
  >(
    key: TargetKey
  ): any;
};

export type Option = {
  label: string;
  value: string | number;
};

type Error = {
  errorCode: string;
  errorText: string;
};

type PaginationData = {
  totalPages: number;
  totalItems: number;
  currentPageNumber: number;
  pageSize: number;
  previousPageExists: boolean;
  nextPageExists: boolean;
  currentPageIsFirstPage: boolean;
  currentPageIsLastPage: boolean;
  firstItemOnCurrentPage: number;
  lastItemOnCurrentPage: number;
};

export type Response<T = null> = {
  data: T;
  paginationData: PaginationData;
  successMessage: string | null;
  status: string;
  errorMessages: Error[] | null;
  isSuccess: boolean;
};

export type PageParams = {
  params: Promise<{ id: string; slug: string }>;
  searchParams: Promise<{ [key: string]: string }>;
};

export type QueryParams = { [key: string]: string };

export type ActionProps = {
  remove?: (index: number) => void;
  update: (index: number, item: T) => void;
};
export type Roles = {
  id: string;
  name: string;
};

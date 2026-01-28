import {
  useQueryStates,
  parseAsArrayOf,
  parseAsInteger,
  parseAsString,
  parseAsStringLiteral,
} from "nuqs";

const sortValues = ["curated", "trending", "hot_and_new"] as const;

export const params = {
  sort: parseAsStringLiteral(sortValues).withDefault("curated"),
  minPrice: parseAsInteger
    .withOptions({
      clearOnDefault: true,
    })
    .withDefault(0),
  maxPrice: parseAsInteger
    .withOptions({
      clearOnDefault: true,
    })
    .withDefault(0),
  tags: parseAsArrayOf(parseAsString)
    .withOptions({
      clearOnDefault: true,
    })
    .withDefault([]),
};

export const useProductFilters = () => {
  return useQueryStates(params);
};

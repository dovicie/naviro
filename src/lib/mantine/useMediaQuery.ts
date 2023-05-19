import { useMediaQuery as useMediaQueryOriginal } from "@mantine/hooks";

/* Mantineと一致させる: https://mantine.dev/styles/responsive/ */
const map = {
  xs: "36em",
  sm: "48em",
  md: "62em",
  lg: "75em",
  xl: "88em",
} as const;

export const useMediaQuery = (
  query: keyof typeof map,
  initialValue: Parameters<typeof useMediaQueryOriginal>[1] = true
) => {
  return useMediaQueryOriginal(`(min-width: ${map[query]})`, initialValue);
};

import { useMediaQuery as useMediaQueryOriginal } from "@mantine/hooks";

/* Mantineと一致させる: https://mantine.dev/styles/responsive/ */
const map = {
  lg: "75em",
  md: "62em",
  sm: "48em",
  xl: "88em",
  xs: "36em",
} as const;

export const useMediaQuery = (
  query: keyof typeof map,
  initialValue: Parameters<typeof useMediaQueryOriginal>[1] = true
) => {
  return useMediaQueryOriginal(`(min-width: ${map[query]})`, initialValue);
};

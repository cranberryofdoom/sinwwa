import { colors } from "styles";

export type BaseTypographyProps = {
  children: string | React.ReactNode;
  className?: string;
  color: keyof typeof colors;
  textAlign?: React.CSSProperties["textAlign"];
  textTransform?: React.CSSProperties["textTransform"];
  textWrap?: React.CSSProperties["textWrap"];
};

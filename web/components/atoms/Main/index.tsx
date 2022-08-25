import { HTMLAttributes, ReactNode } from "react";

import { Container } from "./styles";

type Props = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
}

export function Main({ children }: Props) {
  return (
    <Container>
      {children}
    </Container>
  );
}
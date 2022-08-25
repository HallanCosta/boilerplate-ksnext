import { HTMLAttributes, ReactNode } from 'react';

import { Container } from './styles';

type Props = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
}

export function Background({ 
  children, 
  ...rest 
}: Props) {
  return (
    <Container>
      {children}
    </Container>
  );
}
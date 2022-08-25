import { HTMLAttributes, ReactNode } from 'react';

import { Title } from './styles';

type Props = HTMLAttributes<HTMLElement> & {
  title: string;
  children: ReactNode;
}

export function H1({ 
  title, 
  children, 
  ...rest 
}: Props) {
  return (
    <Title {...rest}>
      {' '}
      {title} 
      {children}
    </Title>
  );
}
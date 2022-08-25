import { AnchorHTMLAttributes } from 'react';

import { Title } from './styles';

type Props = AnchorHTMLAttributes<HTMLElement> & {
  title: string;
}

export function Anchor({ 
  title, 
  ...rest 
}: Props) {
  return (
    <Title>
      {' '}
      {title}
    </Title>
  );
}
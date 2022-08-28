import { HTMLAttributes } from 'react';

import { Title } from './styles';

type Props = HTMLAttributes<HTMLElement> & {
  title: string;
}

export function Description({ 
  title, 
  ...rest 
}: Props) {
  return (
    <Title {...rest}>
      {' '}
      {title}
    </Title>
  );
}
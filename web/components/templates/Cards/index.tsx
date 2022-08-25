import { HTMLAttributes } from 'react';
import { Card, Props as CardProps } from '../../organisms/Card';

import { Container } from './styles';

type Props = HTMLAttributes<HTMLDivElement> & {
  data: CardProps[];
};

export function Cards({ data, ...rest }: Props) {
  return (
    <Container {...rest}>
      {data.map(({ title, text, href }, index) => (
        <Card key={index} title={title} text={text} href={href} />
      ))}
    </Container>
  );
}

import { HTMLAttributes } from 'react';
import {
  Functionality,
  Props as FunctionalityProps
} from '../../organisms/Functionality';

import { Container } from './styles';

type Props = HTMLAttributes<HTMLDivElement> & {
  data: FunctionalityProps[];
};

export function Functionalities({ data, ...rest }: Props) {
  return (
    <Container {...rest}>
      {data.map(({ title, description, url }, index) => (
        <Functionality
          key={index}
          title={title}
          description={description}
          url={url}
        />
      ))}
    </Container>
  );
}

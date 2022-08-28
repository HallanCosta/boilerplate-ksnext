import type { NextPage } from 'next';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { gql } from '@apollo/client';

import { H1 } from '../../components/atoms/H1';
import { Avatar } from '../../components/atoms/Avatar';
import { Anchor } from '../../components/atoms/Anchor';
import { Background } from '../../components/atoms/Background';
import { Description } from '../../components/atoms/Description';
import { Main } from '../../components/atoms/Main';
import { Header } from '../../components/molecules/Header';
import { Footer } from '../../components/molecules/Footer';
import { Props as FunctionalityProps } from '../../components/organisms/Functionality';
import { Functionalities } from '../../components/templates/Functionalities';

import { keystoneAPI } from '../../services/api';

import { AvatarBox } from './styles';

export const Home: NextPage = () => {
  const [functionalities, setFunctionalities] = useState<FunctionalityProps[]>(
    []
  );

  useEffect(() => {
    fetchFunctionalities()
      .then((data) => setFunctionalities(data))
      .catch((err) => console.log('Ocorreu um erro: ' + err));
  }, []);

  async function fetchFunctionalities(): Promise<FunctionalityProps[]> {
    const GET_FUNCTIONALITIES = gql`
      query {
        functionalities {
          id
          title
          description
          url
        }
      }
    `;

    const response = await keystoneAPI.query({ query: GET_FUNCTIONALITIES });

    if (!response) {
      return new Promise((reject) => {
        setTimeout(() => {
          reject([]);
        }, 100);
      });
    }

    const { functionalities } = response.data;

    return functionalities;
  }

  return (
    <Background>
      <Header />

      <Main>
        <H1 title="Bem vindo">
          <Anchor title="Acessar Github" href="#footer" />
        </H1>

        <AvatarBox>
          <Avatar />
        </AvatarBox>

        <Description title="O que vem no boilerplate" />

        <Functionalities data={functionalities} />
      </Main>

      <Footer />
    </Background>
  );
};

export default Home;

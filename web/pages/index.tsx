import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useCallback, useState } from 'react';
import { gql } from '@apollo/client';
import { keystoneAPI } from '../services/api';

import { H1 } from '../components/atoms/H1';
import { Anchor } from '../components/atoms/Anchor';
import { Description } from '../components/atoms/Description';
import { Main } from '../components/atoms/Main';
import { Header } from '../components/molecules/Header';
import { Footer } from '../components/molecules/Footer';
import { Props as FunctionalityProps } from '../components/organisms/Functionality';
import { Functionalities } from '../components/templates/Functionalities';
import { Background } from '../components/atoms/Background';

const Home: NextPage = () => {
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
    <div>
      <Head>
        <title>Boilerplate Hállan</title>
        <meta name="description" content="Boilerplate mantido por Hállan" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <H1 title="Bem vindo">
          <Anchor title="Acessar Github" href="#footer" />
        </H1>

        <Description title="O que vem no boilerplate" />

        <Functionalities data={functionalities} />
      </Main>

      <Footer />
    </div>
  );
};

export default Home;

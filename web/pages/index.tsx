import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useCallback } from 'react';
import { gql } from '@apollo/client';
import { keystoneAPI } from '../services/api';

import { H1 } from '../components/atoms/H1';
import { Anchor } from '../components/atoms/Anchor';
import { Description } from '../components/atoms/Description';
import { Main } from '../components/atoms/Main';
import { Header } from '../components/molecules/Header';
import { Footer } from '../components/molecules/Footer';
import { Cards } from '../components/templates/Cards';
import { Background } from '../components/atoms/Background';

const Home: NextPage = () => {
  useEffect(
    useCallback(() => {
      // getPosts();
      // getPost("cl6h99iys031140uxwcdxe7bn");
    }, [])
  );

  async function getPosts() {
    const GET_POSTS = gql`
      query {
        posts {
          id
          title
        }
      }
    `;

    const response = await keystoneAPI.query({ query: GET_POSTS });
    const { posts } = response.data;

    console.log('Posts >', posts);
  }

  async function getPost(id: string) {
    const GET_POST = gql`
      query {
        post(where: { id: "${id}" }) {
          id,
          title
        }
      }
    `;

    const response = await keystoneAPI.query({ query: GET_POST });
    const { post } = response.data;
    console.log('Post > ', post);
  }

  const data = [
    {
      title: 'Documentation',
      text: 'Find in-depth information about Next.js features and API.',
      href: 'https://nextjs.org/docs'
    },
    {
      title: 'Learn',
      text: 'Learn about Next.js in an interactive course with quizzes!',
      href: 'https://nextjs.org/learn'
    },
    {
      title: 'Examples',
      text: 'Discover and deploy boilerplate example Next.js projects.',
      href: 'https://github.com/vercel/next.js/tree/canary/examples'
    },
    {
      title: 'Deploy',
      text: 'Instantly deploy your Next.js site to a public URL with Vercel.',
      href: 'https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
    }
  ];

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

        <Cards data={data} />
      </Main>

      <Footer />
    </div>
  );
};

export default Home;

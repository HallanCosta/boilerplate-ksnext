import Head from 'next/head';

import { Nav } from './styles';

export function Header() {
  return (
    <Head>
      <title>Boilerplate Hállan</title>
      <meta name="description" content="Boilerplate mantido por Hállan" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}

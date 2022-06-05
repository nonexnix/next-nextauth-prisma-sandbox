import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import Head from 'next/head'

const App = ({ Component, pageProps: { session, ...pageProps } }: AppProps) => {
  return (
    <>
      <SessionProvider session={session}>
        <Head>
          <title>Next NextAuth Prisma</title>
          <meta
            name="description"
            content="A nextjs, nextauth, prisma sandbox"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Component {...pageProps} />
      </SessionProvider>
    </>
  )
}

export default App

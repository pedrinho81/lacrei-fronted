import Image from 'next/image'
import Head from 'next/head'
import { Layout } from '@/components/Layout'
export default function Home() {
  return (
    <>
    <Head>
      <title>Home | Desafio Lacrei</title>
    </Head>
    <main
      className={`flex min-h-screen flex-col`}
    >
      <Layout/>
    </main>
    </>
  )
}

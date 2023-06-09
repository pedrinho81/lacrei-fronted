
import Head from 'next/head'
import { Layout } from '@/components/Layout'
import { Info } from '@/components/Info'
export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Desafio Lacrei</title>
      </Head>
      <Layout>
      <Info
        title='Boas vindas a Lacrei Saúde'
        message='Uma plataforma segura e acolhedora para comunidade LGBTQIAPN+'
        buttons={[
          {
            bg: 'var(--green)',
            color: '#fff',
            text: 'Pessoa usuária',
            href: '/pessoa-usuaria',
          },
          {
            bg: '#fff',
            color: 'var(--green)',
            text: 'Profissional',
            href: '/profissional',
            border: true
          }
        ]} 
        img={{
          alt: 'Ilustração de uma médica.',
          src: '/imgs/rafiki2.png'
        }}/>

      </Layout>
    </>
  )
}

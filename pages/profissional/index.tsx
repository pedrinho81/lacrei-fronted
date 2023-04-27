import Head from 'next/head'
import { Layout } from '@/components/Layout'
import { Info } from '@/components/Info'
export default function Profissional() {
  return (
    <>
      <Head>
        <title>Pessoa Usuária | Desafio Lacrei</title>
      </Head>
      <Layout>
      <Info
        title='Profissional'
        message='Buscamos recrutar pessoas profissionais da saúde que entendam as necessidades e se comprometam com o bem-estar da comunidade LGBTQIAPN+'
        borderOnLeft
        img={{
          alt: 'Ilustração de uma médica.',
          src: '/imgs/profissional1.png'
        }}/>

      </Layout>
    </>
  )
}

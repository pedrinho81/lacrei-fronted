import Head from 'next/head'
import { Layout } from '@/components/Layout'
import { Info } from '@/components/Info'
export default function PessoaUsuaria() {
  return (
    <>
      <Head>
        <title>Pessoa Usuária | Desafio Lacrei</title>
      </Head>
      <Layout>
      <Info
        title='Pessoa Usuária'
        message='A Lacrei garante que pessoas LGBTQIAPN + recebam atendimento realizado por profissionais de qualidade e que atendam às suas necessidades de forma segura e acolhedora.'
        borderOnLeft
        img={{
          alt: 'Ilustração de uma médica.',
          src: '/imgs/rafiki1.png'
        }}/>

      </Layout>
    </>
  )
}

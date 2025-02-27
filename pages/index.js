import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Gundrum Tax Services - Myrtle Beach !</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Gundrum Tax Services is under construction!" />
        <p className="description">
          Please <a href="mailto:brad@gundrumtaxservives.com">email</a> us if you would like more information.
        </p>
      </main>

      <Footer />
    </div>
  )
}

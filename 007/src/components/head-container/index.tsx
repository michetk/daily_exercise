import Head from 'next/head'
import { HeadContainerProps } from './interfaces'

const HeadContainer = ({ title, children }: HeadContainerProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Simple Dashboard done with Next.js" />
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </Head>
      {children}
    </>
  )
}

export default HeadContainer

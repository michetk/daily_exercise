import type { NextPage } from 'next'
import HeadContainer from '../components/head-container'
import { HomeContainer } from './styled'

const Home: NextPage = () => {
  return (
    <HeadContainer title="Home">
      <HomeContainer>
        <h1>HOME</h1>
        <h2>Simple Exercise DashboardLayout done with Next.js</h2>
      </HomeContainer>
    </HeadContainer>
  )
}

export default Home

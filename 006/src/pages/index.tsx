import type { NextPage } from 'next'
import HeadContainer from '../components/head-container'
import { HomeContainer, HomeContent } from './styled'

const Home: NextPage = () => {
  return (
    <HeadContainer title="Home">
      <HomeContainer>
        <HomeContent>
          <h1>Home</h1>
          <h2>First Page</h2>
        </HomeContent>
      </HomeContainer>
    </HeadContainer>
  )
}

export default Home

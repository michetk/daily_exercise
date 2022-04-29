import Footer from '../footer'
import Header from '../header'
import Sidebar from '../sidebar'
import { DashboardContainer, DashboardContent, DashboardPage } from './styled'
import { DashboardProps } from './interfaces'

const Dashboard = ({ children }: DashboardProps) => {
  return (
    <DashboardContainer>
      <Header />
      <DashboardContent>
        <Sidebar />
        <DashboardPage>{children}</DashboardPage>
      </DashboardContent>
      <Footer />
    </DashboardContainer>
  )
}

export default Dashboard

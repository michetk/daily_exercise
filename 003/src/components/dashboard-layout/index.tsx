import Footer from '../footer'
import Header from '../header'
import Sidebar from '../sidebar'
import { DashboardLayoutProps } from './interfaces'
import {
  DashboardLayoutContainer,
  DashboardLayoutContent,
  DashboardLayoutPage,
} from './styled'

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <DashboardLayoutContainer>
      <Header />
      <DashboardLayoutContent>
        <Sidebar />
        <DashboardLayoutPage>{children}</DashboardLayoutPage>
      </DashboardLayoutContent>
      <Footer />
    </DashboardLayoutContainer>
  )
}

export default DashboardLayout

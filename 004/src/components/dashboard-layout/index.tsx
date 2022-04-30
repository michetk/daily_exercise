import Footer from '../footer'
import Header from '../header'
import Sidebar from '../sidebar'
import { DashboardLayoutProps } from './interfaces'
import {
  DahsboardLayoutContent,
  DashboardLayoutContainer,
  DashboardLayoutPage,
} from './styled'

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <DashboardLayoutContainer>
      <Header />
      <DahsboardLayoutContent>
        <Sidebar />
        <DashboardLayoutPage>{children}</DashboardLayoutPage>
      </DahsboardLayoutContent>
      <Footer />
    </DashboardLayoutContainer>
  )
}

export default DashboardLayout

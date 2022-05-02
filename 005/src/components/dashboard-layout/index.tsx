import { DashboardLayoutProps } from './interfaces'
import { DashboardLayoutContainer } from './styled'

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return <DashboardLayoutContainer>{children}</DashboardLayoutContainer>
}

export default DashboardLayout

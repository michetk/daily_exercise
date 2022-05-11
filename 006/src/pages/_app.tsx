import '../styles/globals.css'
import type { AppProps } from 'next/app'
import DashboardLayout from '../components/dashboard-layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DashboardLayout>
      <Component {...pageProps} />
    </DashboardLayout>
  )
}

export default MyApp

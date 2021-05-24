import Head from 'next/head'
import { defaultPage } from '../src/hocs/defaultPage'
import { protectRoute } from '../src/hocs/protectRoute'

function HomePage() {
  return (
    <div>Web eMedCare Connector</div>
  )
}

export default protectRoute(defaultPage(HomePage))
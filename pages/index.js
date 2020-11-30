import Head from 'next/head'
import { defaultPage } from '../src/hocs/defaultPage'

function HomePage() {
  return (
    <div>Web eMedCare Connector</div>
  )
}

export default defaultPage(HomePage)
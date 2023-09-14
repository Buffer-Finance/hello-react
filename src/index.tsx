import ReactDOM from 'react-dom'
import SafeProvider from '@safe-global/safe-apps-react-sdk'
import { SafeApp } from './App'

ReactDOM.render(
  <SafeProvider
    opts={{
      allowedDomains: [/gnosis-safe.io$/, /app.safe.global$/],
      debug: false,
    }}
    loader={<>hello</>}
  >
    <SafeApp />
  </SafeProvider>,
  document.getElementById('root'),
)

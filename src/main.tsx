import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { TonConnectUIProvider } from '@tonconnect/ui-react'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <TonConnectUIProvider manifestUrl='https://hrachocode.github.io/tondapp/manifest.json'>
    <App />
  </TonConnectUIProvider>,
)

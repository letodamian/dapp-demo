import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { TonConnectUIProvider } from '@tonconnect/ui-react'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <TonConnectUIProvider manifestUrl='https://ae9d-87-241-158-77.ngrok-free.app/manifest.json'>
    <App />
  </TonConnectUIProvider>,
)

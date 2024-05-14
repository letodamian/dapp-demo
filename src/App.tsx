import { TonConnectButton } from '@tonconnect/ui-react'
import './App.css'
import { useMainContract } from './hooks/useMainContract'
import { useTonConnect } from './hooks/useTonConnect';
import { fromNano } from 'ton-core';

function App() {
  const {
    contractAddress,
    contractBalance,
    counter_value,
    sendIncrement,
    sendDeposit,
    sendWithdraw,
  } = useMainContract();

  const { connected } = useTonConnect();
  return (
    <div className='app'>
      <div>
        <TonConnectButton />
      </div>
      <div>
        <p>{`Address ${contractAddress}`}</p>
        {contractBalance && <p>{`Balance ${fromNano(contractBalance)}`}</p>}
        <p>{`value ${counter_value}`}</p>
      </div>

      {
        connected ? (
          <>
            <button type='button' onClick={sendIncrement}>increment by 5</button>
            <button type='button' onClick={sendDeposit}>deposit by 1</button>
            <button type='button' onClick={sendWithdraw}>withdraw</button>
          </>
        ) : (
          <p>please connect</p>
        )
      }
    </div>
  )
}

export default App

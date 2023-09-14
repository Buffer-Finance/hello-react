import React, { useCallback } from 'react'
import { useSafeAppsSDK } from '@safe-global/safe-apps-react-sdk'
import Web3 from 'web3'
import counterABI from './TestABis/counter.json'
import messageABI from './TestABis/message.json'
const provider = new Web3.providers.HttpProvider('https://eth-goerli.g.alchemy.com/v2/Dn8U2J-wzWwQM3EqLryCVFloK9H8OY5q')
const web3 = new Web3(provider)
const SafeApp = (): JSX.Element => {
  const { sdk, safe } = useSafeAppsSDK()

  const submitTx = useCallback(async () => {
    try {
      const { safeTxHash } = await sdk.txs.send({
        txs: [
          {
            to: safe.safeAddress,
            value: '0',
            data: '0x',
          },
        ],
      })
      console.log({ safeTxHash })
      const safeTx = await sdk.txs.getBySafeTxHash(safeTxHash)
      console.log({ safeTx })
    } catch (e) {
      console.error(e)
    }
  }, [safe, sdk])

  return (
    <div>
      {safe.safeAddress}

      <button onClick={submitTx}>Click to send a test transaction</button>

      {/* <Link href="https://github.com/safe-global/safe-apps-sdk" target="_blank" rel="noreferrer">
        Documentation
      </Link> */}
    </div>
  )
}

export default SafeApp

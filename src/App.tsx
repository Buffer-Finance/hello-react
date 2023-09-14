import { useCallback } from 'react'
import { useSafeAppsSDK } from '@safe-global/safe-apps-react-sdk'
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

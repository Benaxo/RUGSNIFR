import { useState } from 'react'

function App() {
  const [address, setAddress] = useState('')
  const [result, setResult] = useState(null)

  const handleCheck = async () => {
    if (!address) return
    const res = await fetch(`http://localhost:3001/api/check?address=${address}`)
    const data = await res.json()
    setResult(data)
  }

  return (
    <div style={{ padding: '1rem', fontFamily: 'sans-serif' }}>
      <h1>RUGSNIFR</h1>
      <input
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        placeholder="Token address"
        style={{ padding: '0.5rem', width: '60%' }}
      />
      <button onClick={handleCheck} style={{ marginLeft: '0.5rem', padding: '0.5rem' }}>
        Check
      </button>
      {result && (
        <pre style={{ marginTop: '1rem', background: '#f0f0f0', padding: '1rem' }}>
{`Owner %: ${result.ownerPercent}\nLiquidity lock %: ${result.liquidityLockPercent}\nLiquidity lock duration: ${result.liquidityLockDuration}\nDev wallet activity: ${result.devWalletActivity}\nContract renounced: ${result.contractRenounced ? 'Yes' : 'No'}\nCommunity score: ${result.communityScore}\nVerdict: ${result.verdict}`}
        </pre>
      )}
    </div>
  )
}

export default App

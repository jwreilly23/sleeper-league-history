import { useState } from "react"
import Header from './components/Header'
import Trades from './components/Trades'


function App() {
  const [trades, setTrades] = useState([
    {
        id: 1,
        text: 'Trade 1',
        sent: 'Chase',
        received: 'JJ',
    },
    {
        id: 2,
        text: 'Trade 2',
        sent: 'Chase',
        received: 'Three 1sts',
    },
    {
        id: 3,
        text: 'Trade 3',
        sent: 'Jacobs',
        received: 'Dalvin Cook + 2.09',
    }
  ])

  // Delete trade
  const deleteTrade = (id) => {
    setTrades(trades.filter((trade) => trade.id !== id))
  }
  
  return (
    <div className="container">
      <Header title="jwreilly"/>
      <Trades trades={trades} onDelete={deleteTrade}/>
    </div>
  );
}

export default App;

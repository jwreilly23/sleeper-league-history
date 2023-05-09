import { useEffect, useState } from "react"
import Header from './components/Header'
import Trades from './components/Trades'

function App() {
  const [trades, setTrades] = useState([])

  const leagueID = '916405397928529920'

  const userDict = {}

  // get the league users and info ---NEED TO GET ROSTERS -> USER ID -> USERNAME
  const getUsers = async () => {
    const res = await fetch(`https://api.sleeper.app/v1/league/${leagueID}/users`)
    const data = await res.json()

    data.forEach(e => {
      userDict[e.user_id] = e.display_name
    });

    return userDict
  }
  const getRosters = async () => {
    const res = await fetch(`https://api.sleeper.app/v1/league/${leagueID}/rosters`)
    const data = await res.json()

    // data.forEach(e => {
    //   userDict[e.user_id] = e.display_name
    // });

    // return userDict
  }



   

  useEffect(() => {
    const getTrades = async () => {
      const tradesFromServer = await fetchTrades()
      const users = await getUsers()
      setTrades(tradesFromServer.filter((e) => {
        if (e.type === "trade") {
          
          // e.consenter_ids[0] = users.filter((u) => u.user_id === e.consenter_ids[0] )[0]
          console.log(e.consenter_ids[0])
        }
        return e.type === "trade"
      }))
  }

    getTrades()
  }, [])

  // fetch trades from sleeper
  const fetchTrades = async () => {
    const res = await fetch(`https://api.sleeper.app/v1/league/${leagueID}/transactions/1`)
    const data = await res.json()

    return data
  }
    
  //   [
  //   {
  //       id: 1,
  //       text: 'Trade 1',
  //       sent: 'Chase',
  //       received: 'JJ',
  //   },
  //   {
  //       id: 2,
  //       text: 'Trade 2',
  //       sent: 'Chase',
  //       received: 'Three 1sts',
  //   },
  //   {
  //       id: 3,
  //       text: 'Trade 3',
  //       sent: 'Jacobs',
  //       received: 'Dalvin Cook + 2.09',
  //   }
  // ])

  // Delete trade
  const deleteTrade = (id) => {
    console.log(id)
    setTrades(trades.filter((trade) => trade.transaction_id !== id))
  }
  
  return (
    <div className="container">
      <Header title="jwreilly"/>
      <Trades trades={trades} onDelete={deleteTrade}/>
    </div>
  );
}

export default App;

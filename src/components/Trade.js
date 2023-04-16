import {FaTimesCircle} from 'react-icons/fa'

const Trade = ({ trade, onDelete }) => {
  return (
    <div className='trade'>
        <h3>
            {trade.text}
            <FaTimesCircle 
                style={{color:'red', cursor:'pointer'}} onClick={() => onDelete(trade.id)}
            />
        </h3>
        <p>Sent: {trade.sent}</p>
        <p>Received: {trade.received}</p>
    </div>
  )
}

export default Trade
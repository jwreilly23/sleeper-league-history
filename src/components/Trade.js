import {FaTimesCircle} from 'react-icons/fa'

const Trade = ({ trade, onDelete }) => {
  return (
    <div className='trade'>
        <h3>
            {trade.text}
            <FaTimesCircle 
                style={{color:'red', cursor:'pointer'}} onClick={() => onDelete(trade.transaction_id)}
            />
        </h3>
        <p>Trade between {trade.consenter_ids[0]} and {trade.consenter_ids[1]}</p>
        <p>{trade.consenter_ids[0]} Sent: {trade.sent}</p>
        <p>{trade.consenter_ids[0]} Received: {trade.received}</p>
    </div>
  )
}

export default Trade
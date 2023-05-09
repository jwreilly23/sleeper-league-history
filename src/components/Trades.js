import Trade from "./Trade"

const Trades = ({ trades, onDelete }) => {
    
    
    return (
        <>
            {trades.map((trade) => (
                <Trade key={trade.transaction_id} trade={trade} onDelete={onDelete} />
            ))}
        </>
    )
}

export default Trades
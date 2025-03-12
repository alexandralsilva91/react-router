import './CoinOfTheCard.css'

function CoinOfTheCard({ children, size }) {
    return (
        <p className={`Coin size-${size}`}>🪙 {children}</p>
    )
}

export default CoinOfTheCard;
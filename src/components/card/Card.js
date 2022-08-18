import './Card.css';

function Card(probs) {
    return (
    <div className="card-container">
        <img src = {`https://robohash.org/${probs.name}`} alt='...'/>        
        <h4>{probs.name}</h4>
        <p>{probs.username}</p>
        <p>{probs.email}</p>
    </div>
  )
}

export default Card;
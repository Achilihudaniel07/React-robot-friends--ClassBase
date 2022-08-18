import Card from '../card/Card';

function CardList(probs){
    return(
        <div className='card-wrapper'>
        {
          probs.clients.map((item) =>(
          <Card
          key={item.id.toString()}
          name={item.name}
          email={item.email}
          username={item.username}
          />
          ))
        }
      </div>        
    )
}

export default CardList;
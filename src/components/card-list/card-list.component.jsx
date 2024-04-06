import { Component } from "react";
import './card-list.styles.css'
import './card.styles.css'

class CardList extends Component{
    render(){
        console.log('render from component class');
        const {monsters} = this.props
        return (
        <div className="card-list">
            {monsters.map(monster => {
                const{name,email,id} = monster;
                return(
                <div className='card-container' key={id}>
                    <img src={`https://robohash.org/${monster.id}?set=set2&size=180x180`} alt={`monster ${name}`} />
                    <h2>{name}</h2>
                    <p>{email}</p>
                </div>
            )})}
        </div>
        
        )
    }
}

export default CardList;
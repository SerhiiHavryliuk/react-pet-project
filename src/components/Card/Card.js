import React from "react";
import './style.css';

const Card = ({id, name, username}) => {
    // const { id, name, username } = props;
    return(
        <div className='Card'>
            <img src={`https://robohash.org/${username}?200x200`} alt='robo-friends'/>
            <div>
                <h2> {name}  </h2>
                <p> {username} </p>
            </div>
        </div>
    );
}

export default Card;
import React from "react";
import './style.css';
import Card from "../Card/Card";


const CardsList = ({robots}) => {
    return(
        <div className='CardsList'>
            {
                robots.map((user, i) => {
                    return  <Card key={robots[i].id} id={robots[i].id} name={robots[i].name} username={robots[i].username}/>
                })
            }

        </div>
    );
}

export default CardsList;
import React, { useState, useEffect } from "react";
import axios from 'axios';
import Card from "./Card";




function CardList() {

    const [data, setData] = useState([]);

    useEffect(() => {
        let data = [];
        axios.get('https://rickandmortyapi.com/api/character')
        .then((result => {
            data = result;
            setData(result.data.results);
        }))
    }, [])

    
    return (
        <div className="card-list">
            {data.map((character) => (
                <Card title={character.name} image={character.image} subtitle={character.location.name} id={character.id}/>
            ))}
        </div>
    )
}

export default CardList;
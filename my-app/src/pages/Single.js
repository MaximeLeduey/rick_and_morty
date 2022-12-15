import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Episodes from '../components/Episodes';

function Single() {


    const [data, setData] = useState([]);

    const episodes = data.episode;

    let {id} = useParams();

    useEffect(() => {
        let data = [];
        const url = `https://rickandmortyapi.com/api/character/${id}`;
        axios.get(url)
        .then((result => {
            data = result.data;
            setData(data);
        }))
    }, []);


    // console.log(data);

    return (
        <React.Fragment>
            <div className='single'>
                <div className="single_column-1">
                    <div className='single_image'>
                        <img src={data.image}></img>
                    </div>
                </div>
                <div className="single_column-2">
                    <p className='single_name'>{data.name}</p>
                    {/* <p className='single_location'>{data.location.name}</p> */}
                    <p className='single_subtitle'>{data.name} est un spécimen {data.type} de type {data.gender}</p>
                    <hr />
                    <p className="single_list">Episodes :</p>
                    <ul className="single_episodes">
                        {episodes?.map((episode) => (
                            <Episodes url={episode}/>
                            // console.log(episode)
                        ))}    
                    </ul>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Single;
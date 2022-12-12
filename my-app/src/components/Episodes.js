
import { React, useEffect, useState } from "react";
import axios from 'axios';


function Episodes({url}) {

    const [episode, setEpisode] = useState([]);

    // console.log(url);

    useEffect(() => {
        axios.get(url)
        .then((result => {
            // console.log(result.data);
            setEpisode(result.data);
        }))
    }, []);

    return (
        <li><span>{episode.name}</span> - {episode.episode} - date de diffusion - {episode.air_date}</li>
    )
}

export default Episodes;
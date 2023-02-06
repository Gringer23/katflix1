import React, {useEffect, useState} from "react";
import 'react-html5video/dist/styles.css'
import Header from "../../elements/Header/Header";
import {useParams} from "react-router-dom";
import axios from "axios";

const VideoPlayer = () => {

    const {id, name} = useParams();
    const [film, setFilm] = useState([]);
    useEffect(() =>{
        axios.get(`http://localhost:3001/Data?name=${name}`).then(data => setFilm(data.data[0].photos));
    }, [id]);

    const filtered = film.filter(video => {
        return video.id === id
    })

    const mapping = filtered.map(video =>
        video.video
    )

    return(
       <>
           <Header/>
               <iframe autoPlay type="video/webm" src={mapping[0]} width={'100%'} height={'632px'} frameBorder={'0px'} />
       </>
    )
};

export default VideoPlayer;
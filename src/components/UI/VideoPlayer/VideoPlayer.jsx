import React, {useEffect, useState} from "react";
import Header from "../../elements/Header/Header";
import {useParams} from "react-router-dom";
import axios from "axios";
import ReactPlayer from "react-player";

const VideoPlayer = () => {

    const {id, name} = useParams();
    const [film, setFilm] = useState([]);
    useEffect(() =>{
        axios.get(`http://localhost:3001/Data?name=${name}`).then(data => setFilm(data.data[0].photos));
    }, []);

    const filtered = film.filter(video => {
        return video.id === id
    });

    const mapping = filtered.map(video =>
        video.video
    );

    const img = filtered.map(img =>
        img.source
    );

    const video = mapping[0];

    return(
       <>
           <Header/>
           <ReactPlayer url={`${video}`} width='100%' height='630px' controls={true} playing={false} volume={0.5} pip={true}>
           </ReactPlayer>
       </>
    )
};

export default VideoPlayer;
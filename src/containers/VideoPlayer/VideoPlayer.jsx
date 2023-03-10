import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import ReactPlayer from "react-player";

const VideoPlayer = () => {

    const {id, name} = useParams();
    const nav = useNavigate();
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


    const video = mapping[0];

    return(
       <>
           <ReactPlayer url={`${video}`} width='100%' height='700px' controls={true} playing={false} volume={0.5} pip={true} onEnded={() => nav(-1)}>
           </ReactPlayer>
       </>
    )
};

export default VideoPlayer;
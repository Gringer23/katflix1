import {useNavigate, useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import axios from "axios";
import Header from "../../elements/Header/Header";
import ReactPlayer from "react-player";


const VideoPlayerFilm = () => {
    const {id, name} = useParams();
    const nav = useNavigate();
    const [film, setFilm] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:3001/Data?name=${name}`).then(data => setFilm(data.data[0]));
    }, [id]);

    return (
        <>
            <Header/>
           <ReactPlayer pip={true} playing={false} controls={true} width='100%' height='630px' url={`${film.video}`} volume={0.5} onEnded={() => nav(-1)}/>
        </>
    )

};

export default VideoPlayerFilm;
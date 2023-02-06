import {useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import axios from "axios";
import Header from "../../elements/Header/Header";


const VideoPlayerFilm = () => {
    const {id, name} = useParams();
    const [film, setFilm] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:3001/Data?name=${name}`).then(data => setFilm(data.data[0]));
    }, [id]);

    return (
        <>
            <Header/>
            <iframe autoPlay type="video/webm" src={film.video} width={'100%'} height={'632px'} frameBorder={'0px'}/>
        </>
    )

};

export default VideoPlayerFilm;
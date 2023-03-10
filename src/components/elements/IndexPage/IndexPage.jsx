import style from "./IndexPage.module.scss";
import img from "../../../assets/images/index-film.png";
import {gsap} from "gsap-trial";
import {ScrollSmoother} from "gsap-trial/ScrollSmoother";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useEffect, useRef} from "react";
import img1 from '../../../assets/images/joker.jpg';
import img2 from '../../../assets/images/spider-man.jpg';
import img3 from '../../../assets/images/chernobyl.jpg';
import {Link} from "react-router-dom";
import video1 from '../../../assets/video/ACRAZE - Do It To It (ft. Cherish) - (Official Lyric Video) (720p).mp4';
import video2 from '../../../assets/video/Eminem - Without Me (Official Music Video).mp4';

const IndexPage = () => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
    const refLeft = useRef([]);
    const refRight = useRef([]);
    const addToRefLeft = el => {
        if (el && !refLeft.current.includes(el)) {
            refLeft.current.push(el);
        }
    };
    const addToRefRight = el => {
        if (el && !refRight.current.includes(el)) {
            refRight.current.push(el);
        }
    };

    useEffect(() => {
        if(ScrollTrigger.isTouch !== 1){
            ScrollSmoother.create({
                wrapper: '.wrappers',
                content: '.content',
                smooth: 1.5,
                effects: true,
            });
        }
        gsap.fromTo('header', { opacity: 1}, { opacity: 0,
            scrollTrigger: {
                trigger: 'header',
                start: 'center',
                end: '800',
                scrub: true
            }});

        refLeft.current.forEach((el, index) => {
            gsap.fromTo(el, { x: -100, opacity: 0}, {
                opacity: 1, x: 0,
                scrollTrigger: {
                    id: el[index + 1],
                    start: '-850',
                    end: '-100',
                    trigger: el,
                    scrub: true
                }
            })
        })

        refRight.current.forEach((elem, index) =>{
            gsap.fromTo(elem, { x: 100, opacity: 0}, {
                opacity: 1, x: 0,
                scrollTrigger: {
                    id: elem[index + 1],
                    trigger: elem,
                    start: '-850',
                    end: '-100',
                    scrub: true
                }
            })
        })
    },[]);



    return(
        <div className="wrappers">
            <div className="content">

                <header className={style.wrapper}>
                    <img data-speed={.6} src={img} className={style.hero_img} alt=""/>
                <div className={style.container}>
                    <div data-speed={.75} className={style.main_header}>
                        <Link to={'/main'}><h1 className={style.main_title}>KATFLIX</h1></Link>
                    </div>
                </div>
                </header>

                <div className={style.wallpaper}>
                    <div className={style.container}>
                        <div className={style.gallery}>
                            <div data-speed={.8} className={style.gallery__left}>
                                <img className={style.gallery__item} src={img1} ref={addToRefLeft} alt=""/>
                                <p className={`${style.gallery__item } ${style.text_block__p}`} ref={addToRefLeft}>???????????????? ?????????????????? ?? ???????? ????????! ???????????????? ???????????? ???????????? ???????????????? ???????????????? ?? ???????????????? ???????????????? ???????????????????? ?? ?? ?????????????? ?????? ?????? ??????????. </p>
                                <img className={style.gallery__item} src={img3} height='50%' ref={addToRefLeft} alt=""/>
                            </div>
                            <div className={style.gallery__right}>
                                <div className={`${style.gallery__item} ${style.text_block}`} ref={addToRefRight}>
                                    <h2 className={style.text_block__h}>
                                        ????????????-?????????????????? <span style={{color: '#c62e21'}}>KATFLIX</span> - ??????...
                                    </h2>
                                    <p className={style.text_block__p}>???????????? ???????? ?????? ????????????????????. ?????????? ?????????? ?? ???????? ???????????? ?? ???????????? ?????????????? ???? ??????????. ?????? ??????????????, ?? ?????????????? ????????????????, ?? ?????????????? ???????????????? ?????? ?? ??????????????????.</p>
                                </div>
                                    <img className={style.gallery__item} src={img2} ref={addToRefRight} alt=""/>
                                <div className={style.gallery__item } ref={addToRefRight} style={{marginTop: '2rem'}}>
                                    <Link to={'/main'}>
                                   <button className={style.text_block__button}> ?????????????? ?? ??????????????????</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>


            </div>
        </div>
    );
};

export default IndexPage;
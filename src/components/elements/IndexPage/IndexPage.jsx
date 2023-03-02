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
                    <img data-speed={.6} src={img} className={style.hero_img}/>
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
                                <img className={style.gallery__item} src={img1} ref={addToRefLeft}/>
                                <p className={`${style.gallery__item } ${style.text_block__p}`} ref={addToRefLeft}>Устройте кинотеатр у себя дома! Смотрите онлайн фильмы хорошего качества в приятной домашней обстановке и в удобное для вас время. </p>
                                <img className={style.gallery__item} src={img3} height='50%' ref={addToRefLeft}/>
                            </div>
                            <div className={style.gallery__right}>
                                <div className={`${style.gallery__item} ${style.text_block}`} ref={addToRefRight}>
                                    <h2 className={style.text_block__h}>
                                        Онлайн-кинотеатр <span style={{color: '#c62e21'}}>KATFLIX</span> - это...
                                    </h2>
                                    <p className={style.text_block__p}>Всегда есть что посмотреть. Новые серии в день выхода и тысячи фильмов на вечер. Без рекламы, в хорошем качестве, с любимой озвучкой или в оригинале.</p>
                                </div>
                                    <img className={style.gallery__item} src={img2} ref={addToRefRight}/>
                                <div className={style.gallery__item } ref={addToRefRight} style={{marginTop: '2rem'}}>
                                    <Link to={'/main'}>
                                   <span className={style.text_block__button}> Перейти к просмотру</span>
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
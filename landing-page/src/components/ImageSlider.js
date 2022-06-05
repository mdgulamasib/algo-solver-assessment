import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick/lib/slider';
import img1 from '../images/1.png'
import img2 from '../images/2.png'
import img3 from '../images/3.png'
import img4 from '../images/4.png'
import img5 from '../images/5.png'
import img6 from '../images/6.png'

const ImageSlider = () => {
    var settings = {
        dots: true,
        autoplay: true,
        infinite: true,
        centerMode: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className='md:mx-52 mt-28'>
            <div className='text-center '>
                <h2 className='font-bold my-4 text-3xl uppercase'> gallery </h2>
                <Slider {...settings} className=''>
                    <div>
                        <img src={img1} className='mx-auto border-4 border-slate-400' alt="" />
                    </div>
                    <div>
                        <img src={img2} className='mx-auto border-4 border-slate-400' alt="" />
                    </div>
                    <div>
                        <img src={img3} className='mx-auto border-4 border-slate-400' alt="" />
                    </div>
                    <div>
                        <img src={img4} className='mx-auto border-4 border-slate-400' alt="" />
                    </div>
                    <div>
                        <img src={img5} className='mx-auto border-4 border-slate-400 ' alt="" />
                    </div>
                    <div>
                        <img src={img6} className='mx-auto border-4 border-slate-400' alt="" />
                    </div>


                </Slider>
            </div>
        </div>
    );
};

export default ImageSlider;
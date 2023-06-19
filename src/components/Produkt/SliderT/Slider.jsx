import React, { useRef, useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper";

import "./SliderStyle.css";
import { SliderContent } from "./SliderContent";

import img1 from "../../../assets/p3.jpg";
import img2 from "../../../assets/p10.jpg";
import img3 from "../../../assets/p5.jpg";
import img4 from "../../../assets/p6.jpg";
import img5 from "../../../assets/p11.jpg";
import img6 from "../../../assets/p8.jpg";
import img7 from "../../../assets/p9.jpg";
import img8 from "../../../assets/p15.jpg";

const Products = [
  {
    id: 1,
    name: "Vitamin C",
    description:
      "Wichtiges wasserlösliches Vitamin mit antioxidativen Eigenschaften, das Immunsystem stärkt und die Wundheilung fördert.",
    img: img1
  },
  {
    id: 2,
    name: "Zink",
    description:
      "Wichtig für das Immunsystem, die Wundheilung, den Protein-Stoffwechsel und die DNA-Synthese.",
    img: img2
  },
  {
    id: 3,
    name: "Vitamin D",
    description:
      "Unterstützt die Knochengesundheit, das Immunsystem, die Muskelgesundheit und die Zellteilung.",
    img: img3
  },
  {
    id: 4,
    name: "Curcuma",
    description:
      "Enthält Curcumin, ein starkes Antioxidans und entzündungshemmendes Mitteldas das Immunsystem unterstützt.",
    img: img4
  },
  {
    id: 5,
    name: "Iod Komplex",
    description:
      "Notwendig für die Produktion von Schilddrüsenhormonen und Regulierung des Stoffwechsels.",
    img: img5
  },
  {
    id: 6,
    name: "Passionsblüte",
    description:
      "Enthält Flavonoide und Alkaloide, die zur Linderung von Stress, Angstzuständen und Schlafstörungen.",
    img: img6
  },
  {
    id: 7,
    name: "Eisen",
    description:
      "Schlüsselrolle bei der Bildung roter Blutkörperchen und dem Sauerstofftransport im Körper.",
    img: img7
  },
  {
    id: 8,
    name: "L-Arginin",
    description:
      "Spielt eine wichtige Rolle bei der Produktion von Stickstoffmonoxid im Körper, einem Botenstoff und der die Durchblutung.",
    img: img8
  }
];

export const Slider = () => {
  const [slideBegOrNot, handleSlideByState] = useState({
    isFirst: true,
    isLast: false
  });
  const SlideRef = useRef();

  const handleNext = () => {
    SlideRef.current.swiper.slideNext();
  };

  const handlePrev = () => {
    SlideRef.current.swiper.slidePrev();
  };

  const onSlideChange = (swiper) => {
    handleSlideByState({
      isFirst: swiper.isBeginning,
      isLast: swiper.isEnd
    });
  };

  const { isLast, isFirst } = slideBegOrNot;

  return (
    <div className="container">
      <div className="post-box">
        <div className="bg-left"></div>
        <div className="bg-right"></div>

        <div className="post-heading">
          <div className="heading-box">
            <h2 className="second-heading">Nur für Sie</h2>
            <div className="pagination-slide">
              <p className="swiper-paginations"></p>
              <div className="bs-icons">
                <BsArrowLeft
                  className={`Arrow ${isFirst ? "disabled" : ""}`}
                  onClick={handlePrev}
                />
                <BsArrowRight
                  className={`Arrow ${isLast ? "disabled" : ""}`}
                  onClick={handleNext}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="post-conatin">
          <Swiper
            slidesPerView={1}
            spaceBetween={0}
            className={"mySwiper"}
            ref={SlideRef}
            onSlideChange={onSlideChange}
            pagination={{
              el: ".swiper-paginations",
              type: "fraction"
            }}
            navigation={false}
            modules={[Pagination, Navigation]}
            breakpoints={{
              0: {
                slidesPerView: 1
              },
              390: {
                slidesPerView: 1.5
              },
              502: {
                slidesPerView: 2
              },
              802: {
                slidesPerView: 2.5
              },
              992: {
                slidesPerView: 3
              },
              1200: {
                slidesPerView: 4
              }
            }}
          >
            {Products.map((item) => {
              return (
                <SwiperSlide key={item.id}>
                  <SliderContent
                    key={item.id}
                    image={item.img}
                    title={item.name}
                    description={item.description}
                    alt={item.name}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Slider;

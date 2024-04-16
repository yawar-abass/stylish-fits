"use client";

import React from "react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Parallax,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";

import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

SwiperCore.use([Navigation, Pagination, Parallax]);

const HeroCarousel = () => {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  const paginationRef = React.useRef(null);

  return (
    <div className="slider text-center">
      <div className="swiper-container parallax-slider">
        <Swiper
          speed={1200}
          parallax={true}
          loop={true}
          autoplay={true}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          pagination={{
            type: "fraction",
            clickable: true,
            el: paginationRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigationNextRef.current;
            swiper.params.pagination.el = paginationRef.current;
          }}
          onSwiper={(swiper) => {
            setTimeout(() => {
              for (var i = 0; i < swiper.slides?.length; i++) {
                swiper.slides[i].childNodes[0].setAttribute(
                  "data-swiper-parallax",
                  0.75 * swiper.width
                );
              }

              swiper.params.navigation.prevEl = navigationPrevRef.current;
              swiper.params.navigation.nextEl = navigationNextRef.current;

              swiper.params.pagination.el = paginationRef.current;

              swiper.navigation.destroy();
              swiper.navigation.init();
              swiper.navigation.update();

              swiper.pagination.destroy();
              swiper.pagination.init();
              swiper.pagination.update();
            });
          }}
          className="swiper-wrapper"
          slidesPerView={1}
        >
          <SwiperSlide className="swiper-slide">
            <div
              className="bg-img valign"
              style={{ backgroundImage: `url(/assets/images/banner/b1.webp)` }}
              data-overlay-dark="6"
              id="home"
            ></div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div
              className="bg-img valign"
              style={{ backgroundImage: `url(/assets/images/banner/b2.jpg)` }}
              data-overlay-dark="6"
              id="home"
            ></div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div
              className="bg-img valign"
              style={{ backgroundImage: `url(/assets/images/banner/b5.jpg)` }}
              data-overlay-dark="6"
              id="home"
            ></div>
          </SwiperSlide>
        </Swiper>
        <div className="setone setwo">
          <div
            ref={navigationNextRef}
            className="swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer"
          >
            <MdNavigateNext />
          </div>
          <div
            ref={navigationPrevRef}
            className="swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer"
          >
            <GrFormPrevious />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCarousel;

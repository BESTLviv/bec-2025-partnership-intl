'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import Image from 'next/image';
import { forwardRef } from 'react';

const About = forwardRef<HTMLDivElement, object>((_, ref) => {

  const photosDict = [
    { img: "/images/about/ab_slide5.png", alt: "slide1" },
    { img: "/images/about/ab_slide1.png", alt: "slide2" },
    { img: "/images/about/ab_slide2.png", alt: "slide3" },
    { img: "/images/about/ab_slide3.png", alt: "slide4" },
    { img: "/images/about/ab_slide4.png", alt: "slide5" },
  ]

  return (
    <section className={`h-72 mt-30 md:mt-40 mb-35 3xl:mb-55 scroll-m-35 relative`} ref={ref}>
      <div className="relative">
        <div className="container flex flex-col 1140px:flex-row 1140px:gap-30 gap-15 3xl:gap-15 4xl:justify-between 3xl:justify-between">
          <div className="flex flex-col gap-5 1240px:text-xl 3xl:text-[22px] 3xl:max-w-[800px] 4xl:text-[24px] xs:px-3">
            <h1 className="uppercase text-bec xs:text-3xl sm:text-5xl font-bold 3xl:text-6xl 4xl:text-7xl">about the event</h1>
            <p className='sm:text-[18px] xs:text-[16px]'>
              <span className='text-bec font-extrabold'>BEC</span> a competition organised 
              to allow young engineers to demonstrate their knowledge, teamwork, and practical 
              skills in solving applied tasks. Here, participants will be able to compete using 
              their engineering knowledge in two categories: Team Design (TD) and Innovative Design (ID).
            </p>
            <p className='mt-4 sm:text-[18px] xs:text-[16px]'>
              <span className='text-bec font-bold'>Our goal:</span> To build a community of competent 
              and motivated students of engineering ready to tackle unconventional tasks.
            </p>
          </div>
          <div className="4xl:mr-10 540px:mr-0 xs:mr-6">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={0}
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              className="swiper_skl xs:max-w-[430px] 660px:max-w-[560px] 3xl:max-w-[660px] 4xl:max-w-[760px]"
            >
              {photosDict.map((photo, index) => (
                <SwiperSlide key={index} className='xs:w-[430px] 660px:w-[560px] 3xl:w-[660px] 4xl:w-[760px] ml-0.5'>
                  <div className="slide_card xs:w-[430px] 660px:w-[560px] 3xl:w-[660px] 4xl:w-[760px]">
                    <Image className="slide_card_img xs:w-[365px] 660px:w-[560px] 3xl:w-[680px] 4xl:w-[760px]" width={560} height={300} src={photo.img} alt={photo.alt} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <Image 
          width={530}
          height={530}
          alt='2'
          src="/images/elipses/about_right.png"
          className='-right-10 -bottom-50 select-none z-0 absolute'
        />
        <Image 
          width={530}
          height={530}
          alt='2'
          src="/images/elipses/about_left.png"
          className='-left-10 -top-20 select-none z-0 absolute'
        />
      </div>
    </section>
  )
})
About.displayName = "About"; 

export default About
import Image from "next/image";
import { forwardRef } from "react";

const Statistics = forwardRef<HTMLElement, object>((props, ref) => {
  const socialData = [
    { icon: "/images/statistics/inst.svg", number: "3500+", label: "followers" },
    { icon: "/images/statistics/tg.svg", number: "900+", label: "followers" },
    { icon: "/images/statistics/linkedin.svg", number: "700+", label: "followers" },
  ];

  return (
    <section className="text-center scroll-m-40" ref={ref}>
      <div className="container px-2 700px:px-0">
        <h1 className="uppercase font-black text-2xl 700px:text-4xl text-bec mb-10 3xl:text-[42px] 4xl:text-5xl">
          Social Media Statistics
        </h1>
        <div className="relative">
          <div className="relative flex flex-col 970px:flex-row gap-10 970px:gap-25 items-center justify-center flex-wrap 4xl:gap-45">
            {socialData.map((item, i) => (
              <div key={i} className="flex items-center gap-1 text-md font-bold sm:text-base">
                <Image src={item.icon} alt="icon" width={60} height={60} className="4xl:w-[75px] w-[50px] 700px:w-[60px]" />
                <h1 className="ml-2 text-lg 1140px:text-xl font-black 4xl:text-2xl">{item.number}</h1>
                <h1 className="text-lg 1140px:text-xl 4xl:text-2xl">{item.label}</h1>
              </div>
            ))}
            <div className="hidden 970px:block w-[900px] 1140px:w-[1000px] h-[320px] absolute -top-1 1140px:top-1 left-8 1060px:left-20 1070px:left-20 1140px:left-13 1160px:left-27 1340px:left-38 1440px:left-72 3xl:left-97 4xl:left-89 4xl:top-6 4xl:w-[1150px]">
              <Image
                src="/images/statistics/inst-el.svg"
                alt="Statistics line"
                fill
                className=""
              />
            </div>
          </div>
          <div className="pt-18 space-y-3 text-xl font-extralight ">
            <p>
              Views during event periods –{" "}
              <span className="font-semibold text-bec">20.5 K</span>
            </p>
            <p className="xs:text-start xs:pl-[54px] 440px:text-center 440px:pl-0">
              Average monthly interaction –{" "}
              <span className="font-semibold text-bec">6 K</span>
            </p>
            <p>
              Average Story views <br className="block 460px:hidden"/>Stories –{" "}
              <span className="font-semibold text-bec">675</span>
            </p>
          </div>
          <Image
            alt="фон"
            src="/images/elipses/left_inst.png"
            width={620}
            height={240}
            className="absolute -bottom-92 1440px:-left-16 -left-26 z-10"
          />
        </div>
      </div>

      <div className="pt-20 container 4xl:pt-40">
        <h1 className="uppercase font-black text-2xl 700px:text-4xl text-bec 3xl:text-[42px] 4xl:text-5xl">
          BEC 2024 Event Statistics
        </h1>
        <div className="flex flex-col justify-center 940px:w-full 940px:h-full 940px:flex-row gap-2 mt-0 940px:mt-20 relative items-center">
          <div className="relative items-center flex flex-col pt-[138px] 460px:pt-[100px] 940px:pt-0 w-[380px] 460px:w-[450px] 940px:w-[500px] h-[350px] 4xl:w-[600px] 4xl:h-[450px] font-medium">
            <div className="text-start">
              <p className="mb-2 text-base 700px:text-lg 4xl:mt-8 4xl:text-xl uppercase">registrations<span className="text-bec ml-2">300+</span></p>
              <p className="mb-2 text-base 700px:text-lg 4xl:text-xl uppercase">teams<span className="text-bec ml-2">12</span></p>
              <p className="text-base 700px:text-lg 4xl:text-xl uppercase">participants<span className="text-bec ml-2">48</span></p>

            </div>
            <Image
              src="/images/statistics/left-block.svg"
              alt="фон"
              width={40}
              height={40}
              className="absolute -bottom-14 460px:-bottom-9 940px:bottom-15 left-0 w-full h-full -z-10 4xl:w-650"
            />
          </div>
          <div className="relative flex flex-col w-[380px] 460px:w-[450px] 940px:w-[500px] 4xl:w-[600px] justify-center pt-5 940px:pt-17 4xl:pt-30 pb-7">
            <p className="mb-3 text-base 490px:text-lg px-2 leading-tight 4xl:text-xl uppercase mr-0 580px:mr-12">
              Overall Partner Rating of BEC 2024:
            </p>
            <div className="pl-10 relative h-5 mx-10 border border-bec bg-becblack max-w-[375px]">
              <div className="absolute inset-0 bg-bec" style={{ width: '95%' }}></div>
              <div className="absolute inset-0 flex items-center justify-center text-sm font-black text-becblack">
                9.6/10
              </div>
            </div>
            <Image
              src="/images/statistics/right-block.svg"
              alt="фон"
              width={90}
              height={40}
              className="absolute bottom-19 1060px:bottom-16 1060px:right-5 w-full h-[250px] 950px:h-full -z-10"
            />
            <p className="text-sm text-gray-300 text-start pt-10 pl-2 4xl:text-base">
              *Partner companies completed a feedback form about the event, where they rated their overall impression of the competition.
            </p>
          </div>
          <Image
            alt="фон"
            src="/images/elipses/statist_right.png"
            width={620}
            height={240}
            className="absolute -bottom-52 1440px:-right-16 -right-56 -z-1"
          />
        </div>
      </div>
    </section>
  );
});

Statistics.displayName = 'Statistics';

export default Statistics;

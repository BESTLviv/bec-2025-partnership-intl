  import { Audiowide } from 'next/font/google';
  import Image from 'next/image'

  const awide = Audiowide({
    weight: ['400'],
    subsets: ['latin'],
  });
 
  const Organisers = () => {
    return (
      <section className='940px:mt-40 mt-20 940px:mb-7 mb-8'>
        <div className="container mb-20 relative 4xl:mb-40">
          <h1 className="text-center text-2xl 700px:text-[42px] 3xl:text-5xl text-bec font-black mb-15 uppercase">About the Event Organizers</h1>
          <div className="flex flex-col-reverse 1060px:justify-around 1060px:flex-row 1060px:gap-0 700px:gap-20 gap-10 justify-center items-center">
            <p className='max-w-[500px] 660px:w-full w-[360px] 440px:w-[380px] text-lg 3xl:text-xl 3xl:mt-10 4xl:text-2xl 4xl:max-w-[700px]'>
              <span className='font-bold'>BEST LVIV</span> (Board of European Students of Technology) – is a local chapter of an international non-profit student organization that connects students in technical fields
              <br /> <br />
              Our mission is to empower students through knowledge exchange and collaboration between companies, universities, and students across Europe.
            </p>
            <div className="">
              <Image
                src="/images/statistics/best_logo.svg"
                alt="e"
                width={300}
                height={100}
                className="object-cover 700px:w-[450px] 620px:w-[250px] w-[200px]"
              />
            </div>
          </div>
          <Image
            height={60}
            width={500}
            alt="Decorative line 3"
            src="/images/elipses/org_left.png" 
            className="absolute -top-80 -left-30 1440px:-left-15 -z-1"
          />
          <Image
            height={60}
            width={500}
            alt="Decorative line 3"
            src="/images/elipses/org_right.png" 
            className="absolute -top-40 -right-30 1440px:-right-15 -z-1"
          />
        </div>
        <div className="flex flex-col 700px:flex-row items-center justify-between container pb-0 940px:pb-20">
          <Image
            src="/images/organisers/best_map.png"
            alt="e"
            width={600}
            height={100}
            className="object-cover ml-10 3xl:w-[650px] 4xl:w-[750px] 660px:w-[600px] 440px:w-[380px] w-[340px]"
          />
          <div className="flex flex-col gap-3 440px:gap-7 660px:gap-10 w-[500px] justify-center text-center pt-13 700px:pt-0 700px:mr-30">
            <div className="flex flex-col gap-2 660px:gap-5">
              <h1 className={`${awide.className} text-3xl 660px:text-4xl 1162px:text-5xl text-bec`}>83</h1>
              <p className='text-2xl 660px:text-3xl 1162px:text-5xl'>branches</p>
            </div>
            <div className="flex flex-col gap-2 660px:gap-5">
              <h1 className={`${awide.className} text-3xl 660px:text-4xl 1162px:text-5xl text-bec`}>29</h1>
              <p className='text-2xl 660px:text-3xl 1162px:text-5xl'>countries</p>
            </div>
            <div className="flex flex-col gap-2 660px:gap-5">
              <h1 className={`${awide.className} text-3xl 660px:text-4xl 1162px:text-5xl text-bec`}>36</h1>
              <p className='text-2xl 660px:text-3xl 1162px:text-5xl'>years of experience</p>
            </div>
          </div>
        </div>        
      </section>
    )
  }

  export default Organisers
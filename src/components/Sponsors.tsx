import Image from "next/image"

const logos = [
  {src: "/images/sponsors/openlab.png", alt: "openlab", link: "https://www.instagram.com/lviv.openlab/"},
  {src: "/images/sponsors/bestshot.png", alt: "openlab", link: "https://www.instagram.com/bestshot.energy/"},
  {src: "/images/sponsors/fujikura.png", alt: "fujikura", link: "https://www.fujikura.co.jp/en/"},
  {src: "/images/sponsors/renesas.png", alt: "renesas", link: "https://www.renesas.com/en"},
  {src: "/images/sponsors/globalologic.png", alt: "globalologic", link: "https://www.globallogic.com/ua/"},
  {src: "/images/sponsors/hator.png", alt: "hator", link: "https://hator.gg/ua/"},
  {src: "/images/sponsors/kernel.png", alt: "kernel", link: "https://www.kernel.ua/ua/"},
  {src: "/images/sponsors/kness.png", alt: "kness", link: "https://kness.energy/"},
  {src: "/images/sponsors/startup.png", alt: "startup", link: "https://www.tsus.org/"},
  {src: "/images/sponsors/gorich.png", alt: "gorich", link: "https://www.instagram.com/lvivfilmcenter/"},
]

const Sponsors = () => {
  return (
    <section className="container pt-20">
      <h2 className="uppercase text-center text-bec text-2xl 580px:text-3xl 700px:text-[42px] font-extrabold mb-10 4xl:text-5xl 4xl:mb-15">
        Last Year’s Partners
      </h2>
      <div className="flex flex-col gap-8 justify-center items-center">
        <div className="grid grid-cols-2 gap-5 600px:gap-30 max-w-[400px] justify-items-center">
          {logos.slice(0, 2).map((logo, idx) => (
            <div key={idx} className="w-[140px] h-[50px] 600px:w-[180px] 970px:w-[220px] 600px:h-[70px] 970px:h-[100px] relative transition hover:scale-110 ease-in-out duration-200">
              <a href={logo.link} target="_blank">
                <Image src={logo.src} alt={logo.alt} fill className="object-contain" />
              </a>
            </div>
          ))}
        </div>

        <div className="flex w-full justify-around items-center">
          {logos.slice(2, 5).map((logo, idx) => (
            <div key={idx + 2} className="w-[110px] h-[40px] 460px:w-[140px] 460px:h-[50px] 600px:w-[180px] 970px:w-[220px] 600px:h-[70px] 970px:h-[100px] relative transition hover:scale-110 ease-in-out duration-200">
              <a href={logo.link} target="_blank">
                <Image src={logo.src} alt={logo.alt} fill className="object-contain" />
              </a>
            </div>
          ))}
        </div>

        <div className="flex w-full justify-around items-center">
          {logos.slice(5, 8).map((logo, idx) => (
            <div key={idx + 5} className="w-[110px] h-[40px] 460px:w-[140px] 460px:h-[50px] 600px:w-[180px] 970px:w-[220px] 600px:h-[70px] 970px:h-[100px] relative transition hover:scale-110 ease-in-out duration-200">
              <a href={logo.link} target="_blank">
                <Image src={logo.src} alt={logo.alt} fill className="object-contain" />
              </a>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-5 600px:gap-30 max-w-[400px] justify-items-center">
          {logos.slice(8, 10).map((logo, idx) => (
            <div key={idx + 8} className="w-[140px] h-[50px] 600px:w-[180px] 970px:w-[220px] 600px:h-[70px] 970px:h-[100px] relative transition hover:scale-110 ease-in-out duration-200">
              <a href={logo.link} target="_blank">
                <Image src={logo.src} alt={logo.alt} fill className="object-contain" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Sponsors
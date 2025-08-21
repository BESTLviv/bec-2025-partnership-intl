import Image from "next/image";
import { forwardRef } from "react";
import Link from "next/link";

const Contacts = forwardRef<HTMLDivElement, object>((props, ref) => {
  const teamMembers = [
    {
      name: "Solomiia Nohal",
      role: "Corporate Relations responsible",
      email: "Solomiia.Nohal@Best-Eu.Org",
      phone: "+380688828848",
      src: "/images/organisers/solomia.jpg"
    },
    {
      name: "Denys Brazdetskyi",
      role: "Main Organizer",
      email: "Denys.Brazdetskyi@Best-Eu.Org",
      phone: "+380664493594",
      src: "/images/organisers/denys.jpg"
    },
    {
      name: "Dmytro Martyniuk",
      role: "Corporate Relations responsible",
      email: "Dmytro.Martyniuk@Best-Eu.Org",
      phone: "+380672710270",
      src: "/images/organisers/tomas_dima.jpg"
    }
  ];

  return (
    <section ref={ref} className="scroll-m-28">
      <div className="container">
        <h1 className="text-center text-2xl 700px:text-[42px] 3xl:text-5xl text-bec font-black mb-10 uppercase">
          Contacts
        </h1>
        <div className="flex items-center gap-14 970px:gap-0 970px:justify-around 970px:flex-row flex-col justify-center">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`
                flex flex-col items-center w-[285px] 1070px:w-[360px] 4xl:w-[420px] text-center
                ${member.name === "Денис Браздецький" ? "order-1 970px:order-none" : ""}
                ${member.name === "Дмитро Мартинюк" ? "order-2 970px:order-none" : ""}
                ${member.name === "Соломія Ногаль" ? "order-3 970px:order-none" : ""}
              `}
            >
              <Image
                src={member.src}
                alt="person"
                width={300}
                height={600}
                className="4xl:w-[400px]"
              />
              <h1 className="text-xl 1340px:text-2xl uppercase mt-3 pb-2 w-[300px]">{member.role}</h1>
              <Image
                src="/images/organisers/card_el.svg"
                alt="pp"
                width={300}
                height={50}
              />
              <h1 className="text-2xl 1340px:text-3xl mt-3 font-bold 1340px:font-black uppercase 4xl:text-4xl">{member.name}</h1>
              <p>
                <a href={`mailto:${member.email}`} className="underline text-lg 1340px:text-xl 4xl:text-2xl">
                  {member.email}
                </a>
              </p>
              <p>
                <a href={`tel:${member.phone}`} className="text-lg 1340px:text-xl 4xl:text-2xl">
                  {member.phone}
                </a>
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className='bg-[#050505] mt-8'>
        <nav className='py-4 flex justify-between items-center mx-8 md:mx-15'>
          <h2 className='font-semibold text-2xl md:text-3xl'>2025</h2>
          <Image 
            src='/footer/best-logo.svg'
            alt='.'
            width={100}
            height={100}
            className='ml-3 mr-3 490px:ml-10 md:ml-20'
          />
          <div className="flex gap-3">
            <Link className='flex items-center transition-all duration-200 ease-in-out hover:scale-110' href="https://www.instagram.com/best_lviv/" target='_blank'>
              <Image 
                src='/footer/inst.svg'
                alt='.'
                width={40}
                height={40}
                className="w-[35px] h-[35px] md:w-[40px] md:h-[40px]"
              />
            </Link>
            <Link className='flex items-center transition-all duration-200 ease-in-out hover:scale-110' href="https://t.me/bestlviv" target='_blank'>
              <Image 
                src='/footer/tg.svg'
                alt='.'
                width={35}
                height={35}
              />
            </Link>
            <Link className='flex items-center transition-all duration-200 ease-in-out hover:scale-110' href="https://www.linkedin.com/company/bestlviv/posts/?feedView=all" target='_blank'>
              <Image 
                src='/footer/linkedin.svg'
                alt='.'
                width={40}
                height={40}
              />
            </Link>
            <Link className='flex items-center transition-all duration-200 ease-in-out hover:scale-110' href="https://www.facebook.com/BEST.Lviv/?locale=uk_UA" target='_blank'>
              <Image 
                src='/footer/facebook.svg'
                alt='.'
                width={20}
                height={30}
              />
            </Link>
          </div>
        </nav>
      </div>

    </section>
  );
});

Contacts.displayName = 'Contacts';

export default Contacts;
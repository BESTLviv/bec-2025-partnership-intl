'use client'
import { CartProps } from '@/types/types';
import { Audiowide } from 'next/font/google'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import emailjs from "@emailjs/browser";

const awide = Audiowide({
  weight: ['400'],
  subsets: ['latin'],
});

const Cart = ({ selectedPackages, customServices, servicesPrice, packagesPrice, onRemovePackage, onRemoveService }: CartProps) => {

  const basicPackageName = "Basic";
  const basicPackagePrice = packagesPrice[basicPackageName] || 0;

  const totalServicesPrice = customServices.reduce(
    (sum, name) => sum + (servicesPrice[name] || 0),
    0
  );
  const totalPackagesPrice = selectedPackages.reduce(
    (sum, pkg) => sum + (packagesPrice[pkg.name] || 0),
    0
  );

  const total = basicPackagePrice + totalPackagesPrice + totalServicesPrice;

  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    emailjs.init("_8KlxS0-6bbPQMhDy");
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const templateParams = {
        email: email,
        name: companyName,
        packages: selectedPackages.map(pkg => pkg.name).join(", ") || "Немає вибраних пакетів",
        options: customServices.join(", ") || "Немає додаткових послуг",
      };

      await emailjs.send(
        "service_u8kyhtg",
        "template_jti1nou",
        templateParams,
        "_8KlxS0-6bbPQMhDy"
      );
      console.log("templateParams name: ", templateParams.name);

      alert("Дякуємо! Ми зв'яжемося з вами найближчим часом.");
      setCompanyName("");
      setEmail("");
    }
    catch (error: unknown) {
      if (error && typeof error === 'object' && 'text' in error) {
        console.error("Email sending error:", (error as { text: string }).text);
        alert("Помилка надсилання! " + (error as { text: string }).text);
      } else {
        console.error("Email sending error:", error);
        alert("Помилка надсилання! Спробуйте ще раз.");
      }
    }
  };
  
  return (
    <div className="container pt-40 relative">
      <h1 className="text-center text-3xl 700px:text-4xl text-bec font-black mb-8 uppercase">CART</h1>
      <div className="relative flex items-center 940px:flex-row flex-col justify-center mt-10 1160px:p-16 p-10 gap-1 940px:gap-20 z-10">
        <div className="absolute hidden 940px:block left-1/2 -translate-x-1/2 top-0 1160px:w-[1150px] w-[910px] 4xl:w-[1350px] -z-10">
          <Image 
            src="/images/propositions/bg-cart.png"
            alt=""
            width={1150}
            height={200}
            className="object-cover 4xl:w-[1350px]"
          />
        </div>
        <div className="mb-4 w-[320px] 460px:w-[400px] 700px:w-[500px] 940px:w-[320px] 1160px:w-[600px] 4xl:w-[700px]">
          <div className=''>
            <h3 className="text-bec font-extrabold mb-2 4xl:mb-4 text-2xl 1160px:text-3xl uppercase 4xl:text-4xl">PACKAGES</h3>
            <div className="flex justify-between mb-5 border-b border-becwhite pl-2 pr-10 4xl:text-3xl">
              <span className='font-bold text-xl 1160px:text-2xl 4xl:text-3xl'>{basicPackageName}</span>
              <span className={`${awide.className} text-xl 1160px:text-2xl`}>{basicPackagePrice}$</span>
            </div>
            {selectedPackages
              .filter(pkg => pkg.name !== basicPackageName)
              .map(pkg => (
                <div key={pkg.name} className="relative flex justify-between mb-5 border-b border-becwhite pl-2 pr-10">
                  <span className='font-bold text-xl 1160px:text-2xl'>{pkg.name}</span>
                  <span className={`${awide.className} text-xl 1160px:text-2xl`}>{packagesPrice[pkg.name]}$</span>
                  <button
                    onClick={() => onRemovePackage(pkg.name)}
                    className="absolute bottom-[-1px] right-1 text-white text-4xl cursor-pointer font-light hover:scale-125 transition-all ease-in"
                  >
                    ×
                  </button>
                </div>
            ))}
          </div>
          <div className="mb-4">
            <h3 className="text-bec font-extrabold mb-2 4xl:mb-4 mt-15 text-2xl 1160px:text-3xl uppercase 4xl:text-4xl">ADDITIONAL OFFERS</h3>
            {customServices.length ? (
              <div
                className={`overflow-y-auto pr-2 custom-scroll
                  ${selectedPackages.length >= 1 ? 'max-h-[240px] 940px:max-h-[130px] 1160px:max-h-[200px] 4xl:max-h-[270px]' : 'max-h-[240px] 940px:max-h-[220px] 1160px:max-h-[280px] 4xl:max-h-[350px]'}
                `}
              >
                {customServices.map(name => (
                  <div key={name} className="relative flex items-center justify-between mb-5 border-b text-base 1160px:text-2xl border-becwhite pl-2 pr-10 4xl:text-2xl">
                    <span>{name}</span>
                    <span className={`${awide.className}`}>{servicesPrice[name]}$</span>
                    <button
                      onClick={() => onRemoveService(name)}
                      className="absolute bottom-[-1px] right-1 text-white text-4xl cursor-pointer font-light hover:scale-125 transition-all ease-in"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="pl-2 text-becwhite">None</div>
            )}
            <div className="flex justify-end 1160px:gap-7 gap-5 text-2xl 1160px:text-3xl font-extrabold mt-3">
              <span className="text-bec">TOTAL:</span>
              <span className={`${awide.className} text-shadow-lg shadow-bec`}>{total}$</span>
            </div>
          </div>
        </div>
        <div className="max-w-[320px] 460p:max-w-[400px] 700px:max-w-[500px] 940px:max-w-[300px] 1160px:max-w-[350px] 4xl:max-w-[400px] z-2">
          <form className="mt-6" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter email"
              className="1160px:text-xl text-base w-full py-3 px-2 mb-2 bg-transparent border-2 border-becwhite text-becwhite placeholder-gray-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Enter company name"
              className="mt-2 1160px:text-xl text-base w-full py-3 px-2 mb-2 bg-transparent border-2 border-becwhite text-becwhite placeholder-gray-400"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              required
            />
            <button
              type="submit"
              className='cursor-pointer w-full 1160px:mt-4 mt-1 text-center py-3 font-medium 1160px:text-xl text-base bg-[#5A5A58] text-[#CFCFCF] border border-[#CFCFCF] shadow-[inset_-3px_1px_15px_rgba(0,0,0,0.5)]
                hover:bg-[#727270] hover:text-white hover:border-white hover:shadow-[0_0_10px_rgba(255,255,255,0.3)] transition-all duration-400 ease-out'>
              SUBMIT
            </button>
          </form>

          <div className="mt-6 text-sm text-becwhite">
            <h4 className="text-bec font-extrabold text-2xl 1160px:text-3xl uppercase">Promotions</h4>
            <ul className="mt-2 text-[13px] 1160px:text-sm 4xl:text-lg">
              <li><span className="text-bec">-10%</span> discount when purchasing 3 packages</li>
            </ul>
          </div>
        </div>
      </div>
      <Image
        height={60}
        width={300}
        alt="Decorative line 3"
        src="/images/propositions/cart-left.svg" 
        className="absolute top-35 -left-22 440px:-left-30 1440px:-left-15 -z-1 440px:w-[300px] w-[200px]"
      />
      <Image
        height={60}
        width={350}
        alt="Decorative line 3"
        src="/images/propositions/cart-right.svg" 
        className="absolute top-10 -right-20 440px:-right-30 1440px:-right-15 -z-1 440px:w-[300px] w-[200px]"
      />
      <Image
        height={60}
        width={500}
        alt="Decorative line 3"
        src="/images/elipses/about_right.png" 
        className="absolute top-10 -right-30 1440px:-right-15 -z-1"
      />
      <Image
        height={60}
        width={500}
        alt="Decorative line 3"
        src="/images/elipses/about_left.png" 
        className="absolute top-30 -left-30 1440px:-left-15 -z-1"
      />
    </div>
  )
}

export default Cart;
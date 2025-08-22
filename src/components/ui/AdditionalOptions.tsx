'use client'

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Audiowide } from 'next/font/google';
import addOptions from '../../data/additionals';
import { AdditionalOptionsProps } from '@/types/types';
import Modal from './Modal';

const awide = Audiowide({
  weight: ['400'],
  subsets: ['latin'],
});

const AdditionalOptions = ({
  selectedServices,
  onToggleService,
  selectedPackageServices,
}: AdditionalOptionsProps) => {
  const [openTooltipId, setOpenTooltipId] = useState<string | null>(null);

  useEffect(() => {
    if (openTooltipId !== null) {
      // Заборонити скрол
      document.body.classList.add('overflow-hidden');
    } else {
      // Дозволити скрол
      document.body.classList.remove('overflow-hidden');
    }

    // Очистка при unmount
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [openTooltipId]);


  return (
    <div className="mt-10 490px:mt-25 relative">
      <h2 className="text-bec text-center mb-8 490px:mb-15  text-2xl 700px:text-3xl font-black 3xl:text-[42px] 4xl:text-5xl">
        ADDITIONAL OFFERS
      </h2>

      <div className="max-w-[1200px] 4xl:max-w-[1400px] flex flex-col mx-auto px-2   1060px:px-0">
        {addOptions.map(service => {
          const isDisabled = selectedPackageServices.includes(service.name);
          const isSelected = selectedServices.includes(service.name);

          const handleToggleTooltip = (id: string, e: React.MouseEvent) => {
            e.stopPropagation();
            setOpenTooltipId(prev => (prev === id ? null : id));
          };

          return (
            <div
              key={service.id}
              className={`relative flex items-center 600px:p-3 px-2 py-3 4xl:p-5 mb-4 info_bg cursor-pointer transition-all duration-100 ease-in-out
                ${isSelected ? 'border_is' : 'border_not'}
              `}
              onClick={() => {
                if (!isDisabled) {
                  onToggleService(service.name);
                }
              }}
            >
              <input
                type="checkbox"
                id={service.name}
                checked={isSelected}
                onChange={() => {}}
                disabled={isDisabled}
                className="mr-1 490px:mr-2 z-10 w-6 h-6 490px:w-7 490px:h-7 600px:w-9 600px:h-9 border-2 border-becwhite rounded-[5px] appearance-none 
                  checked:bg-[url('/images/propositions/checkbox-line.svg')] 
                  checked:bg-center checked:bg-no-repeat checked:bg-contain cursor-pointer 
                  "
              />
              <div className="flex-grow flex items-start pl-3 490px:gap-0 gap-0.5 490px:pl-0 justify-between flex-col 540px:flex-row mr-1">
                <span className="flex-grow w-[180px] 460px:w-full text-[13px] 490px:text-sm 580px:text-base 640px:text-lg 840px:text-2xl 4xl:text-2xl 4xl:pl-3">{service.name}</span>
                {service.available !== 0 && (
                  <p className="text-[10px] 540px:w-full items-center flex justify-center w-[120px] 490px:text-[12px] 700px:text-sm font-extralight text-center bg-[#585856] text-becwhite 440px:py-1 py-0.5 px-1 440px:px-3 640px:px-6 4xl:py-2 4xl:px-8 4xl:text-lg mr-5 border-1 border-becwhite max-w-[250px]">
                    Limited to {service.available}
                  </p>
                )}
              </div>
              <button
                className={`text-center px-4 840px:px-7 py-1 text-base 580px:text-lg 840px:text-xl bg-[#5A5A58] text-becwhite border-2 border-[#CFCFCF] 
                  shadow-[inset_-3px_1px_15px_rgba(0,0,0,0.5)] cursor-pointer
                  hover:bg-[#727270] hover:text-white hover:border-white hover:shadow-[0_0_10px_rgba(255,255,255,0.3)] 
                  transition-all duration-400 ease-out ${awide.className} w-[90px] 840px:w-[120px] 4xl:w-[150px] 4xl:text-2xl`}
                onClick={e => {
                  e.stopPropagation();
                  onToggleService(service.name);
                }}
              >
                {service.price}
              </button>
              <span
                className="ml-2 600px:ml-4 flex items-center justify-center text-sm font-bold text-becblack bg-becwhite rounded-full w-5 h-5 
                cursor-pointer hover:scale-125 transition-all ease-in 4xl:w-6 4xl:h-6"
                onClick={e => {
                  e.stopPropagation();
                  handleToggleTooltip(service.id, e)
                }}
              >
                i
              </span>
              {openTooltipId === service.id && (
                <Modal onClose={() => setOpenTooltipId(null)}>
                  <div 
                    className="extra_bg text-becwhite text-sm border-2 border-bec p-6 w-full shadow-lg relative z-[100]"
                  >
                    <button
                      onClick={() => setOpenTooltipId(null)}
                      className="absolute -top-1 right-1 540px:top-1 540px:right-3 text-white text-4xl cursor-pointer font-extralight hover:scale-125 transition-all ease-in"
                      aria-label="Close tooltip"
                    >
                      ×
                    </button>
                    <h2 className="text-xl 600px:text-3xl font-bold mb-3">{service.name}</h2>
                    <p className="text-xs 600px:text-base">{service.description}</p>
                  </div>
                </Modal>
              )}
            </div>
          );
        })}
      </div>
      <Image
        height={60}
        width={600}
        alt="Decorative line right"
        src="/images/elipses/about_right.png"
        className="absolute -top-40 -right-30 1440px:-right-15 -z-1 hidden 460px:block"
        draggable={false}
      />
      <Image
        height={60}
        width={600}
        alt="Decorative line left"
        src="/images/elipses/about_left.png"
        className="absolute top-10 -left-30 1440px:-left-15 -z-1"
        draggable={false}
      />
    </div>
  );
};

export default AdditionalOptions;
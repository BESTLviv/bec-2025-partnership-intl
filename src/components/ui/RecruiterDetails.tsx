import { useEffect, useRef, useState } from "react";
import { DetailsProps } from "@/types/types";

const RecruiterDetails = ({ onClose, pack }: DetailsProps) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);
  

  const handleClickOutside = (event: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      onClose();
    }
  };

  useEffect(() => {
    setTimeout(() => setShow(true), 10);
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    // Зняти z-index з хедера
    const header = document.querySelector('header');
    if (header) {
      (header as HTMLElement).style.zIndex = '0';
    }

    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      if (header) {
        (header as HTMLElement).style.zIndex = '50';
      }
    };
  }, []);

  return (
    <div
      onClick={handleClickOutside}
      className={`fixed inset-0 z-50 p-4 flex items-center justify-center transition-opacity duration-300 
        ${show ? 'opacity-100' : 'opacity-0'} 
        backdrop-blur-[2px] bg-black/40`}
    >
      <div
        ref={modalRef}
        className={`extra_bg border-2 border-bec p-5 700px:p-8 max-w-[380px] 700px:max-w-[600px] w-full max-h-[80vh] 700px:max-h-[90vh] overflow-y-auto relative custom-scroll-md
        transform transition-all duration-300 ease-out
        ${show ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-4 text-white text-4xl cursor-pointer font-light hover:scale-125 transition-all ease-in"
        >
          ×
        </button>
        <h2 className={`text-2xl 700px:text-3xl font-bold text-white mb-4 leading-[1.2]`}>
          Explorer 400$
        </h2>
        <div className="text-white space-y-8">
          {pack.descriptions.map((desc, index) => (
            <div key={index} className="space-y-1">
              <h3 className="text-xl 700px:text-2xl font-bold leading-[1.3]">{pack.features[index]}</h3>
              <hr />
              <p className="text-sm 700px:text-[16px] font-extralight leading-[1.6]">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecruiterDetails;
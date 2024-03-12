// "use client"
import Image from "next/image"
import Timer from "../timer"
// import { useState, useEffect } from 'react';

const Hero = () => {
  const targetedDate = "March 14, 2024 23:59:59";
  // const [isMobile, setIsMobile] = useState(false);

  // useEffect(() => {
  //   const checkMobile = () => {
  //     setIsMobile(window.innerWidth <= 1024);
  //   };

  //   checkMobile();
  //   window.addEventListener('resize', checkMobile);

  //   return () => window.removeEventListener('resize', checkMobile);
  // }, []);


  return (
    <div className="h-[100vh] w-full relative">
      <div className="text-white mt-50 absolute inset-0 z-10 flex flex-col justify-end items-center text-center small:text-left small:items-start small:p-32">
        <div className="max-w-[40rem] hidden small:block">
          <Timer target={targetedDate} transparent={true} />
        </div>
        <h1 className="text-2xl-semi mb-4 drop-shadow-md shadow-black">
          Introducing the Latest Spring/Summer collection
        </h1>
        <p className="text-base-regular max-w-[40rem] mb-6 px-3 drop-shadow-md shadow-black">
          This spring/summer, we are reintroducing our bestsellers that goes perfectly with your style. Rediscover your favourites all over again, before they&apos;re gone.
        </p>
        <div className="block small:hidden justify-end pb-5">
          <Timer target={targetedDate} transparent={true} />
        </div>
      </div>

      <div className="image-container">
        <picture>
          <source media="(max-width: 1024px)" srcSet="/hero_mob.jpg" />
          <Image
            src={"/hero.jpg"}
            // src={isMobile ? '/hero_mob.jpg' : '/hero.jpg'}
            loading="eager"
            priority={true}
            quality={90}
            alt="display pic for retro"
            className="absolute inset-0"
            draggable="false"
            fill
            sizes="100vw"
            style={{
              objectFit: "cover",
            }}
          />
        </picture>
      </div>
      <div className="absolute inset-0 bg-black opacity-50"></div>
    </div>
  )
}

export default Hero

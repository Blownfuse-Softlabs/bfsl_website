"use client";
import ParticlesBG from "@/components/ParticlesBG";
import Image from "next/image";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import Tilt from "react-parallax-tilt";
import Link from "next/link";
import { useState } from "react";
import LoadingIndicator from "@/components/LoadingIndicator";

export default function Home() {
  const [linkClicked, setLinkClicked] = useState(false);

  return (
    <main className="flex flex-col w-full h-full">
      <section
        className={`${
          linkClicked
            ? "z-20 backdrop-blur-md bg-black/50"
            : "-z-10 backdrop-blur-none bg-transparent"
        } absolute flex items-center justify-center w-full h-full transition-all`}
      >
        <div className="flex items-center justify-center p-4 gap-4 bg-spoon-grey rounded-lg shadow-lg">
          <LoadingIndicator />
          <h1>Going to Spoontoo!</h1>
        </div>
      </section>
      <section className="flex flex-col xl:flex-row items-center justify-center xl:gap-20 gap-10 h-screen bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#2a2a2a] to-[#1a1a1a]">
        <div className="absolute flex items-center justify-center w-full h-full">
          <ParticlesBG />
        </div>
        <div className="flex flex-col items-center justify-center gap-10">
          <div className="relative xl:w-72 md:w-56 w-44 xl:h-72 md:h-56 h-44">
            <Image
              src="/BFS Icon White.svg"
              alt="Blownfuse Logo Icon"
              layout="fill"
              objectFit="contain"
            />
          </div>

          <div className="relative xl:w-72 md:w-56 w-44 xl:h-16 md:h-12 h-10">
            <Image
              src="/BFS Lettermark White.svg"
              alt="Blownfuse Logo Icon"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>

        <Tilt
          tiltMaxAngleX={10}
          tiltMaxAngleY={10}
          glareEnable={true}
          glarePosition="top"
          glareMaxOpacity={0.1}
          gyroscope={true}
          className="preserve-3D"
        >
          <div className="preserve-3D group flex flex-col items-center justify-center gap-5 xl:w-[596px] md:w-[468px] w-[372px] transition-all">
            <section className="group-hover:translate-z-10 flex flex-col items-center justify-between xl:h-[19rem] md:h-56 h-56 w-full bg-gradient-to-br from-spoon-red to-spoon-orange font-semibold rounded-xl overflow-clip transition-all">
              <div className="flex h-full w-full overflow-clip">
                <div className="relative w-64 mt-4 h-[200%]">
                  <Image
                    src="/Spoontoo - Character Spoony.svg"
                    alt="Blownfuse Logo Icon"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="flex flex-col gap-2 p-2 items-center justify-center w-full mt-4">
                  <h1 className="text-spoon-beige xl:text-lg text-sm">
                    We Are Building
                  </h1>
                  <div className="relative w-full h-20">
                    <Image
                      src="/Spoontoo - Logo Lettermark.svg"
                      alt="Blownfuse Logo Icon"
                      layout="fill"
                      objectFit="fill"
                    />
                  </div>
                  <p className="font-light text-spoon-beige text-center xl:text-base text-xs">
                    A next-gen platform redifining how we interact with food
                    selection
                  </p>
                </div>
              </div>
              {/*<button className="flex items-center justify-center gap-4 p-2 hover:py-4 w-full bg-spoon-beige hover:scale-105 transition-all">
                <h1 className="text-spoon-blue font-semibold">Check It Out</h1>
                <ArrowRightIcon className="text-spoon-blue w-6 h-6" />
              </button>*/}
            </section>

            <div className="preserve-3D group-hover:translate-z-20 flex items-center justify-center gap-5 transition-all">
              {/*<button className="flex items-center justify-center px-0 hover:px-2 py-4 xl:w-72 md:w-56 w-44 text-white hover:text-blue-300 font-semibold rounded-xl  border-2 border-white hover:border-blue-300 hover:shadow-lg hover:scale-105 transition-all">
                About Us
              </button>*/}

              <Link
                className="preserve-3D flex items-center justify-center gap-4 px-0 hover:px-2 py-4 xl:w-[596px] md:w-[468px] w-[372px] text-spoon-beige hover:text-spoon-blue hover:bg-spoon-beige font-semibold rounded-xl  border-2 border-spoon-beige hover:border-spoon-blue hover:shadow-lg hover:scale-105 transition-all"
                onClick={() => setLinkClicked(true)}
                href={"https://www.spoontoo.com"}
              >
                <h1 className="group-hover:translate-z-10 transition-all">
                  Check It Out
                </h1>
                <ArrowRightIcon className="w-6 h-6 group-hover:translate-z-5 transition-all" />
              </Link>
            </div>
          </div>
        </Tilt>
      </section>
    </main>
  );
}

// Photos from https://citizenofnowhe.re/lines-of-the-city
"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
  transform,
} from "framer-motion";
import { title } from "process";

const details = [
  {
    year: 2013,
    title: "The Beginning",
    description: `When I say "Incredible",
you say "India".
When I say YouthVibe
you say it's Mine
2013 was our first ever step into LPU’s Global fest Youthvibe
Based on Our Country’s huge cultural diversity, the fest was a mega hit among our youth population`,
  },
  {
    year: 2014,
    title: "YouthVibe 2014",
    description: `Stepping up our game, Youth Vibe 2014 portrayed all our famous Architectural Monuments of India.`,
  },
  {
    year: 2015,
    title: "YouthVibe 2015",
    description: `Youth Vibe 2015 brought forth the diversity of India in a united form. Promoting unity and acceptance of all the cultures of India.`,
  },
  {
    year: 2016,
    title: "Youthvibe: Relive 90s",
    description: `Taking all our millennials on a tour of their childhood memories, Youth vibe 2016 recreated all our favourite cartoon characters from the 90s. Introducing the very popular Coke Studio Concert, we welcomed the very popular Diljit Dosanjh and Gurdas Mann to our campus.`,
  },
  {
    year: 2018,
    title: "Youthvibe: DIVERSITY - Embrace it, Share it, Celebrate it",
    description: `Taking Youth Vibe to yet another level Youth Vibe 2018 embraced all our traditions and celebrated the various diversities of India. Youth Vibe 2018 was declared as one of the biggest fests in Asia.`,
  },
  {
    year: 2020,
    title: "Youthvibe",
    description: `Reviving our very popular Coke Studio Concert, this time with none other than Amit Trivedi. Youth vibe successfully celebrated it’s mega event with over 5000+ participants and 30000+ footfall.`,
  },
];

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function Image({ detail }: { detail: any }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 200);

  return (
    <section className="lg:h-[80vh] md:h-[55vh] h-[70vh] flex justify-center items-center relative scroll-smooth">
      <div
        ref={ref}
        className="lg:w-[360px] lg:h-[400px] w-[300px] h-[400px] relative max-h-[90vh] m-[20px] overflow-hidden "
      >
        <img
          src={`https://xfdopvchbkvknriiippu.supabase.co/storage/v1/object/public/publicBucket/Screenshot_2024_07_18_121019.png`}
          alt="A London skyscraper"
          className="absolute inset-0 w-full h-full object-cover top-0 left-0 right-0 bottom-0"
        />
      </div>
      <p className=" lg:hidden absolute bottom-[-10px] w-[300px] text-sm md:text-lg">{`${detail.description}`}</p>
      <motion.div
        style={{ y }}
        className="m-0 lg:left-[-80px] left-[-10px] text-primary  md:w-[500px] font-2xl font-bold absolute"
      >
        <h1 className="lg:text-[70px]  max-w-[90vw] text-[40px]">{`${detail.year}`}</h1>
      </motion.div>
      <motion.div
        style={{ y }}
        className="m-0 lg:left-[400px] flex flex-col md:left-[300px] left-[220px] lg:w-[500px] w-[150px] md:font-2xl font-lg font-bold absolute"
      >
        <h1 className="lg:text-[50px] flex text-[30px]  drop-shadow-xl">{`${detail.title}`}</h1>
        <p className="hidden lg:block text-sm lg:text-md">{`${detail.description}`}</p>
      </motion.div>
    </section>
  );
}

export default function Timeline() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <div className="w-full  flex flex-col  items-center justify-center">
        <h1 className="text-4xl">Our History</h1>
        {details.map((detail) => (
          <Image detail={detail} />
        ))}
        <motion.div
          className="fixed left-0 right-0 h-3 bg-primary bottom-0 z-[12]"
          style={{ scaleX }}
        />
      </div>
    </>
  );
}

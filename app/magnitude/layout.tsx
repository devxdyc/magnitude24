import { GeistSans } from "geist/font/sans";
import "../globals.css";
import { SparklesPreview } from "@/components/main";
import { url } from "inspector";
import Header from "@/components/Header";
import { Urbanist, Fruktur } from "next/font/google";
import { HeroHighlight } from "@/components/ui/hero-higlight";
import Footer from "@/components/homepage/footer";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { Toaster } from "@/components/ui/toaster";
import { Suspense } from "react";
import Mainloder from "@/components/homepage/loader";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "MAGNITUDE",
  description: "LPU'S CULTURAL FEST",
};

const UrbanistF = Urbanist({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"], // Specify the font weights you need
});

const events = [
  {
    id: "4",
    created_at: "2024-08-25 15:42:34.483666+00",
    name: "StepSync",
    short_description:
      "Participants will showcase their dance skills, performing solo, duo, or in groups. The best performances will be judged based on creativity, technique, and overall impact.",
    long_description:
      "Immerse yourself in a high-energy dance competition where rhythm, creativity, and passion collide. Watch as performers captivate the audience with their mesmerizing moves and dynamic choreography. Participants will showcase their dance skills, performing solo, duo, or in groups. The best performances will be judged based on creativity, technique, and overall impact.",
    banner_url: "/corasal/dance.jpg",
    square_url: "/frame/dance.jpg",
    start_date: "2024-09-19",
    end_date: "2024-09-23",
    start_time: "17:00:00",
    end_time: "19:30:00",
    venue: "Shanti Devi Mittal Auditorium",
    category: "1",
    form_req: null,
    rules: null,
    guidelines: `
      <div class="p-4 flex flex-col bg-transparent rounded shadow-md">
        <h2 class="text-2xl font-bold mb-4">No. of Rounds: 2</h2>
        <div class="mb-6">
          <p class="test-gray-700">Round 1: Top 5 contestants will be selected. (19 September 2024)</h3>
          <p class="text-gray-700">Round 2: Finale (23 September 2024)</p>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-bold mb-2">Dress Code:</h3>
          <p class="text-gray-700">Dress according to the performance. However, any kind of vulgarity in the outfits is strictly prohibited.</p>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-bold mb-2">Code of Conduct:</h3>
          <ul class="list-disc list-inside text-gray-700">
            <li>Time limit: 3 minutes for each performance.</li>
            <li>Exceeding the time limit will result in negative marking.</li>
            <li>Participants must arrange their own props as needed.</li>
            <li>Bollywood songs are not permitted. Only regional songs or those from Bollywood albums that do not feature in Bollywood movies and do not contain vulgarity are allowed.</li>
            <li>The organizers may enforce changes as needed.</li>
            <li>The decision of the judges will be final and binding.</li>
            <li>Submission of Track: Participants must submit their audio files to the organizers by 1 PM on the day of the competition. Only upon submission will they be permitted to perform.</li>
          </ul>
        </div>
      </div>
    `,
    team_size: "",
    event_type: "Offline",
    is_featured: false,
    category_name: "Cultural",
    event_head: "",
  },
  {
    id: "5",
    created_at: "2024-08-25 15:44:04.354492+00",
    name: "Battle of Voices",
    short_description:
      "Participants will perform solo, duet, or group singing in various formats including Light Vocal, Western, and Folk. Performances will be evaluated on vocal ability, expression, and stage presence.",
    long_description:
      "A showcase of vocal talent where singers break free from convention to deliver powerful performances. From soulful melodies to high-energy anthems, this event celebrates the art of singing in its purest form. Participants will perform solo, duet, or group singing in various formats including Light Vocal, Western, and Folk. Performances will be evaluated on vocal ability, expression, and stage presence.",
    banner_url: "/corasal/battleofvoices.jpg",
    square_url: "/frame/soundscape.jpg",
    start_date: "2024-09-20",
    end_date: "2024-09-23",
    start_time: "17:00:00",
    end_time: "19:30:00",
    venue: "Shanti Devi Mittal Auditorium",
    category: "1",
    form_req: null,
    rules: null,
    guidelines: `
      <div class="p-4 bg-transparent rounded shadow-md">
        <h2 class="text-2xl font-bold mb-4">No. of Rounds: 2</h2>
        <div class="mb-6">
          <p class="text-gray-700 text-lg mb-2">Round 1: Top 5 contestants will be selected. (20 September 2024)</p>
          <p class="text-gray-700 text-lg mb-2">Round 2: Finale (23 September 2024)</p>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-bold mb-2">Dress Code:</h3>
          <p class="text-gray-700">Dress according to the performance. However, any kind of vulgarity in the outfits is strictly prohibited.</p>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-bold mb-2">Code of Conduct:</h3>
          <ul class="list-disc list-inside text-gray-700">
            <li>Time limit: 3 minutes per performance.</li>
            <li>Exceeding the time limit will result in negative marking.</li>
            <li>Lyrics must not be provocative or vulgar; any attempt to provoke will lead to disqualification.</li>
            <li>Bollywood songs are not permitted. Only regional songs or those from Bollywood albums that do not feature in Bollywood movies and do not contain vulgarity are allowed.</li>
            <li>Participants must arrange their own instruments as needed.</li>
            <li>The organizers may enforce changes as needed.</li>
            <li>The decision of the judges will be final and binding.</li>
          </ul>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-bold mb-2">Submission of Track:</h3>
          <p class="text-gray-700">Participants must submit their audio files to the organizers by 1 PM on the day of the competition. Only upon submission will they be permitted to perform.</p>
        </div>
      </div>
    `,
    team_size: "Any",
    event_type: "Offline",
    is_featured: true,
    category_name: "Cultural",
    event_head: null,
  },
  {
    id: "6",
    created_at: "2024-08-25 15:45:19.905613+00",
    name: "SoundScape",
    short_description:
      "An instrumental music competition where participants can perform solo, duet, or in a group. The performances will be judged based on the skill, harmony, and the emotional connection they create with the audience.",
    long_description:
      "SoundScape is a celebration of instrumental music, where melodies come to life through various instruments. Participants can perform solo, duet, or in a group, showcasing their mastery and creativity. The performances will be judged on skill, harmony, and the emotional connection they create with the audience.",
    banner_url: "/corasal/soundscape.jpg",
    square_url: "/frame/soundscape.jpg",
    start_date: "2024-09-21",
    end_date: "2024-09-23",
    start_time: "17:00:00",
    end_time: "19:30:00",
    venue: "Shanti Devi Mittal Auditorium",
    category: "1",
    form_req: null,
    rules: null,
    guidelines: `
      <div class="p-4 bg-transparent rounded shadow-md">
        <h2 class="text-2xl font-bold mb-4">No. of Rounds: 2</h2>
        <div class="mb-6">
          <p class="text-gray-700 text-lg mb-2">Round 1: Top 5 contestants will be selected. (21 September 2024)</p>
          <p class="text-gray-700 text-lg mb-2">Round 2: Finale (23 September 2024)</p>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-bold mb-2">Dress Code:</h3>
          <p class="text-gray-700">Dress according to the performance. However, any kind of vulgarity in the outfits is strictly prohibited.</p>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-bold mb-2">Code of Conduct:</h3>
          <ul class="list-disc list-inside text-gray-700">
            <li>Time limit: 3 minutes per performance.</li>
            <li>Exceeding the time limit will result in negative marking.</li>
            <li>Participants must arrange their own instruments as needed.</li>
            <li>Bollywood songs are not permitted. Only regional songs or those from Bollywood albums that do not feature in Bollywood movies and do not contain vulgarity are allowed.</li>
            <li>The organizers may enforce changes as needed.</li>
            <li>The decision of the judges will be final and binding.</li>
          </ul>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-bold mb-2">Submission of Track:</h3>
          <p class="text-gray-700">Participants must submit their audio files to the organizers by 1 PM on the day of the competition. Only upon submission will they be permitted to perform.</p>
        </div>
      </div>
    `,
    team_size: "Any",
    event_type: "Offline",
    is_featured: false,
    category_name: "Cultural",
    event_head: null,
  },
  {
    id: "7",
    created_at: "2024-08-25 15:46:36.103827+00",
    name: "DramaSphere",
    short_description:
      "A theatre competition where teams perform plays, skits, or monologues. Judging criteria include acting skills, dialogue delivery, direction, and overall presentation.",
    long_description:
      "DramaSphere is where storytelling comes alive on stage. Teams will present plays, skits, or monologues, showcasing their acting prowess and narrative creativity. Performances will be judged on acting skills, dialogue delivery, direction, and overall presentation.",
    banner_url: "/corasal/dramasphere.jpg",
    square_url: "/frame/dramasphere.jpg",
    start_date: "2024-09-22",
    end_date: "2024-09-23",
    start_time: "17:00:00",
    end_time: "19:30:00",
    venue: "Shanti Devi Mittal Auditorium",
    category: "1",
    form_req: null,
    rules: null,
    guidelines: `
      <div class="p-4 bg-transparent rounded shadow-md">
        <h2 class="text-2xl font-bold mb-4">No. of Rounds: 2</h2>
        <div class="mb-6">
          <p class="text-gray-700 text-lg mb-2">Round 1: Top 5 teams will be selected. (22 September 2024)</p>
          <p class="text-gray-700 text-lg mb-2">Round 2: Finale (23 September 2024)</p>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-bold mb-2">Dress Code:</h3>
          <p class="text-gray-700">Dress according to the performance. Any kind of vulgarity in outfits is strictly prohibited.</p>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-bold mb-2">Code of Conduct:</h3>
          <ul class="list-disc list-inside text-gray-700">
            <li>Time limit: 10 minutes per performance.</li>
            <li>Exceeding the time limit will result in negative marking.</li>
            <li>Content must not be provocative or vulgar; any attempt to provoke will lead to disqualification.</li>
            <li>Participants must arrange their own props as needed.</li>
            <li>Bollywood dialogues are not permitted. Only original scripts or those adapted from non-Bollywood sources are allowed.</li>
            <li>The organizers may enforce changes as needed.</li>
            <li>The decision of the judges will be final and binding.</li>
          </ul>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-bold mb-2">Submission of Script:</h3>
          <p class="text-gray-700">Teams must submit their scripts to the organizers by 1 PM on the day of the competition. Only upon submission will they be permitted to perform.</p>
        </div>
      </div>
    `,
    team_size: "5-8",
    event_type: "Offline",
    is_featured: true,
    category_name: "Cultural",
    event_head: null,
  },
  {
    id: "8",
    created_at: "2024-08-25 15:48:00.547395+00",
    name: "Rhythm Unleashed",
    short_description:
      "A group dance competition where teams bring their best choreography to the stage. Judging criteria include creativity, synchronization, and overall stage presence.",
    long_description:
      "Rhythm Unleashed is an electrifying group dance competition where teams unleash their creativity and energy on stage. From traditional to contemporary styles, teams will be judged on choreography, synchronization, and overall impact.",
    banner_url: "/corasal/rhythm-unleashed.jpg",
    square_url: "/frame/rhythm-unleashed.jpg",
    start_date: "2024-09-23",
    end_date: "2024-09-23",
    start_time: "17:00:00",
    end_time: "19:30:00",
    venue: "Shanti Devi Mittal Auditorium",
    category: "1",
    form_req: null,
    rules: null,
    guidelines: `
      <div class="p-4 bg-transparent rounded shadow-md">
        <h2 class="text-2xl font-bold mb-4">Single Round Event</h2>
        <div class="mb-6">
          <h3 class="text-xl font-bold mb-2">Dress Code:</h3>
          <p class="text-gray-700">Dress according to the performance. Any kind of vulgarity in outfits is strictly prohibited.</p>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-bold mb-2">Code of Conduct:</h3>
          <ul class="list-disc list-inside text-gray-700">
            <li>Time limit: 6 minutes per performance.</li>
            <li>Exceeding the time limit will result in negative marking.</li>
            <li>Participants must arrange their own props as needed.</li>
            <li>Bollywood songs are not permitted. Only regional songs or those from Bollywood albums that do not feature in Bollywood movies and do not contain vulgarity are allowed.</li>
            <li>The organizers may enforce changes as needed.</li>
            <li>The decision of the judges will be final and binding.</li>
          </ul>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-bold mb-2">Submission of Track:</h3>
          <p class="text-gray-700">Teams must submit their audio files to the organizers by 1 PM on the day of the competition. Only upon submission will they be permitted to perform.</p>
        </div>
      </div>
    `,
    team_size: "6-10",
    event_type: "Offline",
    is_featured: true,
    category_name: "Cultural",
    event_head: null,
  },
  {
    id: "9",
    created_at: "2024-08-25 15:50:00.650827+00",
    name: "Voices Unbound",
    short_description:
      "A singing competition where participants can perform solo or in groups. The focus is on vocal technique, emotional expression, and originality of performance.",
    long_description:
      "Voices Unbound is a celebration of vocal talent where participants can perform solo or in groups. Performances will be judged based on vocal technique, emotional expression, and originality. Whether it’s a classic tune or a modern hit, showcase your voice and captivate the audience.",
    banner_url: "/corasal/voices-unbound.jpg",
    square_url: "/frame/voices-unbound.jpg",
    start_date: "2024-09-24",
    end_date: "2024-09-24",
    start_time: "17:00:00",
    end_time: "19:30:00",
    venue: "Shanti Devi Mittal Auditorium",
    category: "1",
    form_req: null,
    rules: null,
    guidelines: `
      <div class="p-4 bg-transparent rounded shadow-md">
        <h2 class="text-2xl font-bold mb-4">Single Round Event</h2>
        <div class="mb-6">
          <h3 class="text-xl font-bold mb-2">Dress Code:</h3>
          <p class="text-gray-700">Dress appropriately for a performance. Avoid any outfits that could be deemed vulgar or distracting.</p>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-bold mb-2">Code of Conduct:</h3>
          <ul class="list-disc list-inside text-gray-700">
            <li>Time limit: 5 minutes per performance.</li>
            <li>Exceeding the time limit will result in negative marking.</li>
            <li>Participants must bring their own backing tracks or accompanists.</li>
            <li>Bollywood songs are allowed if they are clean and appropriate for all audiences.</li>
            <li>The organizers may enforce changes as needed.</li>
            <li>The decision of the judges will be final and binding.</li>
          </ul>
        </div>
      </div>
    `,
    team_size: "Any",
    event_type: "Offline",
    is_featured: false,
    category_name: "Cultural",
    event_head: null,
  },
  {
    id: "10",
    created_at: "2024-08-25 15:52:17.029351+00",
    name: "Pitch Perfect",
    short_description:
      "A startup pitch competition where entrepreneurs present their business ideas to a panel of judges. The focus is on the innovation, feasibility, and market potential of the ideas.",
    long_description:
      "Pitch Perfect is an opportunity for entrepreneurs to showcase their innovative business ideas. Participants will pitch their startups to a panel of judges, who will evaluate based on innovation, feasibility, and market potential. It’s a chance to gain visibility, network with industry leaders, and win prizes.",
    banner_url: "/corasal/pitch-perfect.jpg",
    square_url: "/frame/pitch-perfect.jpg",
    start_date: "2024-09-25",
    end_date: "2024-09-25",
    start_time: "17:00:00",
    end_time: "19:30:00",
    venue: "Shanti Devi Mittal Auditorium",
    category: "7",
    form_req: null,
    rules: null,
    guidelines: `
      <div class="p-4 bg-transparent rounded shadow-md">
        <h2 class="text-2xl font-bold mb-4">Single Round Event</h2>
        <div class="mb-6">
          <h3 class="text-xl font-bold mb-2">Dress Code:</h3>
          <p class="text-gray-700">Business casual or professional attire is required.</p>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-bold mb-2">Code of Conduct:</h3>
          <ul class="list-disc list-inside text-gray-700">
            <li>Time limit: 5 minutes for pitch and 5 minutes for Q&A.</li>
            <li>Exceeding the time limit will result in negative marking.</li>
            <li>Presentations must be original and well-prepared.</li>
            <li>No offensive or inappropriate content will be tolerated.</li>
            <li>The decision of the judges will be final and binding.</li>
          </ul>
        </div>
      </div>
    `,
    team_size: "1-3",
    event_type: "Offline",
    is_featured: true,
    category_name: "Startup and Entrepreneurship",
    event_head: null,
  },
  {
    id: "11",
    created_at: "2024-08-25 15:54:00.732195+00",
    name: "StartUp Spotlight",
    short_description:
      "A showcase event where startup founders present their products and services. Attendees can interact with the founders and learn about new and emerging businesses.",
    long_description:
      "StartUp Spotlight provides a platform for startup founders to showcase their products and services. Attendees have the opportunity to interact with the entrepreneurs, explore innovative solutions, and network with potential partners or investors. It’s a dynamic environment for discovering new business ventures.",
    banner_url: "/corasal/startup-spotlight.jpg",
    square_url: "/frame/startup-spotlight.jpg",
    start_date: "2024-09-26",
    end_date: "2024-09-26",
    start_time: "17:00:00",
    end_time: "19:30:00",
    venue: "Shanti Devi Mittal Auditorium",
    category: "7",
    form_req: null,
    rules: null,
    guidelines: `
      <div class="p-4 bg-transparent rounded shadow-md">
        <h2 class="text-2xl font-bold mb-4">Single Round Event</h2>
        <div class="mb-6">
          <h3 class="text-xl font-bold mb-2">Dress Code:</h3>
          <p class="text-gray-700">Business casual or professional attire is required.</p>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-bold mb-2">Code of Conduct:</h3>
          <ul class="list-disc list-inside text-gray-700">
            <li>Participants must provide their own display materials and equipment.</li>
            <li>Presentations must be original and focus on the unique aspects of their startup.</li>
            <li>No offensive or inaregularppropriate content will be tolerated.</li>
            <li>The organizers may enforce changes as needed.</li>
          </ul>
        </div>
      </div>
    `,
    team_size: "1-3",
    event_type: "Offline",
    is_featured: true,
    category_name: "Startup and Entrepreneurship",
    event_head: null,
  },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={"black-han-sans-regular"}>
      <head>
        <link rel="shortcut icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className=" bg-black text-foreground">
        {/* <div className=" w-full bg-black text-white bg-dot-white/[0.2]  relative  "> */}
        {/* Radial gradient for the container to give a faded look */}
        {/* <div className="absolute pointer-events-none inset-0 flex items-center bg-black text-white [mask-image:radial-gradient(ellipse_at_center,transparent_50%,white)]"></div> */}

        <Suspense fallback={<Mainloder />}>
          <BackgroundBeamsWithCollision className="">
            <div className="  fixed top-[-150px] z-[-2] h-[300px] left-[-170px] w-[300px] rounded-[500px] bg-primary blur-[200px] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
            <div className=" bgBlobs blur-3xl fixed top-[-150px] z-[-2] h-[300px] left-[-170px] w-[300px]  "></div>
            <div className=" fixed  bottom-[-150px] z-[-2] h-[300px] right-[-170px] md:w-[300px] rounded-[500px] bg-primary blur-[200px] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
            <main className="min-h-screen flex flex-col items-center w-full ">
              <Header />
              {children}
            </main>
            <Footer />
            {/* </div> */}
          </BackgroundBeamsWithCollision>
        </Suspense>
        <Toaster />
      </body>
    </html>
  );
}

import React from "react";
import Head from "next/head";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const resume = () => {
  return (
    <>
      <Head>
        <title>Yogitaba | Resume</title>
        <meta
          name="description"
          content="I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences."
        />
        <link rel="icon" href="/fav.png" />
      </Head>

      <div className="max-w-[940px] mx-auto p-2 pt-[120px]">
        <h2 className="text-center">Resume</h2>
        <div className="bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center">
          <h2 className="text-center">Yogitaba Gohil</h2>
          <div className="flex">
            <a
              href="https://www.linkedin.com/in/yogitaba-g-a28205180/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn size={20} style={{ marginRight: "1rem" }} />
            </a>
            <a
              href="https://github.com/yogitaba-gohil"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={20} style={{ marginRight: "1rem" }} />
            </a>
          </div>
        </div>
        <div className="text-center py-4 text-xl font-bold uppercase tracking-wider">
          <div className="hidden sm:block">
            <p>
              Proven Leadership <span className="px-1">|</span> Web Development{" "}
              <span className="px-1">|</span> Complex Problem Solving
            </p>
          </div>
          <div className="block sm:hidden">
            <p>Proven Leadership</p>
            <p className="py-2">Web Development</p>
            <p>Complex Problem Solving</p>
          </div>
        </div>
        <p>
          Analytical, innovative, and motivated web development professional
          with experience in customer service, team leadership, and
          organizational effectiveness in fast-paced and challenging
          environments. Adept at developing strategies and driving streamlined
          operations. Diverse analytical skills, team collaboration, and
          relationship building. Consummate professional, and motivated leader,
          with solid interpersonal abilities and complex problem-solving skills.
          Effective and proven track record of critical thinking, idea
          generation, and optimizing efficiencies.
        </p>

        {/* Skills */}
        <div className="text-center py-4">
          <h5 className="text-center underline text-[18px] py-2">Skills</h5>
          <p className="py-2">
            <span className="font-bold">Technical Skills</span>
            <span className="px-2">|</span>Front-End Web Developer
            <span className="px-2">|</span> HTML
            <span className="px-2">|</span>CSS
            <span className="px-2">|</span>Javascript
            <span className="px-2">|</span>React
            <span className="px-2">|</span>Next JS
            <span className="px-2">|</span>SQL
            <span className="px-2">|</span>NoSQL
            <span className="px-2">|</span>Redux
            <span className="px-2">|</span>Tailwind
            <span className="px-2">|</span> Firebase
            <span className="px-2">|</span> RESTAPI
          </p>
          {/* <p className='py-2'>
            <span className='font-bold'>Amazon Web Services</span>
            <span className='px-2'>|</span>Amazon Web Services Cloud
            Practitioner
          </p> */}
        </div>

        <h5 className="text-center underline text-[18px] py-4">
          Professional Experience
        </h5>
        {/* Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">Hupp Technologies Pvt.Ltd</span>
            <span className="px-2">|</span>Ahmedabad, India
          </p>
          <p className="py-1 italic">
            Front End Web Developer & JavaScript Developer ( March 2022- July
            2022)
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Ensured comprehensive mobile responsive UI layouts with
              understanding of HTML, CSS, and JavaScript.
            </li>
            <li>
              Troubleshoot issues and concerns, configure operation and analytic
              plugins, and design changes as needed.
            </li>
            <li>
              Worked directly with a diverse client base to understand and
              implement multiple technologies and programs.
            </li>
            <li>
              Platform migration managing DNS servers as well as MX records and
              ensuring a smooth migration process.
            </li>
          </ul>
        </div>

        {/* Personal Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">Codexprt</span>
            <span className="px-2">|</span>Rajkot, India
          </p>
          <p className="py-1 italic">
            junior Frontend developer (December 2020 - February 2022)
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              In 2020, I’m learning in web development, specifically front-end
              development.
            </li>
            <li>
              To Make websites using latest JavaScript based frameworks &
              technologies like, ReactJS, Redux Architecture, NextJS for SEO
              friendly ReactJS based application. Building websites and apps
              that are responsive and usable.
            </li>
          </ul>
        </div>

        {/*  */}
        <h5 className="text-center underline text-[18px] py-4">
          Other Professional Experience
        </h5>

        {/* Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold">Search Engine
Optimization
Executive</span>
            <span className="px-2">|</span>Rajkot, India
          </p>
          <p className="py-1 italic">Guru Technolabs (February 2019 -
September 2020)</p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
            Developed research strategies to assess market demand for new offerings.
Evaluated market research outcomes for improved advertising strategy.

            </li>
            <li>
            Created customer awareness of goods, services and special promotions with creative advertising strategies.
Used data to build strategies for targeting specific markets and consumer demographics.

            </li>
            <li>
            Enhanced target market reach through tactical social media advertising.
Monitored consumer patterns, anticipating changes and maintaining marketing strategy relevance in dynamic l andscape
            </li>
            <li>
            Analysed market trends and demand to develop accurate pricing strategies.
Helped teams reach ambitious sales objectives with multi-channel marketing strategies.
            </li>
            <li>
            Wrote copy for advertisements, email communications and media used in advertising
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default resume;

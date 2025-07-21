// import { useState } from "react";
// import { RevealOnScroll } from "../RevealOnScroll";
// import emailjs from 'emailjs-com'

// export const About = () => {
  

//     const FrontendSkills = ["HTML", "CSS", "JavaScript", "ReactJS", "NextJS", "SCSS", "TailwindCSS", "Bootstrap"];
//     const BackendSkills = ["NodeJS", "Python", "Java", "ConvexDB", "SQL", "MySQL",  "MongoDB", "GraphQL"];
//   return (
//     <section
//       id="about"
//       className="min-h-screen flex items-center justify-center py-20"
//     >
//       <RevealOnScroll animationType="about">
//       <div className="max-w-3xl mx-auto px-4 ">
//         <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
//           About Me
//         </h2>

//         <div className="rounded-xl p-8 border-white/10 border  hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)]  hover:-translate-y-1 transition-all">
//           <p className="text-gray-400 text-lg mb-8">
//             passionate developer with expertise in building scalable web
//             aplication and creating innovative solutions.
//           </p>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div className="rounded-xl p-6 hover:-translate-y-1  hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)]  transition-all ">
//               <h3 className="text-xl font-bold mb-4"> Frontend</h3>
//               <div className="flex flex-wrap gap-5">
//                 {FrontendSkills.map((tech, key)=>(
//                     <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover: shadow-[0_2px_8px_rgba(59,1302246,0.2)] transition">
//                         {tech}
//                     </span>
//                 ))}
//               </div>
              
//             </div>
//              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all ">
//               <h3 className="text-xl font-bold mb-4"> Backend</h3>
//               <div className="flex flex-wrap gap-5">
//                 {BackendSkills.map((tech, key)=>(
//                     <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover: shadow-[0_2px_8px_rgba(59,1302246,0.2)] transition-all">
//                         {tech}
//                     </span>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8  ">
//                 <div className="p-6 rounded-xl border-white/10  border hover:-translate-y-1  hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all ">
//                     <h3 className="text-xl font-bold mb-4">🏫 Education </h3>
//                     <ul className="list-disc list-inside mt-6 text-gray-300 space-y-2">
//                         <li>
//                             <strong> B.Tech in Computer Engineering </strong><br />
//                                      - G.E.C Gandhinagar
//                             [2022-2025]
//                         </li><br />
//                          <li>
//                             <strong> Diploma in Information Technology</strong><br />
//                                      - R.C.Technical Institute
//                             [2019-2022]
//                         </li>
//                     </ul>
//                 </div>
//                  <div className="p-6 rounded-xl border-white/10  border hover:-translate-y-1 transition-all   hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] ">
//                     <h3 className="text-xl font-bold mb-4">💼 Work Experience </h3>
//                     <div className="space-y-4 text-gray-300">
//                         <div>
//                             <h4  className="font-semibold">(1). INFOLABZ IT SERVICES PVT LTD. <br /> (React Developer)  (Intern)</h4>
//                             <p className="text-medium text-gray-300"> Crafted dynamic and responsive React interfaces using Hooks (useState, useEffect, useContext) and custom logic to deliver real-time, interactive user experiences.</p>
//                         </div>
//                          <div>
//                             <h4  className="font-semibold ">(2). SPIRAL TECHNOLABS PVT LTD. <br />(Full-Stack Developer)  (Intern) </h4>
//                             <p className="text-medium text-gray-300">Designed sleek front-end applications with HTML5, CSS, JavaScript, React.js, and Redux—enhanced with ShadCN UI and powered by real-time API and GraphQL integrations.</p>
//                         </div>

//                     </div>
//                 </div>
//         </div>
//       </div>
//       </RevealOnScroll>
//     </section>
//   );
// };











import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from 'emailjs-com';

export const About = () => {
  const FrontendSkills = ["HTML", "CSS", "JavaScript", "ReactJS", "NextJS", "SCSS", "TailwindCSS", "Bootstrap"];
  const BackendSkills = ["NodeJS", "Python", "Java", "ConvexDB", "SQL", "MySQL", "MongoDB", "GraphQL"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll animationType="about">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] hover:-translate-y-1 transition-all">
            <p className="text-gray-400 text-lg mb-8">
              passionate developer with expertise in building scalable web
              applications and creating innovative solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-5">
                  {FrontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-5">
                  {BackendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
              <h3 className="text-xl font-bold mb-4">🏫 Education</h3>
              <ul className="list-disc list-inside mt-6 text-gray-300 space-y-2">
                <li>
                  <strong>B.Tech in Computer Engineering</strong>
                  <br />- G.E.C Gandhinagar [2022-2025]
                </li>
                <br />
                <li>
                  <strong>Diploma in Information Technology</strong>
                  <br />- R.C. Technical Institute [2019-2022]
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)]">
              <h3 className="text-xl font-bold mb-4">💼 Work Experience</h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    (1). INFOLABZ IT SERVICES PVT LTD. <br /> (React Developer) (Intern)
                  </h4>
                  <p className="text-medium text-gray-300">
                    Crafted dynamic and responsive React interfaces using Hooks (useState, useEffect, useContext) and custom logic to deliver real-time, interactive user experiences.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">
                    (2). SPIRAL TECHNOLABS PVT LTD. <br /> (Full-Stack Developer) (Intern)
                  </h4>
                  <p className="text-medium text-gray-300">
                    Designed sleek front-end applications with HTML5, CSS, JavaScript, React.js, and Redux—enhanced with ShadCN UI and powered by real-time API and GraphQL integrations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
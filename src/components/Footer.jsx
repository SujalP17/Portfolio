// export const Footer = () => {
//   return (
//     <footer className="bg-blue-950 backdrop-blur-lg border-t border-white/10 shadow-inner text-gray-300">
//       <div className="max-w-5xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
//         <p className="text-sm text-center justify-center items-center">
//           © {new Date().getFullYear()} Sujal. All rights reserved.
//         </p>

//         <div className="flex flex-col md:flex-row md:items-center gap-3 text-sm">
//           <a
//             href="mailto:sujal@example.com"
//             className="hover:text-blue-400 transition-colors"
//           >
//             sujal@example.com
//           </a>
//           <span className="hidden md:inline-block">|</span>
//           <a
//             href="https://github.com/sujal"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="hover:text-blue-400 transition-colors"
//           >
//             GitHub
//           </a>
//         </div>
//       </div>
//     </footer>
//   );
// };



// import React from 'react'

//  export const Footer = () => {
//   return (
//     <div  >

//     <div className='px-10  bg-cyan-950 '>
//         <div className='mb-8 py-3'>
//             <h1 className='text-xl font-bold font-mono mb-8'>Sujal</h1>
//             <div className='text-gray-400 text-lg mb-8 flex flex-wrap'>I like building new things and creating impressive designs and develop them into code. I worked on Many projects as a developer using most recent Technologies.</div>
//         </div>
//     </div>

//         <div className='flex justify-center gap-4 font-stretch-50% text-sm pb-6'>
//            <span> &copy; {new Date().getFullYear()} Sujal Prajapati. </span>
//               <span className='ml-4'>All rights Reserved </span>
//         </div>
//     </div>
//   )
// }

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
// import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

// export const Footer = () => {
//   return (
//     <div>
//       <div className="px-10 bg-cyan-950">
//         <div className="mb-8 py-3 ml-3">
//           <h1 className="text-xl font-bold font-mono mb-8">Sujal</h1>

//           {/* Flex Container for Text + Icons */}
//           <div className="flex justify-between items-center flex-wrap text-gray-400 text-lg mb-8 ">
//             <p className="max-w-4xl">
//               I like building new things and creating impressive designs and develop them into code. 
//               I worked on many projects as a developer using most recent Technologies.
//             </p>

//             {/* Social Icons */}
//             <div className="flex gap-8 mt-4 md:mt-0 mr-30 ">
//               <a
//                 href="mailto:sujalprajapati@example.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-gray-400 hover:text-blue-400 transition-colors text-2xl"
//               >
//                 <FontAwesomeIcon icon={faEnvelope} />
//               </a>
//               <a
//                 href="https://github.com/sujal"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-gray-400 hover:text-blue-400 transition-colors text-2xl"
//               >
//                 <FontAwesomeIcon icon={faGithub} />
//               </a>
//               <a
//                 href="https://linkedin.com/in/sujalprajapati"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-gray-400 hover:text-blue-400 transition-colors text-2xl"
//               >
//                 <FontAwesomeIcon icon={faLinkedin} />
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Footer Text */}
//       <div className="flex justify-center gap-4 font-stretch-50% text-sm pb-6">
//         <span>&copy; {new Date().getFullYear()} Sujal Prajapati.</span>
//         <span className="ml-4">All rights Reserved</span>
//       </div>
//     </div>
//   );
// };


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export const Footer = () => {
  return (
    <div className="bg-gradient-to-br from-black via-cyan-900 to-black text-white">
      <div className="px-8 md:px-16 py-8">
        <div className="mb-6">
          <h1 className="flex justify-between items-center text-xl font-bold font-mono text-white mb-4"><span>Sujal</span>    <span>+91 7874547055 </span>       

          </h1>

          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-base space-y-6 md:space-y-0">
            <p className="max-w-3xl text-center text-lg md:text-left leading-relaxed">
              I like building new things and creating impressive designs and develop them into code.
              I’ve worked on many projects as a developer using modern technologies.
            </p>
            
                 <div className="flex gap-6 text-3xl">
              <a
                href="mailto:sujalp128@gmail.com"
                // href="https://mail.google.com/mail/?view=cm&fs=1&to=sujalp128@gmail.com"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
              >
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
              <a
                href="https://github.com/SujalP17?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                href="https://www.linkedin.com/in/sujalp128/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
            
    </div>

               </div>
      </div>
            <div className="text-center text-sm text-gray-500 py-6 border-t border-gray-800 bg-black">
        &copy; {new Date().getFullYear()} Sujal Prajapati. All rights reserved.
      </div>
    </div>
 

  );
};


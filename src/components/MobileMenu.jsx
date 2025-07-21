// import { useEffect } from "react";

// export const MobileMenu = ({ menuOpen, setMenuOpen}) => {
//     return (
//         <div className={`fixed top-0 left-0 w-full bg-[rgba(10, 10, 10, 0.8)] z-40 flex flex-col items-center justify-center transition-all duration-300 ease-in-out 
//         ${menuOpen ? "h-screen opacity-100 pointer-events-auto" : "h-0 opacity-0 pointer-events-none"} 
//         `}>
//             <button onClick={()=> setMenuOpen(false)}
//             className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer"
//             aria-label="Close menu">
//                 &times;
//             </button>
//         </div>
//     );
// }

// export default MobileMenu


// import { useEffect } from "react";

// export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
//   return (
//     <div
//       className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-center justify-center
//                      transition-all duration-300 ease-in-out

//                      ${
//                        menuOpen
//                          ? "h-screen opacity-100 pointer-events-auto"
//                          : "h-0 opacity-0 pointer-events-none"
//                      }
//                    `}
//     >
//       <button
//         onClick={() => setMenuOpen(false)}
//         className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer"
//         aria-label="Close Menu"
//       >
//         &times;
//       </button>

//       <a
//         href="#home"
//         onClick={() => setMenuOpen(false)}
//         className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
//                     ${
//                       menuOpen
//                         ? "opacity-100 translate-y-0"
//                         : "opacity-0 translate-y-5"
//                     }        
//             `}
//       >
//         Home
//       </a>
//       <a
//         href="#about"
//         onClick={() => setMenuOpen(false)}
//         className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
//             ${
//               menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
//             }        
//     `}
//       >
//         About
//       </a>
//       <a
//         href="#projects"
//         onClick={() => setMenuOpen(false)}
//         className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
//             ${
//               menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
//             }        
//     `}
//       >
//         Projects
//       </a>
//       <a
//         href="#contact"
//         onClick={() => setMenuOpen(false)}
//         className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
//             ${
//               menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
//             }        
//     `}
//       >
//         Contact
//       </a>
//     </div>
//   );
// };



// import { useEffect } from "react";

// export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
//   // Close menu when clicking outside the menu links
//   const handleOverlayClick = (e) => {
//     if (e.target === e.currentTarget) {
//       setMenuOpen(false);
//     }
//   };

//   // Prevent body scrolling when menu is open
//   useEffect(() => {
//     if (menuOpen) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "auto";
//     }
//     return () => {
//       document.body.style.overflow = "auto";
//     };
//   }, [menuOpen]);

//   return (
//     <div
//       className={`fixed inset-0 w-full h-full bg-[rgba(10,10,10,0.8)] backdrop-blur-sm z-40 flex flex-col items-center justify-center transition-all duration-300 ease-in-out
//         ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
//       onClick={handleOverlayClick}
//     >
//       <style>
//         {`
//           /* Ensure the menu covers the entire viewport, including safe areas */
//           .mobile-menu-container {
//             padding: env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left);
//           }

//           /* Smooth transitions for menu items */
//           .menu-item {
//             will-change: opacity, transform;
//           }

//           /* Ensure touch-friendly sizes */
//           .menu-item a,
//           .close-button {
//             min-height: 44px;
//             min-width: 44px;
//             display: flex;
//             align-items: center;
//             justify-content: center;
//           }

//           /* Responsive font sizes */
//           @media (max-width: 640px) {
//             .menu-item a {
//               font-size: clamp(1.25rem, 5vw, 1.5rem);
//             }
//             .close-button {
//               font-size: clamp(1.5rem, 6vw, 2rem);
//               top: clamp(1rem, 3vw, 1.5rem);
//               right: clamp(1rem, 3vw, 1.5rem);
//             }
//           }

//           /* Ensure the menu is scrollable if content overflows */
//           .mobile-menu-container {
//             overflow-y: auto;
//             -webkit-overflow-scrolling: touch; /* Smooth scrolling on iOS */
//           }
//         `}
//       </style>

//       <div className="mobile-menu-container w-full h-full flex flex-col items-center justify-center">
//         <button
//           onClick={() => setMenuOpen(false)}
//           className="close-button absolute top-6 right-6 text-white focus:outline-none cursor-pointer"
//           aria-label="Close Menu"
//         >
//           ×
//         </button>

//         <div className="menu-item">
//           <a
//             href="#home"
//             onClick={() => setMenuOpen(false)}
//             className={`text-white font-semibold my-4 transform transition-all duration-300
//               ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
//           >
//             Home
//           </a>
//         </div>
//         <div className="menu-item">
//           <a
//             href="#about"
//             onClick={() => setMenuOpen(false)}
//             className={`text-white font-semibold my-4 transform transition-all duration-300
//               ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
//           >
//             About
//           </a>
//         </div>
//         <div className="menu-item">
//           <a
//             href="#projects"
//             onClick={() => setMenuOpen(false)}
//             className={`text-white font-semibold my-4 transform transition-all duration-300
//               ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
//           >
//             Projects
//           </a>
//         </div>
//         <div className="menu-item">
//           <a
//             href="#contact"
//             onClick={() => setMenuOpen(false)}
//             className={`text-white font-semibold my-4 transform transition-all duration-300
//               ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
//           >
//             Contact
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };




import { useEffect } from "react";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  // Close menu on overlay click
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setMenuOpen(false);
    }
  };

  // Prevent scroll on open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  return (
    <div
      onClick={handleOverlayClick}
      className={`fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center transition-opacity duration-300
        ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
    >
      <div className="relative w-full max-w-md mx-auto p-6 flex flex-col items-center overflow-y-auto h-full">
        {/* Close Button */}
        <button
          onClick={() => setMenuOpen(false)}
          aria-label="Close Menu"
          className="absolute top-4 right-4 text-white text-4xl focus:outline-none"
        >
          &times;
        </button>

        {/* Menu Links */}
        {["Home", "About", "Projects", "Contact"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            onClick={() => setMenuOpen(false)}
            className="text-white font-semibold text-xl sm:text-2xl md:text-3xl my-4 transition-transform transform hover:scale-105"
          >
            {item}
          </a>
        ))}
      </div>
    </div>
  );
};

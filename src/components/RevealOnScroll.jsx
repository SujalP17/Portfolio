// import { useEffect, useRef } from "react";


// export const RevealOnScroll = ({children}) =>{
//     const ref = useRef(null);

//     useEffect(()=>{
//         const observer = new IntersectionObserver(([entry])=>{
//             if (entry.isIntersecting) {
//                 ref.current.classList.add("visible");
//             }
//         }, {threshold: 0.2, rootMargin: "0px 0px -50px 0px"});

//         if(ref.current) observer.observe(ref.current);

//         return()=> observer.disconnect();
//     })
//     return(
//     <div ref={ref} className="reveal">
//         {children}
//     </div>
//     );
// }

import { useEffect, useRef } from "react";

export const RevealOnScroll = ({ children }) => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ref.current.classList.add("visible");
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -50px 0px" }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  });

  return (
    <div ref={ref} className="reveal">
      {children}
    </div>
  );
};




// import { useEffect, useRef, useState } from "react";

// export const RevealOnScroll = ({ children }) => {
//   const ref = useRef(null);
//   const [prevY, setPrevY] = useState(0);

//   useEffect(() => {
//     const element = ref.current;

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           const currentY = entry.boundingClientRect.y;
//           const direction = currentY < prevY ? "down" : "up";

//           if (direction === "down") {
//             element.classList.add("slide-in-left");
//           } else {
//             element.classList.add("slide-in-right");
//           }

//           setPrevY(currentY);
//         }
//       },
//       {
//         threshold: 0.5,
//         rootMargin: "0px 0px -50px 0px",
//       }
//     );

//     if (element) observer.observe(element);

//     return () => {
//       if (element) observer.unobserve(element);
//     };
//   }, [prevY]);

//   return (
//     <div ref={ref} className="opacity-0 transform transition-all duration-1000">
//       {children}
//     </div>
//   );
// };

// // Custom cursor that follows mouse with a mint green dot and grows on hover
// import { useEffect, useRef, useState } from 'react';

// export default function CustomCursor() {
//   const cursorRef = useRef(null);
//   const [isHovering, setIsHovering] = useState(false);
//   const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       // Smooth following with a slight lag
//       setMousePos({ x: e.clientX, y: e.clientY });
//     };

//     const handleMouseOver = (e) => {
//       if (
//         e.target.tagName === 'BUTTON' ||
//         e.target.tagName === 'A' ||
//         e.target.closest('button') ||
//         e.target.closest('a') ||
//         e.target.classList.contains('hoverable')
//       ) {
//         setIsHovering(true);
//       }
//     };

//     const handleMouseOut = () => {
//       setIsHovering(false);
//     };

//     document.addEventListener('mousemove', handleMouseMove);
//     document.addEventListener('mouseover', handleMouseOver);
//     document.addEventListener('mouseout', handleMouseOut);

//     return () => {
//       document.removeEventListener('mousemove', handleMouseMove);
//       document.removeEventListener('mouseover', handleMouseOver);
//       document.removeEventListener('mouseout', handleMouseOut);
//     };
//   }, []);

//   return (
//     <div
//       ref={cursorRef}
//       className={`custom-cursor ${isHovering ? 'active' : ''}`}
//       style={{
//         left: `${mousePos.x}px`,
//         top: `${mousePos.y}px`,
//         transform: 'translate(-50%, -50%)',
//       }}
//     />
//   );
// }

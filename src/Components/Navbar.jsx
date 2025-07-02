import React, { useState } from 'react'
import { assets, menuLinks } from '../assets/assets'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const location=useLocation()
  const [open,setOpen]=useState(false);
  return (
    <div className={`flex items-center justify-between px-6 md:px-6 lg:px-24 xl:px:32 py-4 text-gray-600 border-b border-borderColor relative transition-all ${location.pathname==="/"&&"bg-light"}`}>
        <Link to="/">
  <img src={assets.logo}alt="logo" className='h-8'/>  
</Link>
<div className={`max-sm:fixed max-sm:h-screen max-sm:w-full max-sm:top-16 max-sm:border-t border-borderColor right-0 flex flex-col sm:flex-row items-start sm:items-center gap-4  sm:gap-8 max-sm:p-4 transition-all duration-300 z-50 ${location.pathname==="/"?"bg-light":"bg-white"}${open ? "max-sm:translate-x-0":"max-sm:translate-x-full"}`}> 
   {menuLinks.map((link, index) => (
  <Link key={index} to={link.path}>
    {link.name}
  </Link>
))}

  

</div>
  
    </div>

  )
}

export default Navbar
// import React, { useState } from 'react';
// import { assets, menuLinks } from '../assets/assets';
// import { Link, useLocation } from 'react-router-dom';

// const Navbar = () => {
//   const location = useLocation();
//   const [open, setOpen] = useState(false);

//   return (
//     <div
//       className={`flex items-center justify-between w-full px-6 py-4 border-b border-borderColor relative ${
//         location.pathname === '/' ? 'bg-light' : 'bg-white'
//       }`}
//     >
//       {/* Logo */}
//       <Link to="/">
//         <img src={assets.logo} alt="logo" className="h-8" />
//       </Link>

//       {/* Desktop Links (Hidden on Mobile) */}
//       <div className="hidden sm:flex gap-8 items-center">
//         {menuLinks.map((link, index) => (
//           <Link
//             key={index}
//             to={link.path}
//             className="text-base hover:text-black transition-colors"
//           >
//             {link.name}
//           </Link>
//         ))}
//       </div>

//       {/* Hamburger Icon (Visible on Mobile Only) */}
//       <button
//         className="sm:hidden text-2xl"
//         onClick={() => setOpen(!open)}
//         aria-label="Toggle menu"
//       >
//         ☰
//       </button>

//       {/* Mobile Menu (Visible only when toggled) */}
//       {open && (
//         <div className="absolute top-full left-0 w-full bg-white shadow-md p-4 sm:hidden z-50">
//           <div className="flex flex-col gap-4">
//             {menuLinks.map((link, index) => (
//               <Link
//                 key={index}
//                 to={link.path}
//                 className="text-base hover:text-black transition-colors"
//                 onClick={() => setOpen(false)} // Close menu when clicked
//               >
//                 {link.name}
//               </Link>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Navbar;

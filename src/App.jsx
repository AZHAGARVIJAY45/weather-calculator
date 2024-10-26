import { useState } from 'react'
// import { FaSearch } from "react-icons/fa";
// import { MdOutlineWbSunny } from "react-icons/md";
// import './App.css'



// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div className="container">
//         <div className="subcontainer">
//          <div className="inputcontainer">
//           <div>
//             <weatherdetials/>
//           </div>
//           <input type="text" placeholder='Enter the city' className='input'/>
//              <FaSearch className='searchicon'/>
//          </div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default App

import React from 'react'
import Weather from './componenets/Weather'
import './index.css'
const App = () => {
  return (
    <div>
      <Weather/> 
    </div>
  )
}

export default App
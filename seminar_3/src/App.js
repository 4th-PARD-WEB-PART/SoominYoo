import './App.css';
import { Routes, Route } from 'react-router-dom';
import MyInfo from './Pages/MyInfo';
import React from 'react';
import UpdateInfo from './Pages/UpdateInfo';
import MyComponent from './Pages/MyComponent';

function App(){
  return (
    <Routes>
      <Route path="/" element={<MyComponent />} />
      {/* <Route path="/update" element={<UpdateInfo/>} /> */}
    </Routes>
  )
}

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() =>{
//     if(!isLoggedIn){
//       alert("로그인이 필요합니다.");
//       navigate("/login");
//     }
//   }, []);

//   return (
//     <Routes>
//       <Route element={<Layout/>}>
//         <Route path='/' element={<Myinfo/>}/>
//         <Route path='/about' element={<About/>}/>
//         <Route path='/profiles/:username' element = {<Profile/>}/>
//         <Route path='/articles' element={<Articles/>}>
//           <Route path=':id' element={<Article/>}/>
//         </Route>
//         <Route
//           path="/mypage"
//           element={<MyPage isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} navigate={navigate}/>}
//         /> 
//       </Route>
//       <Route
//         path="/login"
//         element={<Login setIsLoggedIn={setIsLoggedIn} navigate={navigate} />}
//       /> 
//     </Routes>
//   );
// };
export default App;
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BuysMenu from "../components/BuysMenu";
import Empty from "../components/Empty";
import Footer from "../components/Footer"
import Menubar from "../components/Menubar"
import Navbar from "../components/Navbar"
import { Context } from "../context/Context";





const Home = () => {
const [cats, setCats] = useState([]);
const [noRes, setNoRes] = useState(false)
const {user} = useContext(Context)


useEffect(()=>{
  setNoRes(true)
  const getCats = async()=>{
  const res = await axios.get('/categories');
   setCats(res.data)
  setNoRes(false)
  }
  getCats()
},[])

  return (
    
   <>
   <Navbar/>
   <Menubar />
  {user && <BuysMenu/>}
    <div className="scroll-smooth w-[100%] h-[100%] mb-10">
    <div className="w-[100%] h-[100%] flex flex-col justify-center items-center ">
    <div className="rubik text-[100px] sm:mt-10 sm:text-[70px]  text-center font-[900] text-[#ffa600]">WHO DEY!!</div>
    <div className="relative w-[100%] p-20 h-[100%] text-center flex justify-center items-center">
       <div className="absolute  text-[40px]  sm:text-2xl md:text-2xl font-[600] rubik m-10 text-[#2c2c2c] z-10  showI">Order your delicacies and chops for any occassion</div>
       <div className="absolute  text-[40px] sm:text-2xl  md:text-2xl  font-[600] rubik m-10 text-[#2c2c2c] z-10 showII">Omo! I am hungry, dont know what's up</div>
       <div className="absolute  text-[40px] sm:text-2xl  md:text-2xl font-[600] rubik m-10 text-[#2c2c2c] z-10 showIII">Publicise my delicacy and small chops as a pro chef</div>
       <div className="absolute  text-[40px] sm:text-2xl  md:text-2xl font-[600] rubik m-10 text-[#2c2c2c] z-10 showIV">Let's reach out </div>
       </div>
    <a href="#cat" className="bg-gradient-to-r  opacity-[.7] from-[#ad0101] to-[#ff0000] via-[#dd0505] roboto text-white text-[900] rounded-[30px] hover:animate-bounce hover:opacity-[0.41] text-lg round-md flex justify-between items-center p-5 ">Choose Categories</a>
  </div>
  {!noRes ? <div id="cat" className=" w-[100%] scroll-smooth mt-10 h-[100%] flex flex-wrap justify-center items-center ">
  {cats.map(c=>(
      <Link to={`/items/?cat=${c.name}`} key={c._id} className='group  w-[350px] relative h-[350px]  flex justify-center items-center'>
        <img className="w-[350px] h-[350px] object-cover" src={c.img} alt="pics" />
        <div className="w-[350px] group-hover:animate-pulse z-2 h-[350px] bg-[#000000a9] absolute"></div>
        <p className="roboto absolute text-white text-2xl text-[900] ">{c.name}</p>
     </Link>
   ))} 
     <Link to={`/items`} className="w-[350px] hover:animate-pulse  h-[350px] bg-contain bg-[#0000006a] bg-blend-darken flex justify-around items-center bg-center   bg-no-repeat ">
        <p className="roboto text-white text-2xl text-[900] ">More..</p>
     </Link>
     
     
  </div> : <Empty/>}
  </div>
  <Footer/>
    </>
  )
}

export default Home
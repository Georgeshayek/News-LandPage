import './App.css'

import Cars from './components/Carsol';
import axios from 'axios';
import Categories from './components/Categories';
import { useEffect,useState,useContext } from 'react';
import AboveFooter from './components/AboveFooter';
import Footer from './components/Footer';
import Popup from './components/popup';
import ContextItem from "./context/contextitem";

const imageData = [
  {
    title: "Image 1",
    description: "Discover our new website.",
    alt: "image1",
    url:
      "https://images.unsplash.com/photo-1617854818583-09e7f077a156?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    title: "Image 2",
    description: "Lorem EPSUM doplem",
    alt: "image2",
    url:
      "https://images.unsplash.com/photo-1692380827087-eacf69856b1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
  },
  {
    title: "Image 3",
    description: "Discover our amazing products and services.",
    alt: "image3",
    url: "https://images.unsplash.com/photo-1692287253881-777d83014e30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80"
  },
  {
    title: "Image 4",
    description: "Discover our amazing products .",
    alt: "image4",
    url:
      "https://images.unsplash.com/photo-1546422904-90eab23c3d7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80"
  }
];
function App() {
  const img=`${process.env.PUBLIC_URL}/babel.png`;
  const ctx=useContext(ContextItem);
  const [show,setShow]=useState(false);
  const [categories,setCategories]=useState([])
  const [loading,setLoading]=useState(true)
  useEffect(() => {
    const fetchData = async () => {
      console.log('Making API request...');
try {
  const response = await axios.get('http://localhost:8000/api/categories/top-visited?period=last-24-hours');
  console.log('API response:', response.data);
  setCategories(response.data);
  setLoading(false)
} catch (error) {
  console.error('Error fetching data:', error);
}

    };

    fetchData();
    
  }, []);
  const ShowHandler=()=>{
    setShow(prev => !prev)
  }


  
    const handleLogout = async () => {
      try {
        await axios.post('http://localhost:8000/api/auth/logout', null, {
          headers: {
            Authorization: `Bearer ${ctx.token}`, 
          },
        });
  
        ctx.tokenToggler(''); 
        ctx.loggedinToggler();
      } catch (error) {
        
        console.error('An error occurred', error);
      }
    };
    console.log(ctx.token)
  return (
    
    <div className="container">
    <div className="content">
      <div className="babel">
        <img src={img} alt="babel" width="200px" height="200px"/>
        </div>
      {ctx.Loggedin&& <button className={"button"} onClick={handleLogout} >Logout</button>}
      {!ctx.Loggedin&& <button className={"button"} onClick={ShowHandler} >Signin</button>}
      {!ctx.Loggedin&&show&& <Popup dismiss={ShowHandler}/>}
      <Cars imageData={imageData} /> 
      {loading && <p>loading...</p>} 
      {!loading && <Categories data={categories} />}
      
      <AboveFooter/>
      <Footer/>
      </div>
      </div>
  );
}
export default App;

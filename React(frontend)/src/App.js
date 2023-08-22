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
      "https://lh5.googleusercontent.com/xo6zDzj4Mq8JTuh31DRdzWPkmeekU1ykdvy7gmdGNkBnVzHoULgCA_MpL1ybOV2GKEkbvmswUl0iQW0lvnNQe3gqOFi_-bbt3MBzOAla29FvVN753jPZS87Bn7HyXoQ-dwA-ioYg"
  },
  {
    title: "Image 2",
    description: "Lorem EPSUM doplem",
    alt: "image2",
    url:
      "https://cdn.thomasnet.com/insights-images/eaf2ea91-c0ca-488d-ab63-af480b6f78cb/750px.png"
  },
  {
    title: "Image 3",
    description: "Discover our amazing products and services.",
    alt: "image3",
    url: "https://moneyinc.com/wp-content/uploads/2018/11/Willow-750x500.jpg"
  },
  {
    title: "Image 4",
    description: "Discover our amazing products .",
    alt: "image4",
    url:
      "https://japan.stripes.com/sites/default/files/styles/community_site_carousel_750x500/public/article-images/main_13.jpg?itok=_GELFbpY"
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

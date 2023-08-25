import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useState } from "react";

import classes from "./Cars.module.css"
import Button from "./UI/Button";

const Cars=(props)=>{
    const [currentIndex, setCurrentIndex] = useState();
    function handleChange(index) {
      setCurrentIndex(index);
    }
    const renderSlides = props.imageData.map((image, index) => (
      <div key={index}>
        <img src={image.url} alt={image.alt} />
        <div className={classes.slideContent}>
          <h3>{image.title}</h3>
          <p>{image.description}</p>
          <Button >Learn More</Button>
        </div>
      </div>
    ));
    
      return(
        <div className={classes.container}>
      <div className={classes.navbar}>
        <ul className={classes.navList}>
          <li className={classes.navItem}>Home</li>
          <li className={classes.navItem}>News</li>
          <li className={classes.navItem}>Economy</li>
          <li className={classes.navItem}>Culture</li>
          <li className={classes.navItem}>Sports</li>
          <li className={classes.navItem}>Images</li>
        </ul>
      </div>
      <div className={classes.carouselContainer}>
        <Carousel
        showArrows={false}
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        showIndicators={true}  
        selectedItem={props.imageData[currentIndex]}
        onChange={handleChange}
        className={classes["carousel-container"]}
      >
        {renderSlides}
      </Carousel>
      </div>
    </div>
      )

}
export default Cars;
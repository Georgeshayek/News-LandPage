import classes from "./Category.module.css"
import Button from "./UI/Button";
const Category=(props)=>{
    
    return(
        <div className={classes.card} onClick={props.onClick}>
      <div class={classes["card__image"]}>
        <img src={props.img} alt="image1"/>
      </div>
      <div class={classes["card__content"]}>
        <div class={classes["card__title"]}>{props.name}</div>
        <Button className={classes.BtnColor} onClick={props.onClick} >Read more</Button>
      </div>
    </div>
    )
}
export default Category;
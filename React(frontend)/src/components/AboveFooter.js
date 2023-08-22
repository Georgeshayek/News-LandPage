import ShowMoreParagraph from "./ShowMoreParagraph";
import classes from "./AboveFooter.module.css";
const text = `Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  Ut enim ad minim vniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
`;
const AboveFooter=()=>{
    return (
        <div className={classes.container}>        
            <div className={classes.firstContainer}>
                <h3>Most Read</h3>
                <ShowMoreParagraph title="Title 1" text={text} />
                <ShowMoreParagraph title="Title 2" text={text} />
                <ShowMoreParagraph title="Title 3" text={text} />
            </div>
            <div className={classes.secondContainer}>

            <img src={`${process.env.PUBLIC_URL}/carousel2.jpg`} alt="my_image" className={classes["centered-image"]} />
            </div>
        </div>
)
}
export default AboveFooter;
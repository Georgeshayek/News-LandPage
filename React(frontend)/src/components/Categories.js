import classes from "./Categories.module.css"
import Category from "./Category";
import axios from 'axios';
const images=[{
    id:1,
    url:"https://images.unsplash.com/photo-1495020689067-958852a7765e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80"
},
{id:2,
url:"https://images.unsplash.com/photo-1502613374390-8da7aa532177?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=872&q=80"}
,{id:3,
    url:"https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
},
{id:4,
    url:"https://images.unsplash.com/photo-1614028674026-a65e31bfd27c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
},
{id:5,
    url:"https://images.unsplash.com/photo-1519181245277-cffeb31da2e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
}
]
const Categories=(props)=>{
    const onClickHandler = async (id) => {
        try {
          await axios.post(`http://localhost:8000/api/categories/${id}/add-counter`);
          console.log(`Category with ID ${id} counter incremented.`);
        } catch (error) {
          console.error('Error incrementing counter:', error);
        }
      };
    const [first, ...other] = props.data && props.data['top_categories'] ? props.data['top_categories'] : [];
    
    return(
        <div className={classes.container}>
            <div className={classes.firstContainer}>
            <ul className={classes.cards}>
                {other.map(mov=>(
                    <li className={classes["cards__item"]}>
                        <Category key={mov.id} name={mov.name} img={images[mov.id-1].url} onClick={onClickHandler.bind(null, mov.id)} />
                    </li>
                ))}

            </ul>
            </div>
            <div className={classes.secondContainer}>
            <Category key={first.id} name={first.name} img={images[first.id-1].url} onClick={onClickHandler.bind(null, first.id)}/>
            </div>
        </div>
    )

}
export default Categories
import classes from './HeaderImage.module.css'
import mealsImage from "../../assets/meals.jpg";

const HeaderImage = props => {
    return (
        <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A table food of delicious food." />
      </div>
    )
}

export default HeaderImage
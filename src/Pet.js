/* eslint-disable import/named */
/* eslint-disable import/namespace */
import { Link } from "react-router-dom";

const Pet = (props) => {
    const { name, animal, breed, location, images, id } = props;

    let hero = images[0];

    return (
        <Link to={`/details/${id}`} className="pet">
            <div className="image-container">
                <img src={hero} alt="animal" />
            </div>
            <div className="info">
                <h2>{name}</h2>
                <h3>{animal} - {breed} - {location}</h3>
            </div>
        </Link>

    )
}

export default Pet;

// "http://pets-images.dev-apis.com/pets/none.jpg"
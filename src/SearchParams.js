import { useEffect, useState, useContext } from "react";
import useBreedList from "./useBreedList";
import Results from "./Results";
import ThemeContext from "./ThemeContext";

const ANIMALS = ["bird", "dog", "cat", "rabbit", "reptile"];

const SearchParams = () => {
    const [location, updateLocation] = useState("");
    const [animal, setAnimal] = useState("");
    const [breed, setBreed] = useState("");
    const [breeds] = useBreedList(animal);
    const [pets, setPets] = useState([]);
    const [theme, setTheme] = useContext(ThemeContext);

    useEffect(() => {
        requestPets();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    async function requestPets() {
        const res = await fetch(
            `https://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
        );
        const json = await res.json();

        setPets(json.pets);
    }
    return (
        <div className="search-params">
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    requestPets();
                }
                }>
                <label htmlFor="location">
                    Location

                    <input
                        id="location"
                        type="text"
                        value={location}
                        onChange={(e) => updateLocation(e.target.value)}
                    />

                </label>
                <label htmlFor="animal">
                    Animal

                    <select
                        key="animal"
                        value={animal}
                        onChange={e => {
                            setBreed("");
                            setAnimal(e.target.value)
                        }}
                        onBlur={e => setAnimal(e.target.value)}
                    >
                        <option />
                        {
                            ANIMALS.map((animal) => (
                                <option value={animal} key={animal}>{animal}</option>

                            ))
                        }
                    </select>
                </label>
                <label htmlFor="breed">
                    Breed

                    <select
                        disabled={!breeds.length}
                        key="breed"
                        value={breed}
                        onChange={e => setBreed(e.target.value)}
                        onBlur={e => setBreed(e.target.value)}
                    >
                        <option />
                        {
                            breeds.map((breed) => (
                                <option value={breed} key={breed}>{breed}</option>

                            ))
                        }
                    </select>
                </label>
                <label htmlFor="theme">
                    Theme

                    <select
                        value={theme}
                        onChange={e => setTheme(e.target.value)}
                        onBlur={e => setTheme(e.target.value)}
                    >
                        <option />
                        <option value="darkblue">darkblue</option>
                        <option value="peru">peru</option>
                        <option value="chartreuse">chartreuse</option>
                        <option value="mediumorchid">mediumorchid</option>
                    </select>
                </label>
                <button style={{ backgroundColor: theme }}>Submit</button>
            </form>
            <Results pets={pets} />

        </div>
    )
}

export default SearchParams;
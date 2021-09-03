import Pet from "./Pet"

const Results = (props) => {
    const { pets } = props;
    return (
        <div className="search">
            {
                !pets.length ? (
                    <h2>No pets found</h2>
                ) : (
                    pets.map((pet) => (
                        <Pet
                            name={pet.name}
                            animal={pet.animal}
                            breed={pet.breed}
                            location={`${pet.city}, ${pet.state}`}
                            key={pet.id}
                            id={pet.id}
                            images={pet.images}
                        />
                    ))
                )
            }
        </div>
    )
}

export default Results;
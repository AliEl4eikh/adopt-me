import { Component } from "react";

class Carousel extends Component {
    state = {
        active: 0,
    };


    handleIndexClick = (e) => {
        this.setState({
            active: +e.target.dataset.index
        })
    }

    render() {
        const { active } = this.state;
        const { images } = this.props;
        return (
            <div className="carousel">
                <img src={images[active]} alt="animal" />
                <div className="carousel-smaller">
                    {images.map((photo, index) => (
                        // eslint-disable-next-line
                        <img
                            key={photo}
                            src={photo}
                            data-index={index}
                            className={index === active ? "active" : ""}
                            alt="animal thumbnail"
                            onClick={this.handleIndexClick}
                        />
                    ))}
                </div>
            </div>
        );
    }
}

export default Carousel;
/* eslint-disable import/named */
/* eslint-disable import/namespace */
import { Component } from "react";
import { withRouter } from "react-router";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
import ThemeContext from "./ThemeContext";
import Modal from "./Modal";

class Details extends Component {
    state = { loading: true, showModal: false };


    async componentDidMount() {
        const res = await fetch(
            `http://pets-v2.dev-apis.com/pets?id=${this.props.match.params.id}`
        );
        const json = await res.json();
        this.setState(Object.assign({ loading: false }, json.pets[0]));
    }

    toggleModal = () => { this.setState((prevState, props) => ({ showModal: !prevState.showModal })) }
    adopt = () => { window.location = "http://bit.ly/pet-adopt" }

    render() {
        if (this.state.loading) {
            return (
                <ThemeContext.Consumer>
                    {([theme]) => (
                        <div className="box" style={{ backgroundColor: theme }}>
                            <div className="container">
                                <span className="circle"></span>
                                <span className="circle"></span>
                                <span className="circle"></span>
                                <span className="circle"></span>
                            </div>
                        </div>
                    )}
                </ThemeContext.Consumer>
            )
        }

        const { animal, name, breed, description, images, city, state, showModal } = this.state;

        return (
            <div className="details">
                <Carousel images={images} />

                <h1>{name}</h1>
                <h2>{`${animal} - ${breed} - ${city}, ${state}`}</h2>
                <ThemeContext.Consumer>
                    {
                        ([theme]) => (
                            <button onClick={this.toggleModal} style={{ backgroundColor: theme }}>Adopt {name}</button>
                        )
                    }
                </ThemeContext.Consumer>
                <p>{description}</p>
                {
                    showModal ? (
                        <Modal>
                            <div>
                                <h1>Would you like to adopt {name}</h1>
                                <ThemeContext.Consumer>
                                    {
                                        ([theme]) => (
                                            <div className="buttons">
                                                <button style={{ backgroundColor: theme }} onClick={this.adopt}>Yes</button>
                                                <button style={{ backgroundColor: theme }} onClick={this.toggleModal}>NO</button>
                                            </div>
                                        )
                                    }
                                </ThemeContext.Consumer>
                            </div>
                        </Modal>
                    ) : ""
                }
            </div>
        )
    }
}

const DetailsWithRouter = withRouter(Details)

export default function DetailsErrorBoundary(props) {
    return (
        <ErrorBoundary>
            <DetailsWithRouter {...props} />
        </ErrorBoundary>
    )
};

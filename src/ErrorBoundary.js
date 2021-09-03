/* eslint-disable import/named */
/* eslint-disable import/namespace */
import { Component } from "react";
import { Link, Redirect } from "react-router-dom";


class ErrorBoundary extends Component {
    state = { hasError: false, redirect: false }

    static getDerivedStateFromError() {
        return { hasError: true }
    }

    componentDidCatch(error, info) {
        console.error("Error Boundary Caugth an error ", error, info);
        setTimeout(() => this.setState({ redirect: true }), 5000)
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to="/" />
        }
        if (this.state.hasError) {
            return <h2>There was a problem with this site <Link to="/">click here</Link> to go to the home page or wait 5 seconds to redirect to the home</h2>
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
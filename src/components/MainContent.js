import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom'


class MainContent extends Component {
    state = {
        addRecipeRedirect: false,
        removeRecipeRedirect: false
    }

    // this should be an action
    removeRecipe = () => {
        this.setState({
            removeRecipeRedirect: true
        })
    }

    //this should be an action
    addRecipe = () => {
        console.log(`addingRecipeAction`)
        this.setState({
            redirect: true
        })
    }

    render() {
        if (this.state.addRecipeRedirect) {
            return <Redirect push to="/add-recipe" />
        }
        if (this.state.removeRecipeRedirect) {
            return <Redirect push to="/remove-recipe"/>
        }
        return (
            <div className=" white">
                <div className="row remove-margin-on-row">
                    <i className=" col s2 offset-s2 large material-icons icon-extra-margin light-blue-text text-darken-4" onClick={this.addRecipe}>add_circle</i>
                    <i className="col s3  offset-s1 large material-icons icon-extra-margin light-blue-text text-darken-4" onClick={this.removeRecipe}>highlight_off</i>
                    <i className="col s4 large material-icons icon-extra-margin light-blue-text text-darken-4">restaurant_menu</i>
                </div>
            </div>
        );
    }
}

export default MainContent;

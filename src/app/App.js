import React, { Component } from 'react'
// import RecipeListComponent from "./RecipeList/RecipeListComponent"
import RecipeListContainer from './RecipeList/RecipeListContainer'
import RecipeViewerContainer from "./RecipeViewer/RecipeViewerContainer"


class App extends Component {

    constructor(props) {
        super (props);
    }
    
    render() {
        return (
            <div className="container">
                <RecipeListContainer />
               <RecipeViewerContainer />
            </div>
        )

    }

}

export default App
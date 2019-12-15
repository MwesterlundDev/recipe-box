import React, { Component } from 'react'
import RecipeList from "./RecipeList"
import Viewer from "./Viewer"


class App extends Component {

    state = {
        recipes: [
            {
                id: 1,
                title: "10 Minute Thai Basil Chicken",
                description: "This Thai basil chicken recipe takes just 3 minutes to prepare and 7 minutes to cook. Served along with steamed rice, it's restaurant food, fast.",
                ingridients: [
                    {
                        size: "1 Whole",
                        ingrident: "Chicken"
                    },
                    {
                        size: "1 cup",
                        ingrident: "Thai Basil"
                    }
                ],
                steps: [
                    "In a wok over high heat, add the oil, chilies, shallots and garlic, and fry for 1-2 minutes. Add the ground chicken and stir-fry for 2 minutes, breaking up the chicken into small bits.",
                    "Add the sugar, soy sauce, and fish sauce. Stir-fry for another minute and deglaze the pan with the broth. Because your pan is over high heat, the liquid should cook off very quickly.",
                    "Add the basil, and stir-fry until wilted. Serve over rice."
                ]
            },
            {
                id: 2,
                title: "Test 1",
                description: "This is test 2",
                ingridients: [
                    {
                        size: "1 Whole",
                        ingrident: "Chicken"
                    },
                    {
                        size: "1 cup",
                        ingrident: "Thai Basil"
                    }
                ],
                steps: [
                    "Step 1",
                    "Step 2",
                    "Step 3",
                    "Step 4",
                ]
            },
            {
                id: 3,
                title: "Test 3",
                description: "This is test 3",
                ingridients: [
                    {
                        size: "1 Whole",
                        ingrident: "Chicken"
                    },
                    {
                        size: "1 cup",
                        ingrident: "Thai Basil"
                    },
                    {
                        size: "1 clove",
                        ingrident: "Thing 1"
                    },
                    {
                        size: "1 teaspoon",
                        ingrident: "Awesome Sauce"
                    }
                ],
                steps: [
                    "Step 1",
                    "Step 2",
                    "Step 3",
                    "Step 4",
                    "Step 5",
                    "Step 6",
                ]
            }
        ],
        selectedRecipe: null,
    }

    handleSelect = recipe => {

        console.log("recipe selected: ", recipe)
        let { selectedRecipe } = this.state

        if (selectedRecipe && selectedRecipe.id && selectedRecipe.id === recipe.id) {

            selectedRecipe = null;
            this.setState({selectedRecipe})
        } else {
            selectedRecipe = recipe
            this.setState({selectedRecipe})
        }

    }

    render() {
        const { recipes, selectedRecipe } = this.state // the { property } gets the thing with that property
        return (
            <div className="container">
                <RecipeList recipes={recipes} selectedRecipe={selectedRecipe} handleSelect={this.handleSelect}/>
                <Viewer selectedRecipe={selectedRecipe}/>
            </div>
        )

    }

}

export default App
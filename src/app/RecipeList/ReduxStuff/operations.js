import Creators from './actions';
import demo from './demoData'

const addNewRecipe = Creators.addNewRecipe;
const deleteRecipe = Creators.deleteRecipe;
const selectRecipe = Creators.selectRecipe;
const requestRecipes = Creators.requestRecipes;
const receivedRecipes = Creators.receivedRecipes;


// this is a fake out of a async call for the future... will load the recipies instead of fake data... 
const fetchRecipes = () => {

    return function(dispatch) {
    console.log("REQUESTING RECIPIES")
        dispatch(requestRecipes());

        setTimeout(function() {
            let recipes = demo;
            console.log("RECEIVED RECIPES")
            dispatch(receivedRecipes(recipes))
        }, 500);
    }
}

export default {
    addNewRecipe,
    deleteRecipe,
    selectRecipe,
    fetchRecipes
}
import types from './types'

const addNewRecipe = (recipe) => {
    return {
        type: types.ADD_NEW_RECIPE,
        recipe: recipe
    }
}

const updateRecipe = (recipe) => {
    return {
        type: types.UPDATE_RECIPE,
        recipe: recipe
    }
}

const deleteRecipe = (id) => {
    return {
        type: types.DELETE_RECIPE,
        id: id
    }
}

const selectRecipe = (id) => {
    return {
        type: types.SELECT_RECIPE,
        id: id
    }
}

const requestRecipes = () => {
    return { type: types.REQUEST_RECIPES }
}

const receivedRecipes = (recipes) => {
    return {
        type: types.RECEIVE_RECIPES,
        recipes: recipes
    }
}


export default {
    addNewRecipe,
    deleteRecipe,
    selectRecipe,
    requestRecipes,
    receivedRecipes,
    updateRecipe
}
import types from './types'

const recipeSelected = (recipe) => {
    return {
        type: types.RECIPE_SELECTED,
        recipe: recipe
    }
}

const createNewRecipe = () => {
    return {
        type: types.CREATE_NEW_RECIPE
    }
}

const cancelEdit = () => {
    return {
        type: types.CANCEL_EDIT,
    }
}

export default {
    recipeSelected,
    createNewRecipe,
    cancelEdit
}
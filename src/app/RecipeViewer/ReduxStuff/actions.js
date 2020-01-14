import types from './types'

const recipeSelected = (recipe) => {
    return {
        type: types.RECIPE_SELECTED,
        recipe: recipe
    }
}

export default {
    recipeSelected
}
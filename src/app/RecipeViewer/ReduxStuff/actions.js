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

const recipeDeleted = (id) => {
    return {
        type: types.RECIPE_DELETED,
        id: id
    }
}

export default {
    recipeSelected,
    createNewRecipe,
    cancelEdit,
    recipeDeleted
}
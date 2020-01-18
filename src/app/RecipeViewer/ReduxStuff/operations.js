import Creators from './actions';

const recipeSelected = Creators.recipeSelected;
const createNewRecipe = Creators.createNewRecipe;
const cancelEdit = Creators.cancelEdit
const recipeDeleted = Creators.recipeDeleted

export default {
    recipeSelected,
    createNewRecipe,
    cancelEdit,
    recipeDeleted
}
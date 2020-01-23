import Creators from './actions';

const recipeSelected = Creators.recipeSelected;
const createNewRecipe = Creators.createNewRecipe;
const cancelEdit = Creators.cancelEdit;
const recipeDeleted = Creators.recipeDeleted;
const editRecipe = Creators.editRecipe;
const recipeUpdated = Creators.recipeUpdated;

export default {
    recipeSelected,
    createNewRecipe,
    cancelEdit,
    recipeDeleted,
    editRecipe,
    recipeUpdated
}
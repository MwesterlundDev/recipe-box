import { combineReducers } from 'redux';
import recipeListReducer from './app/RecipeList/ReduxStuff/reducers';

const rootReducer = combineReducers({
    recipeListReducer
})

export default rootReducer;
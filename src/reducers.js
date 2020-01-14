import { combineReducers } from 'redux';
import recipeListReducer from './app/RecipeList/ReduxStuff/reducers';
import recipeViewerReducer from './app/RecipeViewer/ReduxStuff/reducers';

const rootReducer = combineReducers({
    recipeListReducer,
    recipeViewerReducer,
})

export default rootReducer;
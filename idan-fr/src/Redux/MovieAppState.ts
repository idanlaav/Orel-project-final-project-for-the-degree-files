//This is MovieAppState.ts file
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MovieModel } from '../Models/Movie';

//This is the Contract
interface MoviesState{
    movies:MovieModel[];
}

// Initial Application State
const initialState: MoviesState = {
    movies: [],
};

//These are all possible actions
export enum ActionType {
    GOT_ALL_MOVIES = "GOT_ALL_MOVIES"
  }
 //This is moviesSlice
const moviesSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
      gotAllMoviesAction(state, action: PayloadAction<MovieModel[]>) {
        state.movies = action.payload;
      },
        },
  });
 //This is the exported tasks
export const {
    gotAllMoviesAction,
    } = moviesSlice.actions;
//Export the reducer
export const moviesReducer = moviesSlice.reducer;



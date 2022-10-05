import { createReducer, on } from '@ngrx/store';
import { filtrosValidos, setFiltro } from './filtro.actions';
export const initialState: filtrosValidos = 'todos';
export const filtroReducer = createReducer(
  initialState,
  on(setFiltro, (state, { filtro }) => filtro  ),

);

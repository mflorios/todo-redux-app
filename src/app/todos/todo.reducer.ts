import { createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import * as actions from './todo.actions';

export const estadoInicial: Todo[] = [
  new Todo("Salvar al mundo"),
  new Todo("Vencer a Thanos"),
  new Todo("Comprar traje de Ironman"),
  new Todo("Robar escudo del capitan america"),
];

export const todoReducer = createReducer(
  estadoInicial,
  on(actions.crear, (state, {texto}) => [...state, new Todo(texto)]),
  on(actions.borrar, (state, {id}) => state.filter(todo => todo.id !== id)),
  on(actions.limpiarCompletados, (state) => state.filter(todo => !todo.completado)),
  on(actions.completado, (state, {completed}) => state.map(todo => {
    return {
      ...todo,
      completado: completed
    }
  })),
  on(actions.toggle, (state, {id}) => {
    return state.map(todo => {

      if(todo.id == id){
        return {
          ...todo,
          completado: !todo.completado
        }
      }else{
        return todo;
      }

    })
  }),
  on(actions.editar, (state, {id, texto}) => {
    return state.map(todo => {

      if(todo.id == id){
        return {
          ...todo,
          texto: texto
        }
      }else{
        return todo;
      }

    })
  }),



);

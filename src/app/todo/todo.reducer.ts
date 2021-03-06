import * as fromTodo from './todo.actions';
import {Todo} from './model/todo.model';

const todo1 = new Todo('hola mundo');
const todo2 = new Todo('Aprender redux');
const todo3 = new Todo('Aprender ngrx');
todo2.completado = true;

const estadoInicial: Todo[] = [todo1, todo2, todo3];

export function todoReducer(state = estadoInicial,
                            action: fromTodo.Acciones): Todo[] {
  switch (action.type) {
    case fromTodo.AGREAGAR_TODO:
      const todo = new Todo(action.texto);
      return [...state, todo];
    case fromTodo.TOGGLE_TODO:
      return state.map(todoEdit => {
        if (todoEdit.id === action.id) {
          return {
            ...todoEdit,
            completado: !todoEdit.completado
          };
        } else {
          return todoEdit;
        }
      });
    case fromTodo.TOGGLE_TODO_ALL:
      return state.map(todoEdit => {
        return {
          ...todoEdit,
          completado: action.completado
        };
      });
    case fromTodo.EDITAR_TODO:
      return state.map(todoEdit => {
        if (todoEdit.id === action.id) {
          return {
            ...todoEdit,
            texto: action.text
          };
        } else {
          return todoEdit;
        }
      });
    case fromTodo.BORRAR_TODO:
      return state.filter(todoEdit => todoEdit.id !== action.id);
    case fromTodo.BORRAR_COMPLETOS:
      return state.filter(todoEdit => !todoEdit.completado);
    default:
      return state;
  }
}

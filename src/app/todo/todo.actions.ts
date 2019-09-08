import {Action} from '@ngrx/store';

export const AGREAGAR_TODO = '[TODO] Agregar todo';
export const TOGGLE_TODO = '[TODO] Toggle todo';
export const TOGGLE_TODO_ALL = '[TODO] Toggle todo all';
export const EDITAR_TODO = '[TODO] Editar todo';
export const BORRAR_TODO = '[TODO] Borrar todo';
export const BORRAR_COMPLETOS = '[TODO] Borrar completos';

export class AgregarTodoAction implements Action {
  readonly type = AGREAGAR_TODO;

  constructor(public  texto: string) {
  }
}

export class ToggleTodoAction implements Action {
  readonly type = TOGGLE_TODO;

  constructor(public id: number) {
  }
}

export class ToggleAllTodoAction implements Action {
  readonly type = TOGGLE_TODO_ALL;

  constructor(public completado: boolean) {
  }
}

export class EditarTodoAction implements Action {
  readonly type = EDITAR_TODO;

  constructor(public id: number, public text: string) {
  }
}

export class BorrarTodoAction implements Action {
  readonly type = BORRAR_TODO;

  constructor(public id: number) {
  }
}

export class BorrarCompletos implements Action {
  readonly type = BORRAR_COMPLETOS;
}

export type Acciones = AgregarTodoAction | ToggleTodoAction | EditarTodoAction | BorrarTodoAction | ToggleAllTodoAction | BorrarCompletos;

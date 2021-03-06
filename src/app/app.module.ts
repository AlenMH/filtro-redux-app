import {FilterPipe} from './filter/filter.pipe';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TodoComponent} from './todo/todo.component';
import {TodosListComponent} from './todo/todos-list/todos-list.component';
import {TodoItemComponent} from './todo/todo-item/todo-item.component';
import {TodoFooterComponent} from './todo/todo-footer/todo-footer.component';
import {TodoAddComponent} from './todo/todo-add/todo-add.component';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {ReactiveFormsModule} from '@angular/forms';
import {appReducers} from './app.reducers';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodosListComponent,
    TodoItemComponent,
    TodoFooterComponent,
    TodoAddComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    StoreModule.forRoot(appReducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

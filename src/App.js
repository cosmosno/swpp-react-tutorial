import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './containers/TodoList/TodoList';
import NewTodo from './containers/TodoList/NewTodo/NewTodo';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import TodoDetail from './components/TodoDetail/TodoDetail';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route path="/todos" exact render={() => <TodoList title={"My TODOs"}></TodoList>}></Route>
        <Route path="/new-todo" exact component={NewTodo}></Route>
        <Redirect exact from='/' to='todos'></Redirect>
        <Route render={() => <h1>Not Found</h1>}></Route>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;

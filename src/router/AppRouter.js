import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import AddUserPage from '../components/AddUserPage';
import EditUserPage from '../components/EditUserPage'
import AddAuthorPage from '../components/AddAuthorPage';
import EditAuthorPage from '../components/EditAuthorPage';
import EditBookpage from '../components/EditBookpage';
import AddBookPage from '../components/AddBookPage';
import DashBoard from '../components/DashBoard';
import NotFoundPage from '../components/NotFoundPage';
import BookList from '../components/BookList';
import AuthorList from '../components/AuthorList';

export const history = createBrowserHistory();

const AppRouter = () => (
  <BrowserRouter history={history}>
    <div>
      <Switch>
        <Route path="/" component={DashBoard} exact={true} />
        <Route path="/createUser" component={AddUserPage} />
        <Route path="/editUser/:id" component={EditUserPage} />
        <Route path="/createBook" component={AddBookPage} />
        <Route path="/editBook/:id" component={EditBookpage} />
        <Route path="/bookList" component={BookList} />
        <Route path="/createAuthor" component={AddAuthorPage} />
        <Route path="/editAuthor/:id" component={EditAuthorPage} />
        <Route path="/authorlist" component={AuthorList} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;

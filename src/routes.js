import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from './Pages/Home';
import PostPage from './Pages/post';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/post' component={PostPage} />
            </Switch>
        </BrowserRouter>
    )
}
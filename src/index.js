import React,{useEffect} from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route} from 'react-router-dom';
import {PageHome,PageProfile,PageHeader} from './component/views/';
import Provider from './context';
import './style/Style.scss';
import Pagination from './component/Pagination';

const Navigation = () => <BrowserRouter>
    <Provider>
        <Route path="/:page?/:pageId?" component={PageHeader}/>
        <Route path="/page/:pageId" component={PageHome}/>
        <Route exact path="/page/:pageId/:id" component={PageProfile}/>
        <Pagination/>
    </Provider>
</BrowserRouter>

ReactDOM.render(<Navigation />, document.getElementById('root'));

serviceWorker.unregister();

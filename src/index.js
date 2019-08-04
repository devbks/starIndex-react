import React,{useEffect} from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route} from 'react-router-dom';
import {PageHome,PageProfile,PageHeader} from './component/views/';
import Provider from './context';
import Pagination from './component/Pagination';
import NotFound from './component/NotFound';
import './style/Style.scss';

const Navigation = () => <BrowserRouter>
    <Provider>
        <Route path="/:page?/:pageId?" component={PageHeader}/>
        <Route exact path="/" component={PageHome}/>
        <Route path="/page/:pageId" component={PageHome}/>
        <Route exact path="/page/:pageId/:id" component={PageProfile}/>
        <Route exact path="/error" component={NotFound}/>
        <Pagination/>
    </Provider>
</BrowserRouter>

ReactDOM.render(<Navigation />, document.getElementById('root'));

serviceWorker.unregister();

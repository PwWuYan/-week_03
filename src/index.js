import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Index from './views/index';
import { BrowserRouter } from 'react-router-dom';
import store from './store/store';
import { Provider } from 'react-redux';
import routes from './router/route.config';
import RouteView from './router/RouteView';
import axios from 'axios';
React.Component.prototype.$http=axios

ReactDOM.render(
        <Provider store={store}>
                <BrowserRouter>
                        <RouteView routes={routes}>
                                < Index />
                        </RouteView>
                </BrowserRouter>
        </Provider>
        , document.getElementById('root'));
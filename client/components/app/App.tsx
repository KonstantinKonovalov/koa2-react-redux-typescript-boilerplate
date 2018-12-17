import * as React from 'react';
import { Content } from 'components/content/Content';
import { Header } from 'components/header/Header';

require('./app.css');

export const App = () => (
    <React.Fragment>
        <div className="app">
            <Header />
            <Content />
        </div>
    </React.Fragment>
);

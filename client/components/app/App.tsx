import * as React from 'react';
import { Content } from 'components/content/Content';

require('./app.css');

export const App = () => (
    <React.Fragment>
        <div className="test">
            <header>app header component(future)</header>
            <Content />
        </div>
    </React.Fragment>
);

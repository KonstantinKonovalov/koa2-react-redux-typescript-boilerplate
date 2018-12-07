import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

require('./content.css');

export const Content = () => (
    <React.Fragment>
        <Switch>
            <Route exact path="/" render={() => <div>asd</div>} />
        </Switch>
    </React.Fragment>
)

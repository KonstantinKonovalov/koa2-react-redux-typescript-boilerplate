import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { CurrenciesContainer } from '../../containers/currencies/CurrenciesContainer';

require('./content.css');

export const Content = () => (
    <div className="content">
        <Switch>
            <Route exact path="/" component={CurrenciesContainer} />
        </Switch>
    </div>
)

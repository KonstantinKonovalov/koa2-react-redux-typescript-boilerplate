import * as React from 'react';
import { render } from 'react-dom';
import { App } from './components/app/App';
import * as moment from 'moment';

require('moment/locale/ru');
require('antd/dist/antd.css');

moment.locale('ru');

render(
    <App />,
    document.getElementById('app')
);

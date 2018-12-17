import * as React from 'react';
import { connect } from 'react-redux';

class CurrenciesContainerFn extends React.Component<any, any> {
    public constructor(props: any) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    public handleClick() {
        this.props.testDispatch();
    }

    public render() {
        return (
            <div>
                {this.props.currencies.map((i: any) => <div key={i}>{i}</div>)}
            </div>
        );
    }
}

export const CurrenciesContainer = connect<any, any, any, any>(
    (store: any) => ({
        currencies: store.currencies
    })
)(CurrenciesContainerFn);

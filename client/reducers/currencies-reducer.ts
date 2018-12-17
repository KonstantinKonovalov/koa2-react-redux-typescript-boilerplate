export const currenciesReducer = (state: any = [], action: any) => {
    switch (action.type) {
        case 'TEST':
            return state + 15;
        default:
            return state;
    }
}

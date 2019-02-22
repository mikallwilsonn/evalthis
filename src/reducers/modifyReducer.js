export default function( state = '', action ) {
    switch ( action.type ) {
        case 'randomize':
            return action.payload;
        case 'uppercase':
            return action.payload;
        case 'lowercase':
            return action.payload;
        case 'reverse':
            return action.payload;
        default:
            return state;
    }
}

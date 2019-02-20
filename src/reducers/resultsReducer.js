//import initialResults from '../data/initialResults';
export default function( state = null, action ) {
    switch ( action.type ) {
        case 'evaluate':
            return action.payload;
        default:
            return state;
    }
}
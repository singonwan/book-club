const initState = {}

const bookpostReducer = (state = initState, action) => {
    switch(action.type){
        case 'CREATE_BOOKPOST':
            console.log('created bookpost', action.bookpost) //the bookpost passed on from bookpostActions
            return state;
        case 'CREATE_BOOKPOST_ERROR':
            console.log('create bookpost error', action.err);
            return state;
        case 'DELETE_BOOKPOST':
            console.log('deleted bookpost', action.id)
            return state;
        case 'DELETE_BOOKPOST_ERROR':
            console.log('deleted bookpost error', action.err)
            return state;
        case 'EDIT_BOOKPOST':
            console.log('edited bookpost', action.id)
            return state;
        case 'EDIT_BOOKPOST_ERROR':
            console.log('edit bookpost error', action.err)
            return state;
        default: 
            return state;
    }
}

export default bookpostReducer
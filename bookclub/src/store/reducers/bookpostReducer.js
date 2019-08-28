const initState = {
    bookposts: [
        {id: '1', title: 'help me find peach', content: 'blah blah blah'},
        {id: '2', title: 'collect all the stars', content: 'blah blah blah'},
        {id: '3', title: 'egg hunt with yoshi', content: 'blah blah blah'}
    ]
}

const bookpostReducer = (state = initState, action) => {
    switch(action.type){
        case 'CREATE_BOOKPOST':
            console.log('created bookpost', action.bookpost) //the bookpost passed on from bookpostActions
            return state;
        case 'CREATE_BOOKPOST_ERROR':
            console.log('create bookpost error', action.err);
            return state;
        default: 
            return state;
    }
}

export default bookpostReducer
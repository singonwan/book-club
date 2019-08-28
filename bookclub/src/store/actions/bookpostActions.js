export const createBookpost = (bookpost) => {
    //instead of returning an action, we return a function
    //extra arguments added from thunk
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        //holding the dispatch and then dispatch after the async call
        //make async call to database
        dispatch({ type:'CREATE_BOOKPOST', bookpost });

    }
};
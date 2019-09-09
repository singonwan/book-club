export const createBookpost = (bookpost) => {
    //instead of returning an action, we return a function
    //extra arguments added from thunk
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        //holding the dispatch and then dispatch after the async call

        //make async call to database ... async calls returns promise so can use .then() .catch()
        //the then(callback function ) 
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
        firestore.collection("bookposts").add({
            ...bookpost,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: authorId,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type:'CREATE_BOOKPOST', bookpost }); 
        }).catch((err) => {
            dispatch({ type:'CREATE_BOOKPOST_ERROR', err });
        })
    } //the dispatch calls go to the reducers to be handled
};

export const deleteBookpost = (id) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        firestore.collection("bookposts").doc(id).delete()
            .then(() => {
                dispatch({ type:'DELETE_BOOKPOST', id});
            }).catch((err) => {
                dispatch({ type:'DELETE_BOOKPOST_ERROR', err})
            })
    }
}

export const editBookpost = (id) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        
        //needa create an editbookpost page like createbookpost with a different state.
        // pushing that button redirects to that page with content already existing on the thing.
        // after editing the user can press update button
        // notification fires and post is changed with a different timestamp too. 
        // may needa create a new edit page or can use create page with input value to prepopulate the textbox


        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
        firestore.collection("bookposts").doc(id).update({
            'title': '',
            'content': 
        }).then(() => {
            dispatch({ type:'EDIT_BOOKPOST', bookpost }); 
        }).catch((err) => {
            dispatch({ type:'EDIT_BOOKPOST_ERROR', err });
        })
    } //the dispatch calls go to the reducers to be handled
};
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

export const deleteBookpost = (bookpost) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        console.log("deleting bookpost") //this gets fired //but also need to figure out why it redirects
        //..because clicking on the post redirects.
        //get id from firestore and match the id with the bookpost passed on. 
    }
}
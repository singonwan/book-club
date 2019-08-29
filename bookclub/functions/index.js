const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

const createNotification = (notification) => {  //creates notification collection in firestore.
    return admin.firestore().collection('notifications')
        .add(notification)
        .then(doc => console.log('notification added', doc));
}

exports.bookpostCreated = functions.firestore
    .document('bookposts/{bookpostId}')
    .onCreate(doc => {
        const bookpost = doc.data();
        const notification = {
            content: 'Added a new bookpost',
            user: `${bookpost.authorFirstName} ${bookpost.authorLastName}`,
            time: admin.firestore.FieldValue.serverTimestamp()
        }

    return createNotification(notification)    
})

exports.userJoined = functions.auth.user()
    .onCreate(user => {
        return admin.firestore().collection('users')
            .doc(user.uid).get().then(doc => {

                const newUser = doc.data();
                const notification = {
                    content: 'Joined the Bookclub!',
                    user: `${newUser.firstName} ${newUser.lastName}`,
                    time: admin.firestore.FieldValue.serverTimestamp()
                }

                return createNotification(notification)  
            })
    })
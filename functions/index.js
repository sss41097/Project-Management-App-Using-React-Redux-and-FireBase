const functions = require('firebase-functions');
const admin = require('firebase-admin')

admin.initializeApp(functions.config().firebase);


exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello shashank");
});

const createNotification = (notification =>{
    return admin.firestore().collection('notifications')
    .add(notification)
    .then(doc => {
        console.log('notification added', doc)
    });
})

//fetching project details when new project created
exports.projectCreated = functions.firestore
    .document('projects/{Id}')
    .onCreate(doc=>{

        const project = doc.data();

        const notification = {
            content : "Added a new Project",
            user : project.authorFirstName+" "+project.authorLastName,
            time : admin.firestore.FieldValue.serverTimestamp()
        }

        return createNotification(notification);
    })

//fetching user details using uid
    exports.userJoined = functions.auth.user()
    .onCreate(user=>{
        return admin.firestore().collection('users')
        .doc(user.uid).get().then(doc=>{
         
            const newUser = doc.data()
            const notification = {
                content : "Thanks for Signing Up "+newUser.firstName+" !",
                user : newUser.firstName + " " + newUser.lastName,
                time : admin.firestore.FieldValue.serverTimestamp()
            }
            return createNotification(notification);
        })
        
    })
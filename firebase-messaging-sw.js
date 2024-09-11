importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js");

firebase.initializeApp({
    apiKey: "AIzaSyAVWnJeiran2YaLGQNYqAA5bOk03n82rEY",
    authDomain: "eltibawi-restaurant-app.firebaseapp.com",
    projectId: "eltibawi-restaurant-app",
    storageBucket: "eltibawi-restaurant-app.appspot.com",
    messagingSenderId: "509455261967",
    appId: "1:509455261967:web:0a244d523335eb5e245e7a",
    measurementId: "G-51EL245R67"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
    console.log("Received background message ", payload);

    // Ensure notification payload is present
    if (payload.notification) {
        const notificationTitle = payload.notification.title || "New Notification";
        const notificationOptions = {
            body: payload.notification.body || "You have a new message.",
            icon: "/assets/images/card.png" // Ensure this path is correct
        };

        self.registration.showNotification(notificationTitle, notificationOptions);
    } else {
        console.error("Payload did not contain notification data.");
    }
});


// [START initialize_firebase_in_sw]
 importScripts('https://www.gstatic.com/firebasejs/7.18.0/firebase-app.js');
 importScripts('https://www.gstatic.com/firebasejs/7.18.0/firebase-messaging.js');

// Initialize Firebase
var config = {
    apiKey: "AIzaSyBarEbp2tYT_kucTti2Vjk0LiT2qLlr7d4",
    authDomain: "webpush-1166e.firebaseapp.com",
    databaseURL: "https://webpush-1166e.firebaseio.com",
    projectId: "webpush-1166e",
    storageBucket: "webpush-1166e.appspot.com",
    messagingSenderId: "1045809670811",
    appId: "1:1045809670811:web:cce45c0fc1bca1ae35f43e",
    measurementId: "G-SYQLGSYD4L"
};
firebase.initializeApp(config);
// messages.
const messaging = firebase.messaging();
// [END initialize_firebase_in_sw]

messaging.setBackgroundMessageHandler(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  /*   
    const notificationTitle = 'Background Message Title';
    const notificationOptions = {
      body: 'Background Message body.'
    }; 
  */

  // Customize notification here
  const notificationTitle = payLoad.notification.title;
  const notificationOptions = {
    body: payLoad.notification.body,
    icon: payLoad.notification.icon,
  };

  return self.registration.showNotification(notificationTitle,
      notificationOptions);
});
// [END background_handler]
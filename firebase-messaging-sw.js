// Import and configure the Firebase SDK
// These scripts are made available when the app is served or deployed on Firebase Hosting
// If you do not serve/host your project using Firebase Hosting see https://firebase.google.com/docs/web/setup
importScripts('https://www.gstatic.com/firebasejs/8.2.10/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.10/firebase-messaging.js');

// messagingSenderId.
firebase.initializeApp({
  'apiKey': "AIzaSyBarEbp2tYT_kucTti2Vjk0LiT2qLlr7d4",
  'messagingSenderId': '223623084549',
  'projectId': "webpush-1166e",
	'authDomain': "webpush-1166e.firebaseapp.com",
	'databaseURL': "https://webpush-1166e.firebaseio.com",
	'storageBucket': "webpush-1166e.appspot.com",
	'messagingSenderId': "1045809670811",
	'appId': "1:1045809670811:web:cce45c0fc1bca1ae35f43e",
	'measurementId': "G-SYQLGSYD4L"
});

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
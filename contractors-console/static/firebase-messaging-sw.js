importScripts('https://www.gstatic.com/firebasejs/6.0.1/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/6.0.1/firebase-messaging.js')

const firebaseConfig = {
  apiKey: 'AIzaSyBxVWL0SJDsJxVx5PNIPMYNAc1735Xu3Pw',
  authDomain: 'dev-conecto.firebaseapp.com',
  databaseURL: 'https://dev-conecto.firebaseio.com',
  projectId: 'dev-conecto',
  storageBucket: 'dev-conecto.appspot.com',
  messagingSenderId: '217419280180',
  appId: '1:217419280180:web:df05237c5f5b4044',
}

firebase.initializeApp(firebaseConfig)

const messaging = firebase.messaging()

self.addEventListener('notificationclick', async function(event) {
  let url = event.notification.data.url
  event.notification.close(); // Android needs explicit close.

  event.waitUntil(
    clients.matchAll({
      includeUncontrolled: true,
      type: 'window'
    }).then( windowClients => {
      // Check if there is already a window/tab open with the target URL
      console.log('windowClients ---> ', windowClients)
      for (var i = 0; i < windowClients.length; i++) {
        var client = windowClients[i];
        // If so, just focus it.
        if (client.url === url && 'focus' in client) {
          return client.focus();
        }
      }
      // If not, then open the target URL in a new window/tab.
      if (clients.openWindow) {
        return clients.openWindow(url);
      }
    })
  );
});

messaging.setBackgroundMessageHandler(function(payload) {
  self.registration.showNotification(payload.data.twi_title, {
    icon: 'https://entrepreneur.conecto.ca/icons/icon-96x96.png',
    body: payload.data.twi_body,
    data: { url: payload.data.twi_action },
    vibrate: [200, 100, 200, 100, 200, 100, 200],
  })
})

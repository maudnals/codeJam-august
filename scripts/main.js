navigator.serviceWorker.register('sw.js');

Notification.requestPermission(function(result) {
  if (result === 'granted') {
    navigator.serviceWorker.ready.then(function(registration) {
      setInterval(function(){
        const options = {
          body: 'You really do',
          image: 'images/merkel.jpg',
          icon: 'images/merkel.jpg',
          badge: 'images/merkel.jpg',
          vibrate: [200, 100, 200, 100, 200, 100, 200]
        };
        registration.showNotification('🖕 WOW!!! YOU SUCK!!! 🖕', options);
      }, 1000);
      
    });
  }
})
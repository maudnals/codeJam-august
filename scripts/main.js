navigator.serviceWorker.register('sw.js');

Notification.requestPermission(function(result) {
  if (result === 'granted') {
    navigator.serviceWorker.ready.then(function(registration) {
      setInterval(function(){
        const options = {
          body: 'You really do',
          image: 'images/cat.jpg',
          icon: 'images/cat.jpg',
          badge: 'images/cat.jpg',
          vibrate: [50, 100, 150, 100, 250, 100, 350, 100, 450, 100, 550, 100, 650]
        };
        registration.showNotification('♥️ WOW!!! YOU SUCK!!! ♥️', options);
      }, 6000);
      
    });
  }
})
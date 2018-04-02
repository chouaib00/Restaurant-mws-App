//Registering Service Worker

// if ('serviceWorker' in navigator){
//   navigator.serviceWorker
//   .register('../../sw.js')
//   .then(function(registration){
//     console.log("SW registration completed");
//   }).catch(function(err){
//     console.log("SW registration failed", err);
//   });
// } else {
//   console.log("SW is not supported in this browser");
// };

if (!navigator.serviceWorker) {
  console.log(`This browser doesn't support Service Worker!`);
} else {
  navigator.serviceWorker.register('../../sw.js111').then(function() {
      console.log('SW registration completed!')
  }).catch(function() {
      console.log('Registration failed!')
  })
}
(function() {
   const clockLi = document.querySelector('.clock-footer');
   function updateClock() {
   clockLi.innerText = new Date().toLocaleTimeString();
   }
   setInterval(updateClock, 1000);
})();
/* ============================================
   COUNTDOWN TIMER — Registration Deadline
   ============================================ */

(function () {
  'use strict';

  // Registration deadline: Friday, April 25, 2026 at 12:00 PM
  const registrationDeadline = new Date(2026, 3, 25, 12, 0, 0).getTime();

  const daysElement = document.getElementById('days');
  const hoursElement = document.getElementById('hours');
  const minutesElement = document.getElementById('minutes');
  const secondsElement = document.getElementById('seconds');

  function updateCountdown() {
    const now = new Date().getTime();
    const timeRemaining = registrationDeadline - now;

    // Calculate time units
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    // Update DOM with padding
    daysElement.textContent = String(days).padStart(2, '0');
    hoursElement.textContent = String(hours).padStart(2, '0');
    minutesElement.textContent = String(minutes).padStart(2, '0');
    secondsElement.textContent = String(seconds).padStart(2, '0');

    // If countdown is finished
    if (timeRemaining < 0) {
      daysElement.textContent = '00';
      hoursElement.textContent = '00';
      minutesElement.textContent = '00';
      secondsElement.textContent = '00';
      
      // Add warning styling
      const countdownSection = document.getElementById('countdown');
      if (countdownSection) {
        countdownSection.style.opacity = '0.7';
      }
      
      return false; // Stop the timer
    }

    return true; // Keep the timer running
  }

  // Initial update
  updateCountdown();

  // Update every second
  const countdownInterval = setInterval(() => {
    if (!updateCountdown()) {
      clearInterval(countdownInterval);
    }
  }, 1000);

  // Cleanup on page unload
  window.addEventListener('beforeunload', () => {
    clearInterval(countdownInterval);
  });
})();

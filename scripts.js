// Show the first .info section by default when the page loads
window.addEventListener('DOMContentLoaded', () => {
  const firstInfo = document.querySelector('.info');
  if (firstInfo) {
    firstInfo.classList.remove('hidden');
  }
});

// Button click handlers to toggle annotation sections
document.querySelectorAll('button[data-target]').forEach(btn => {
  btn.addEventListener('click', () => {
    // Hide all info sections
    document.querySelectorAll('.info').forEach(el => el.classList.add('hidden'));

    // Get the target ID from button data-target
    const sel = btn.getAttribute('data-target');
    const targetEl = document.getElementById(sel);

    if (targetEl) {
      // Show the selected info section
      targetEl.classList.remove('hidden');
      // Smooth scroll to the shown section
      targetEl.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.warn(`No element found with ID: ${sel}`);
    }
  });
});

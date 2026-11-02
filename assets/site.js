'use strict';

const copyButton = document.getElementById('copy-email');
const copyStatus = document.getElementById('copy-status');
let feedbackTimer;

copyButton?.addEventListener('click', async () => {
  clearTimeout(feedbackTimer);
  try {
    await navigator.clipboard.writeText('gabr.oliveira@icloud.com');
    copyStatus.textContent = 'Email copied to clipboard.';
  } catch {
    copyStatus.textContent = 'Please copy the email address above.';
  }
  feedbackTimer = setTimeout(() => { copyStatus.textContent = ''; }, 6000);
});

// Open case details for print without changing the reader's chosen state.
let previouslyOpen = [];
window.addEventListener('beforeprint', () => {
  previouslyOpen = [...document.querySelectorAll('details')].filter(item => item.open);
  document.querySelectorAll('details').forEach(item => { item.open = true; });
});
window.addEventListener('afterprint', () => {
  document.querySelectorAll('details').forEach(item => { item.open = previouslyOpen.includes(item); });
});

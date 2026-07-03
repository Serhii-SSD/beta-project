import { getEventById } from './js/events-api.js';
import { renderEventModal } from './js/render-functions.js';

const testBtn = document.querySelector('.test-modal-btn');
const modalOverlay = document.querySelector('.event-modal-overlay');

if (testBtn) {
  testBtn.addEventListener('click', async (event) => {
    const eventId = event.currentTarget.dataset.id;
    
    try {
      const eventData = await getEventById(eventId);
      
      renderEventModal(eventData);
      
      document.body.classList.add('no-scroll');
      modalOverlay.classList.add('is-open');
      
      modalOverlay.addEventListener('click', handleClose);
      window.addEventListener('keydown', handleEscape);
      
    } catch (error) {
      alert('Помилка завантаження даних з API GoIT');
    }
  });
}

function handleClose(event) {
  if (event.target.closest('[data-modal-close]') || event.target === modalOverlay) {
    destroyModal();
  }
}

function handleEscape(event) {
  if (event.code === 'Escape') {
    destroyModal();
  }
}

function destroyModal() {
  modalOverlay.classList.remove('is-open');
  document.body.classList.remove('no-scroll');
  modalOverlay.removeEventListener('click', handleClose);
  window.removeEventListener('keydown', handleEscape);
  
  const modalContainer = modalOverlay.querySelector('.modal-product');
  if (modalContainer) modalContainer.innerHTML = '';
}

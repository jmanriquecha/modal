const showModal = document.getElementById('show-modal');
const modal = document.getElementById('modal');
const modalClose = document.getElementById('modal-close');
const modalCancel = document.getElementById('modal-cancel');

window.modal.classList.add('hidden');

// Open modal

showModal.addEventListener('click', function () {
    setTimeout(() => {
        modal.classList.remove('hidden');
        modal.style.display = "flex";
    }, 200);
});

// Close modal

document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        hiddenModal();
    }
});

modalClose.addEventListener('click', hiddenModal);
modalCancel.addEventListener('click', hiddenModal);

function hiddenModal() {
    setTimeout(() => {
        modal.classList.add('hidden');
        modal.style.display = "none";

    }, 200);
}
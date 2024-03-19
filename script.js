document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('#image-gallery img');

    function showModal(modal) {
        modal.style.display = "block";
    }

    function hideModal(modal) {
        modal.style.display = "none";
    }

    images.forEach(image => {
        image.addEventListener('click', function() {
            const modalClass = this.getAttribute('data-modal-class');
            const modal = document.querySelector(`#quote-modal.${modalClass}`);
            const quote = this.getAttribute('data-quote');
            const secondQuote = this.getAttribute('data-second-quote');

            updateQuote(modal, quote, secondQuote);
            showModal(modal);
        });
    });

    function updateQuote(modal, quote, secondQuote) {
        const quoteText = modal.querySelector('#quote');
        const secondQuoteText = modal.querySelector('#second-quote');
        quoteText.textContent = quote;
        secondQuoteText.textContent = secondQuote;
    }

    const closeBtns = document.querySelectorAll('.close');
    closeBtns.forEach(closeBtn => {
        closeBtn.addEventListener('click', function() {
            const modal = this.closest('.modal');
            hideModal(modal);
        });
    });

    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        modal.addEventListener('click', function(event) {
            if (event.target === modal) {
                hideModal(modal);
            }
        });
    });

    const playButton = document.getElementById('playButton');
    playButton.addEventListener('click', function() {
        var audio = document.getElementById('myAudio');
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
    });
});

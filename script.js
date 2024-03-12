document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('#image-gallery img');
    const quoteModal = document.getElementById('quote-modal');
    const quoteText = document.getElementById('quote');
    const secondQuoteText = document.getElementById('second-quote');
    const closeBtn = document.querySelector('.close');

    images.forEach(image => {
        image.addEventListener('click', function() {
            const quote = this.getAttribute('data-quote');
            const secondQuote = this.getAttribute('data-second-quote');

            quoteText.textContent = quote;
            secondQuoteText.textContent = secondQuote;

            quoteModal.style.display = 'block';
        });
    });

    closeBtn.addEventListener('click', function() {
        quoteModal.style.display = 'none';
    });

    quoteModal.addEventListener('click', function(event) {
        if (event.target === quoteModal) {
            quoteModal.style.display = 'none';
        }
    });
});





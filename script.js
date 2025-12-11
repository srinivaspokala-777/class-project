const buyNow = document.querySelector('.buynow');
const delivery = document.getElementsByClassName('delivery')[0];
const loadingText = document.getElementsByClassName('loading-text')[0];

buyNow.addEventListener('click', () => {
    delivery.classList.add('active');

    var percentage = 0;
    loadingText.innerHTML = `${percentage}%`;

    const interval = setInterval(() => {
        percentage += 2;
        loadingText.innerHTML = `${percentage}%`;
        if (percentage >= 100) {
            clearInterval(interval);
            window.location.href = "products.html";
        }
    }, 100);
    
});
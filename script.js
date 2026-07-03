document.addEventListener('DOMContentLoaded', () => {
    
    const tiredBtn = document.getElementById('tired-btn');
    const mainText = document.querySelector('.main-text');

    tiredBtn.addEventListener('click', () => {
        mainText.innerHTML = '躺平吧';
        
        tiredBtn.style.backgroundColor = '#C2B9AE';
        tiredBtn.innerText = '点不了了';
        tiredBtn.disabled = true;
    });

});
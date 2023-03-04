window.onload = function() {
    document.querySelector('.overlay').style.opacity = '1';
    document.querySelector('.overlay').style.visibility = 'visible';
};

// Close pop-up
function closePopup() {
    document.querySelector('.overlay').style.opacity = '0';
    document.querySelector('.overlay').style.visibility = 'hidden';
}
const updateCounter = (count) => {
    const button = document.getElementById('counterBtn');
    button.textContent = `Clics: ${count}`; 
};

let count = 0;
document.getElementById('counterBtn').addEventListener('click', () => {
    count += 1;
    updateCounter(count); 
});
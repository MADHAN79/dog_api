document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById("generateBtn");


function fetchDogImage() {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => {
            document.getElementById('dogImage').src = data.message;
        })
        .catch(error => console.error('Error fetching dog image:', error));
}

function runConfetti() {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
}

generateBtn.addEventListener("click", function() {
    fetchDogImage();
    runConfetti();
});

fetchDogImage();
});
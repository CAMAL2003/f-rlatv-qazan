// script.js
document.getElementById('spinButton').addEventListener('click', function() {
    const wheel = document.querySelector('.wheel');
    const sections = ['0.01 AZN', '0.02 AZN', '0.03 AZN', '0.05 AZN', '0.00 AZN'];
    const probabilities = [0.50, 0.25, 0.10, 0.05, 0.15];

    // Hesablama üçün random seçim
    const randomValue = Math.random();
    let cumulativeProbability = 0;
    let selectedSection = 0;

    for (let i = 0; i < probabilities.length; i++) {
        cumulativeProbability += probabilities[i];
        if (randomValue <= cumulativeProbability) {
            selectedSection = i;
            break;
        }
    }

    // Çarxı döndər
    const rotationDegree = 360 * (Math.random() + 5); // 5 tam dövr və əlavə random dərəcə

    wheel.style.transform = `rotate(${rotationDegree}deg)`;

    // Sonuç
    setTimeout(() => {
        alert(`Təbriklər! ${sections[selectedSection]} qazandınız!`);
    }, 3000); // Fırlanma bitdikdən sonra nəticəni göstərir
});

let originalCardHTML;

window.addEventListener("DOMContentLoaded", () => {
  originalCardHTML = document.getElementById("resultCard").innerHTML;
});
function resetCalculator() {
  // Clear form fields
  document.getElementById("inputYears").value = "";
  document.getElementById("inputWeight").value = "";
  document.getElementById("generateChartCheck").checked = false;

  // Disable Start button again
  document.getElementById("calculateBtn").disabled = true;
  document.getElementById("calculateBtn").onclick = null; 
  // Restore original card content
  document.getElementById("resultCard").innerHTML = originalCardHTML;
  document.getElementById("calculateBtn").setAttribute("data-lang", "start"); 
  applyLanguage(CURRENT_LANG);
  // Ensure card is flipped back to the front
  document.querySelector('.flip-card').classList.remove('flipped');
}
function validateForm() {
  const years = document.getElementById("inputYears").value;
  const weight = document.getElementById("inputWeight").value;

  document.getElementById("calculateBtn").disabled = !(years && weight);
}

document.getElementById("inputYears").addEventListener("input", validateForm);
document.getElementById("inputWeight").addEventListener("input", validateForm);

function calculate() {
  const years = Number(document.getElementById("inputYears").value);
  const weight = Number(document.getElementById("inputWeight").value);
  if (!years || !weight) return;
  // Example calculation (replace with your real formula)
  const dailyKcal = weight * 30; // placeholder
  const watts = (dailyKcal * 4184) / 86400;

  const resultHTML = `
    <h1 style="text-align:left;">Your Result</h1>
    <p><strong>Years:</strong> ${years}</p>
    <p><strong>Weight:</strong> ${weight} kg</p>
    <p><strong>Daily Energy:</strong> ${dailyKcal.toFixed(0)} kcal</p>
    <p><strong>Equivalent Power:</strong> ${watts.toFixed(1)} W</p>

    <button class="flip-btn" onclick="flipCard()">Flip</button>
  `;
  
    const card = document.getElementById("resultCard");
    card.style.opacity = 0;
    setTimeout(() => {
        card.innerHTML = resultHTML;
        card.style.opacity = 1;
    }, 200);

    document.getElementById("calculateBtn").setAttribute("data-lang", "reset"); 
    applyLanguage(CURRENT_LANG);
    document.getElementById("calculateBtn").onclick = resetCalculator;
}


// document.querySelector('.flip-card').classList.remove('flipped');
// document.querySelector('.flip-card').classList.add('flipped');



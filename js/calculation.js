let originalCardHTML;
const kcalToJ = 4184; 
const secondsPerDay = 86400;

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

//     // Enable only if both fields contain numbers 
//     if (years.trim() !== "" && weight.trim() !== "" && !isNaN(years) && !isNaN(weight)) { 
//         btn.disabled = false; 
//     } else { 
//         btn.disabled = true; 
//     } 
  
}

function calculate() {
  const years = Number(document.getElementById("inputYears").value);
  const weight = Number(document.getElementById("inputWeight").value);

  if (!years || !weight) return;

  // Step 1: Daily need
  const dailyNeed = 24 * weight * 1.5; // kcal/day
  const totalKcal = dailyNeed * 365 * years; // whole years period
  
  // Daily kcal
  const dailyUnits = dailyNeed / 1000;

  // Daily costs
  const dailyStaple = dailyUnits * 4; 
  const dailyMixed = dailyUnits * 10; 
  const dailyPremium = dailyUnits * 16;

  // 2) Average power over the whole period 
  const totalJoules = totalKcal * kcalToJ; 
  const totalSeconds = years * 365 * secondsPerDay;
  const dailyWatts = (totalKcal * 4184) / totalSeconds;

  // 1) Total energy 
  const totalKWh = (totalKcal * kcalToJ) / 3_600_000; 
  const totalMWh = totalKWh / 1000;

  // 3) Households 
  const kWhPerHouseholdYear = 10_000; 
  const householdYears = totalKWh / kWhPerHouseholdYear;

  // Step 2: Consumed (+20%)
  const consumed = totalKcal * 1.20;  

  // Step 3: Purchased (÷ (1 - 0.19))
  const purchased = consumed / (1 - 0.19);  

  // Step 4: Produced (÷ (1 - 0.132))
  const produced = purchased / (1 - 0.132);
  const highMW = ((produced * kcalToJ) / 3_600_00) / 10_000;  

  // Step 5: Cost ranges (€ per 1000 kcal)
  const units = purchased / 1000;
  const stapleCost = units * 4;
  const mixedCost = units * 10;
  const premiumCost = units * 16;


  // Formatters 
  const fmt0 = n => n.toLocaleString(undefined, { maximumFractionDigits: 0 }); 
  const fmt2 = n => n.toLocaleString(undefined, { maximumFractionDigits: 2 });
  generateCharts = document.getElementById('generateChartCheck').checked;

  const resultHTML = `
    <h1 style="text-align:left;">The Bill for ${years} years at ${weight} kg</h1>

       <table>
                <thead>
                  <tr>
                    <th></th>
                    <th></th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Daily Metabolic need</td>
                    <td>${dailyNeed.toFixed(0)} kcal</td>
                    <td>${dailyWatts.toFixed(1)} W</td>
                  </tr>
                  <tr>
                    <td>Overall (${fmt0(years)}) years period</td>
                    <td>${fmt0(totalKcal)} kcal</td>
                    <td>${totalMWh.toFixed(1)} MWh ≈ ${fmt0(householdYears)} average households powered for a year</td>
                  </tr>
                  <tr>
                    <td>Actual consumed (+20% over consumption)</td>
                    <td>${fmt0(consumed)} kcal</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Purchased (+15% waste)</td>
                    <td>${fmt0(purchased)} kcal</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Produced (+17% over production)</td>
                    <td>${fmt0(produced)} kcal </td>
                    <td>${fmt2(highMW)} MWh ≈ ${(highMW*1000/kWhPerHouseholdYear).toFixed(0)} average households powered for a year</td>
                  </tr>
                   <tr>
                    <td>Staple-heavy diet (€4/1000 kcal)</td>
                    <td>€${fmt0(stapleCost)}</td>
                    <td>€${fmt0(dailyStaple)}/day</td>
                  </tr>
                   <tr>
                    <td>Mixed EU diet (€10/1000 kcal)</td>
                    <td>€€${fmt0(dailyMixed)}/day</td>
                    <td>€${fmt0(mixedCost)}</td>
                  </tr>
                  <tr>
                    <td>Premium diet (€16/1000 kcal)</td>
                    <td>€${fmt0(premiumCost)}</td>
                    <td>€${fmt0(dailyPremium)}/day</td>
                  </tr>
                </tbody>
              </table>

    <button class="btn flip-btn btn-outlined-primary" onclick="flipCard()">Flip</button>
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
function calcMe(){



//     // Daily costs
//     const dailyStaple = dailyUnits * 4; 
//     const dailyMixed = dailyUnits * 10; 
//     const dailyPremium = dailyUnits * 16;

//     // 2) Average power over the whole period 
//     const totalJoules = totalKcal * kcalToJ; 
//     const totalSeconds = years * 365 * secondsPerDay;
//     const dailyWatts = (totalKcal * 4184) / totalSeconds;

//     // 1) Total energy 
//     const totalKWh = (totalKcal * kcalToJ) / 3_600_000; 
//     const totalMWh = totalKWh / 1000;

//     // 3) Households 
//     const kWhPerHouseholdYear = 10_000; 
//     const householdYears = totalKWh / kWhPerHouseholdYear;

//     // Step 2: Consumed (+20%)
//     const consumed = totalKcal * 1.20;

//     // Step 3: Purchased (÷ (1 - 0.19))
//     const purchased = consumed / (1 - 0.19);

//     // Step 4: Produced (÷ (1 - 0.132))
//     const produced = purchased / (1 - 0.132);
//     const highMW = ((produced * kcalToJ) / 3_600_00) / 10_000;

//     // Step 5: Cost ranges (€ per 1000 kcal)
//     const units = purchased / 1000;
//     const stapleCost = units * 4;
//     const mixedCost = units * 10;
//     const premiumCost = units * 16;

//     // Formatters 
//     const fmt0 = n => n.toLocaleString(undefined, { maximumFractionDigits: 0 }); 
//     const fmt2 = n => n.toLocaleString(undefined, { maximumFractionDigits: 2 });
//     generateCharts = document.getElementById('generateChartCheck').checked;

//     document.getElementById('output').innerHTML = `
//     <h4 style="text-align:center;">Results for ${years} years at ${weight} kg</h4>

//     <ul style="font-size: 1.4rem; font-weight: 400; line-height: 1.7; padding-left: 1.2rem;">
//         <li>Metabolic need: ${fmt0(dailyNeed)} kcal/day => ${fmt0(dailyWatts)} watts</li>
//         <li>Overall (${fmt0(years)}) years need: ${fmt0(totalKcal)} kcal/total => ${fmt2(totalMWh)} MWh</li>
//         <ul>
//             <li><i class="bi bi-house-fill" style="margin-right:6px;"></i>≈ ${fmt0(householdYears)} average households powered for a year.</li>
//         </ul>
//         <li>Actual consumed (+20% over consumption): ${fmt0(consumed)} kcal</li>
//         <li>Purchased (+15% waste): ${fmt0(purchased)} kcal</li>
//         <li>Produced (+17% over production): ${fmt0(produced)} kcal => ${fmt2(highMW)} MW</li>
//         <ul>
//             <li>≈ ${(highMW*1000/kWhPerHouseholdYear).toFixed(0)} average households powered for a year.</li>
//         </ul>
//     </ul>

//     <h4 class="mt-4">Estimated food cost over ${years} years</h4>

//     <ul style="font-size: 1.4rem; font-weight: 400; line-height: 1.7; padding-left: 1.2rem;">
//         <li>Staple-heavy diet (€4/1000 kcal): €${fmt0(stapleCost)} → €${fmt0(dailyStaple)} /day</li>
//         <li>Mixed EU diet (€10/1000 kcal): €${fmt0(mixedCost)} → €${fmt0(dailyMixed)} /day</li>
//         <li>Premium diet (€16/1000 kcal): €${fmt0(premiumCost)} → €${fmt0(dailyPremium)} /day</li>
//     </ul>
}


document.getElementById("inputYears").addEventListener("input", validateForm);
document.getElementById("inputWeight").addEventListener("input", validateForm);


// document.querySelector('.flip-card').classList.remove('flipped');
// document.querySelector('.flip-card').classList.add('flipped');



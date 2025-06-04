


export function bmiMetric() {
    const belowHeight = document.getElementById('height');
    const belowWeight = document.getElementById('weight');
    const height = belowHeight.value;
    const weight = belowWeight.value;
    console.log(belowHeight, belowWeight);
    if (!height === undefined || height > 0 && !weight === undefined || weight > 0) {
        console.log('belowHeight: ', height, ' belowWeight: ', weight);
        calcMetric(height,weight); 
    } else {
        console.log('falta un campo');
    }
}

function calcMetric(height,weight) {
    const belowWelcome = document.querySelector('.below__welcome');
    const resultHead = document.querySelector('.results__head');
    const resultScore = document.querySelector('.results__score');
    const resultDetail = document.querySelector('.results__details');
    const metricDetail = document.querySelector('.details__bold--met');
    const heightM = height / 100;
    const bmiResult = (weight / (heightM * heightM)).toFixed();
    const resultPlus = (24.9 * (heightM ** 2)).toFixed(1);
    const resultMinus = (18.5 * (heightM ** 2)).toFixed(1);
    console.log('bmiResult:',bmiResult,' resultMinus: ',resultMinus,' resultPlus: ',resultPlus);

    belowWelcome.classList.add('display__none');
    resultHead.classList.remove('display__none');
    resultDetail.classList.remove('display__none');
    resultScore.textContent = `${bmiResult}`;
    metricDetail.textContent = `${resultMinus}Kgs - ${resultPlus}Kgs.`;
}

// function calculateBMIMetric(weightKg, heightCm) {
//   const heightM = heightCm / 100; // Convertir cm a metros
// }


export function bmiMetric() {
    const belowHeight = document.getElementById('height');
    const belowWeight = document.getElementById('weight');
    const height = belowHeight.value;
    const weight = belowWeight.value;
    console.log(belowHeight, belowWeight);
    if (!height === undefined || height > 0 && !weight === undefined || weight > 0) {
        console.log('belowHeight: ', height, ' belowWeight: ', weight);
        calcMetric(height, weight);
    } else {
        console.log('falta un campo');
    }
}

function calcMetric(height, weight) {
    const heightM = height / 100;
    const bmiResult = (weight / (heightM * heightM)).toFixed();
    const resultMax = (24.9 * (heightM ** 2)).toFixed(1);
    const resultMin = (18.5 * (heightM ** 2)).toFixed(1);
    console.log('bmiResult:', bmiResult, ' resultMin: ', resultMin, ' resultMax: ', resultMax);

    resultPrint(bmiResult, resultMin, resultMax)
}

export function resultPrint(bmi, rMin, rMax) {

    const belowRadio = document.querySelector('.below__radio:checked');
    const belowWelcome = document.querySelector('.below__welcome');
    const resultHead = document.querySelector('.below__results');
    const resultScore = document.querySelector('.results__score');
    const resultDetail = document.querySelector('.results__details');
    const detailBoldMet = document.querySelector('.details__bold--met');
    const detailBoldImp = document.querySelector('.details__bold--imp');
    const detailMetric = document.querySelector('.details__metric');
    const detailImperial = document.querySelector('.details__imperial');
    belowWelcome.classList.add('display__none');
    resultHead.classList.remove('display__none');
    resultDetail.classList.remove('display__none');
    resultScore.textContent = `${bmi}`;

    switch (belowRadio.id) {
        case 'metric':
            console.log('metric:', rMin, ' ', rMax);
            detailImperial.classList.add('display__none');
            detailMetric.classList.remove('display__none');
            detailBoldMet.textContent = `${rMin}Kgs - ${rMax}Kgs.`;
            break;
        case 'imperial':
            console.log('imperial:', rMin.stn, ' ', rMin.lbs, ' ', rMax);
            detailMetric.classList.add('display__none');
            detailImperial.classList.remove('display__none');
            detailBoldImp.textContent = `${rMin.stn}st ${rMin.lbs}lbs - ${rMax.stn}st ${rMax.lbs}lbs.`;
        default:
            console.log('ningun dato Radio');
            break;
    }
}


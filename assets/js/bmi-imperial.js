import {resultPrint} from './bmi-metric.js';

export function bmiImperial() {
     
    const wst = +document.getElementById('weight-st').value;
    const wlb = +document.getElementById('weight-lb').value;
    const hft = +document.getElementById('height-ft').value;
    const hin = +document.getElementById('height-in').value;


    if (!hft === undefined || hft > 0 && !hin === undefined || hin > 0 && !wst === undefined || wst > 0 && !wlb === undefined || wlb > 0 ) { 

        const totalIn = (hft * 12) + hin;
        const totalLb = (wst * 14) + wlb;

        console.log('hft:',hft, ' hin: ', hin, ' wst: ', wst, ' wlb: ',wlb);
        console.log('totalIn: ', totalIn, ' totalLb: ', totalLb);
        calcImperial(totalLb, totalIn);
    } else {
       console.log('falta un dato Imperial'); 
    }
}

export function calcImperial(totalLb, totalIn) {
    const bmiResult = ((totalLb * 703) / (totalIn * totalIn)).toFixed(1);
    console.log('bmiResult: ', bmiResult);
    const minW = ((18.5 * totalIn ** 2) / 703).toFixed(1);
    const maxW = ((24.9 * totalIn ** 2) / 703).toFixed(1);
    const resultMin = detailLb(minW);
    const resultMax = detailLb(maxW);
    console.log('resultMin: ', resultMin.stn, ' ',resultMin.lbs, ' resultMax: ', resultMax);
    resultPrint(bmiResult, resultMin, resultMax);
}

function detailLb(imp) {
    const stn = Math.floor( imp / 14);
    const lbs = Math.round(imp % 14);
    console.log('detailLb: ', stn, ' ',lbs);
    return {stn, lbs};
}

import './radioLayout.js';
import {bmiMetric} from './bmi-metric.js'
import {bmiImperial} from './bmi-imperial.js';
   
document.addEventListener('DOMContentLoaded', function () {

    console.log('Inicio');
    const belowHeight = document.getElementById('height');
    const belowWeight = document.getElementById('weight');
    const belowHeightFt = document.getElementById('height-ft');
    const belowHeightIn = document.getElementById('height-in');
    const belowWeightSt = document.getElementById('weight-st');
    const belowWeightLb = document.getElementById('weight-lb');

    const belowRadio = document.querySelector('.below__radio:checked');
    console.log('belowRadio: ', belowRadio.id);

/* ########   METRIC ########### */

    [belowHeight, belowWeight].forEach( metric => {
        metric.addEventListener('keydown', (e) => {
            if (e.key === "Enter") {
                e.preventDefault();
                bmiMetric();
            }
        });
        metric.addEventListener('blur', () => {
            bmiMetric();
        });
        metric.addEventListener('change',() => {
            bmiMetric();
        });
    });
    
/* ###########  IMPERIAL  ############### */
    [belowHeightFt, belowHeightIn, belowWeightLb, belowWeightSt].forEach( imperial => {
        imperial.addEventListener('keydown', (e) => {
            if (e.key === "Enter") {
                e.preventDefault();
                bmiImperial();
            }
        });
        imperial.addEventListener('blur', () => {
            bmiImperial();
        });
        imperial.addEventListener('change', () => {
            bmiImperial();
        });
    });


});

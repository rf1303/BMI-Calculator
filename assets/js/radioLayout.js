
const belowRadio = document.querySelectorAll('.below__radio');
const belowMetric = document.querySelector('.below__details--metric');
const belowImperial = document.querySelector('.below__details--imperial');

belowRadio.forEach((element) => {
    element.addEventListener('change', (e) => {
        console.log('radio: ', e.target.id);
        if (e.target.id === "metric") {
            belowMetric.classList.remove('display__none');
            belowImperial.classList.add('display__none');
        } else {
            belowMetric.classList.add('display__none');
            belowImperial.classList.remove('display__none');
        }
    })
});
    



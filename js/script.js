document
    .getElementById('calculateButton')
    .addEventListener('click', function () {
    const sum = Number(document.getElementById('sum').value);
    const tip = Number(document.getElementById('tip').value);
    const numberOfFriends = Number(document.getElementById('numberOfFriends').value);
    const calculatedTip = calculateTip(sum, tip);
    const sumDivided = (sum + calculatedTip) / numberOfFriends;
    showDividedSum(sumDivided);
});
function calculateTip(sum, tip) {
    return sum * tip;
}
function showDividedSum(sum) {
    const formElements = document.querySelectorAll('.form');
    formElements.forEach((form) => form.classList.toggle('hide'));
    document.getElementById('friendSum').innerHTML = sum + ' kr';
}
document
    .getElementById('showSum')
    .addEventListener('click', () => calculateTip(120, 20));

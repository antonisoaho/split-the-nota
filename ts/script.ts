document.getElementById('calculateButton').addEventListener('click', function () {
  const sum: number = Number((<HTMLInputElement>document.getElementById('sum')).value);
  const tip: number = Number((<HTMLInputElement>document.getElementById('tip')).value);
  const numberOfFriends: number = Number(
    (<HTMLInputElement>document.getElementById('numberOfFriends')).value
  );

  const calculatedTip: number = calculateTip(sum, tip);
  const sumDivided: number = (sum + calculatedTip) / numberOfFriends;

  showDividedSum(sumDivided);
});

function calculateTip(sum: number, tip: number): number {
  return sum * tip;
}

function showDividedSum(sum: number): void {
  const formElements: NodeListOf<HTMLElement> = document.querySelectorAll('.form');
  formElements.forEach((form) => form.classList.toggle('hide'));
  document.getElementById('friendSum').innerHTML = sum + ' kr';
}

document.getElementById('showSum').addEventListener('click', () => calculateTip(120, 20));

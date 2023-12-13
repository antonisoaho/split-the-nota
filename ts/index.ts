import { SplitCalculations } from './interfaces/SplitCalculations.js';
import { FormData } from './classes/FormData.js';

const calculateAndSplit = (formData: FormData): void => {
  const result: SplitCalculations = CalculateTip(
    formData.sum,
    isNaN(formData.tip) ? 0 : formData.tip,
    formData.numberOfFriends
  );

  displaySum(result.total());
};

const CalculateTip = (sum: number, tip: number, friends: number): SplitCalculations => {
  const calculations: SplitCalculations = {
    sum: sum,
    tip: isNaN(tip) ? 0 : tip,
    numberOfFriends: friends,

    total: (): number => {
      const tipInValue = sum * tip;
      const totalWithTip: number = sum + tipInValue;

      return totalWithTip / friends;
    },
  };

  return calculations;
};

const displaySum = (sum: any): void => {
  if (sum) {
    document.getElementById('friendSum').textContent = sum.toString();
  }
  showHandler();

  document.getElementById('showSum').addEventListener('click', () => {
    location.reload();
  });
};

const showHandler = (): void => {
  const formElements: NodeListOf<HTMLElement> = document.querySelectorAll('.form');

  formElements.forEach((element) => {
    element.classList.toggle('hide');
  });
};

const submitForm = (): void => {
  try {
    const form = new FormData('.form__input');
    calculateAndSplit(form);
  } catch (error) {
    displaySum(error.message);
  }
};

const submitButton = document.getElementById('calculateButton');

submitButton.addEventListener('click', (event) => {
  event.preventDefault();
  submitForm();
});

import { FormData } from './classes/FormData.js';
const calculateAndSplit = (formData) => {
  const result = CalculateTip(
    formData.sum,
    isNaN(formData.tip) ? 0 : formData.tip,
    formData.numberOfFriends
  );
  displaySum(result.total());
};
const CalculateTip = (sum, tip, friends) => {
  const calculations = {
    sum: sum,
    tip: isNaN(tip) ? 0 : tip,
    numberOfFriends: friends,
    total: () => {
      const tipInValue = sum * tip;
      const totalWithTip = sum + tipInValue;
      return totalWithTip / friends;
    },
  };
  return calculations;
};
const displaySum = (sum) => {
  if (sum) {
    document.getElementById('friendSum').textContent = sum.toString();
  }
  showHandler();
  document.getElementById('showSum').addEventListener('click', () => {
    location.reload();
  });
};
const showHandler = () => {
  const formElements = document.querySelectorAll('.form');
  formElements.forEach((element) => {
    element.classList.toggle('hide');
  });
};
const submitForm = () => {
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

export class FormData {
  constructor(formId) {
    const formList = document.querySelectorAll(formId);
    formList.forEach((formElement) => {
      const name = formElement.id;
      const value = parseFloat(formElement.value);

      if (isNaN(value)) {
        const label = document.querySelector(`label[for="${name}"]`);
        const labelText = label ? label.textContent : name;
        throw new Error(`Inmatningsfel i '${labelText}'`);
      }
      this[name] = value;
    });
  }
}

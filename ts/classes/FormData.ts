export class FormData {
  sum: number;
  tip: number;
  numberOfFriends: number;

  constructor(formId: string) {
    const formList: NodeListOf<HTMLInputElement> =
      document.querySelectorAll(formId);

    formList.forEach((formElement) => {
      const name: string = formElement.id;
      const value: number = parseFloat(formElement.value);

      this[name] = value;
    });
  }
}

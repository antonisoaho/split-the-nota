export class FormData {
    constructor(formId) {
        const formList = document.querySelectorAll(formId);
        formList.forEach((formElement) => {
            const name = formElement.id;
            const value = parseFloat(formElement.value);
            this[name] = value;
        });
    }
}

let selector = document.querySelectorAll('input[type="tel"]');
let im = new Inputmask('+7 (999) 999-99-99');
im.mask(selector)

// правила: selector - класс формы, rules - объект с правилами, successModal, yaGoal
let validateForms = function(selector, rules, message, successModal, yaGoal) {
  new window.JustValidate(selector, {
    rules: rules,
    messages: message,
    colorWrong: "#D11616",
    // обработчик submit, сдесь будет отправка
    submitHandler: function(form) {
      let formData = new FormData(form);

      let xhr = new XMLHttpRequest();

      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            console.log('Отправлено');
          }
        }
      }

      xhr.open('POST', 'mail.php', true);
      xhr.send(formData);

      form.reset();
    }
  });
}

validateForms('.contacts__form',
  {
    name:
      {
        required: true,
        minLength: 2,
        maxLength: 15
      },
    tel:
      {
        required: true
      },
  },

  {
    name: {
      required: `Введите ваше имя`,
      minLength: `Имя должно содержать хотя бы 2 буквы`,
      maxLength: `Максимальная длина имени - это 15 букв`
    },

    tel: {
      required: `Укажите ваш телефон`
    }
  },
'.thanks-popup', '.send goal');



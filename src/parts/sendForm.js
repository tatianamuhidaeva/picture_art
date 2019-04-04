//sendForm
function sendForm() {
  let mess = {
    loading: "Загрузка...",
    success: "Спасибо! Скоро с вами свяжемся!",
    failure: "Что-то пошло не так..."
  };
  let forms = document.querySelectorAll("form[action='mailer/smart.php']"),
    formCons = forms[0],
    formPopCons = forms[1],
    formPopDesign = forms[2],
    status = document.createElement("div");

  status.classList.add("status");

  function listenerForm(event) {
    event.preventDefault();
    event.target.appendChild(status);
    let input = event.target.querySelectorAll('input');
    let data = new FormData(event.target);

    let obj = {};
    data.forEach(function (value, key) {
       obj[key] = value;
    });
    let json = JSON.stringify(obj);

    let request = new XMLHttpRequest();
    request.open("POST", "./server.php");
    request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
    request.send(json);
    request.addEventListener('readystatechange', function () {
      function postData() {
        let promise = new Promise(function (resolve, reject) {
          if (request.readyState < 4) {
            resolve(request.readyState);
          } else if (request.readyState == 4 && request.status == 200) {
            resolve(request.readyState);
          } else {
            reject();
          }
        });
        return promise;
      } //end postData()

      postData()
        .then((state) => {
          if (state < 4){
            status.innerHTML = mess.loading;
          } else {
            if (event.target.parentElement.parentElement.parentElement.classList.contains("consultation")){
              status.innerHTML = mess.success;
            } else {
              event.target.innerHTML = mess.success;
            }
          }
        })
        .catch(() => {
          if (event.target.parentElement.parentElement.parentElement.classList.contains("consultation")){
            status.innerHTML = mess.failure;
          } else {
            event.target.innerHTML = mess.failure;
          }
        })
        .then(clearInput);
    });

    function clearInput() {
      for (let i = 0; i < input.length; i++) {
        input[i].value = "";
      }
    }
  }
  formCons.addEventListener("submit", function (event) {
    listenerForm(event);
  });
  formPopCons.addEventListener("submit", function (event) {
    listenerForm(event);
  });
  formPopDesign.addEventListener("submit", function (event) {
    listenerForm(event);
  });


    maskTel('input[name="phone"]', '+7 (xxx) xxx xx xx', false);
    maskText('input[name="name"], input[name="message"], textarea');

  function maskText(selector) {
    let inputs = document.querySelectorAll(selector);
    inputs.forEach(input => {
      input.addEventListener('keypress', function (e) {
        if (e.key.match(/[^а-яё ]/ig)) {
          e.preventDefault();
        }
      });
    });
  }

  //PhoneMask
  function maskTel(selector, mask, placeholder) {
    const XCHAR = "x";
    let tels = document.querySelectorAll(selector);
    tels.forEach(tel => {
      function autoInsert(mask, pos) {
        for (let i = pos; i < mask.length; i++) {
          if (mask[i] != XCHAR) {
            tel.value += mask[i];
          } else {
            break;
          }
        }
      }

      if (placeholder) {
        tel.setAttribute('placeholder', mask.replace(new RegExp(XCHAR, 'g'), '_'));
      }

      tel.addEventListener('keypress', function (e) {
        let place = tel.value.length;
        autoInsert(mask, place);
        place = tel.value.length;
        if ((e.key != mask[place] && mask[place] != XCHAR) ||
          (mask[place] == XCHAR && e.key.match(/\D/))) {
          e.preventDefault();
        }
      });
    });
  }
}
module.exports = sendForm;
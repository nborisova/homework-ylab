document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    auth(email, password)
    .then(response => {
        if (response.ok) {
            alert('Вы успешно вошли в аккаунт!');
        } else {
            response.json()
            .then(data => {
                errorMessage.textContent = data.error;    
            })
            .catch(error => {
                console.error('Ошибка при парсинге ответа от сервера:', error);
            })
        }
    })
    .catch(error => {
        console.error('Ошибка при запросе:', error);
        errorMessage.textContent = 'Возникла непредвиденная ошибка';
    });
});

function auth(email, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email === 'test@pochta.com' && password === '1234') {
            resolve(new Response());
        } else {
            const response = new Response('{"error": "Неверная почта или пароль"}', { status: 400 });
            resolve(response);
        }
      }, 1000);
    });
  }



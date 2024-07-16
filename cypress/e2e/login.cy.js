describe('Проверка авторизации', function () {

    it('Верный пароль и верный логин', function () {
         cy.visit('https://login.qa.studio/'); // Зашли на сайт
         cy.get('#mail').type('german@dolnikov.ru'); // Ввели верный логин
         cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
         cy.get('#loginButton').click(); // Нажала войти
         cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверяю, что после авторизации вижу текст
         cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден пользователю
  })
       
    it('Восстановления пароля', function () {
         cy.visit('https://login.qa.studio/'); // Зашли на сайт
         cy.get('#forgotEmailButton').click(); // Нажала забыли пароль
         cy.get('#mailForgot').type('ariska-yuliya@mail.ru'); // Ввела эл.почту
         cy.get('#restoreEmailButton').click(); // Нажала отправить код
         cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); //Проверяю, что вижу текст
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден пользователю

    })

    it('Верный логин и неверный пароль', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт
        cy.get('#mail').type('german@dolnikov.ru'); // Ввели верный логин
        cy.get('#pass').type('iLoveqastudio7'); // Ввели неверный пароль
        cy.get('#loginButton').click(); // Нажала войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверяю, что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден пользователю

      })

      it('Неверный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт
        cy.get('#mail').type('german@dolnikov1.ru'); // Ввели неверный логин
        cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
        cy.get('#loginButton').click(); // Нажала войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверяю, что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден пользователю

      })
      it('Логин без @ и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт
        cy.get('#mail').type('germandolnikov.ru'); // Ввели логин без @
        cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
        cy.get('#loginButton').click(); // Нажала войти
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // Проверяю, что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
       
      })

      it('Логин c большой буквы и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт
        cy.get('#mail').type('GerMan@Dolnikov.ru'); // Ввели логин
        cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
        cy.get('#loginButton').click(); // Нажала войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверяю, что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден пользователю
    
       })
    })


describe('Покупка аватара', function () {                                  
    it('e2e тест на покупку нового аватара для тренера', function () {     
         cy.visit('https://pokemonbattle.ru/');                            // Переходим на сайт
         cy.get('input[type="email"]').type('yuliya.snetkova5@yandex.ru');  // Вводим верный логин
         cy.get('input[type="password"]').type('Artemka19');              // Вводим верный пароль
         cy.get('button[type="submit"]').click();                        // Нажимаем кнопку Подтвердить
         cy.get('.header__btns > :nth-child(4)').click();               // Нажимаем кнопку Магазин
         cy.get('.available > button').first().click();                       // Кликаем Купить у первого доступного аватара
         cy.get('.credit').type('4111111111111111');                     // Вводим номер карты
         cy.get('.k_input_ccv').type('125');                             // Вводим CVV карты
         cy.get('.k_input_date').type('1025');                           // Вводим срок действия карты
         cy.get('.k_input_name').type('Yulia Snetkova');                  // Вводим имя владельца карты
         cy.get('.pay-btn').click();                                     // Нажимаем кнопку Оплатить
         cy.get('#cardnumber').type('56456');                            // Вводим код подтверждения СМС
         cy.get('.payment__submit-button').click();                      // Нажимаем кнопку Отправить
         cy.contains('Покупка прошла успешно').should('be.visible');     // Проверяем наличие и видимость сообщения о успешной покупке
     })

 })
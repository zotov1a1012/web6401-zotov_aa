// Класс User для хранения данных пользователя
class User {
    constructor(username, email, password, birthdate, genre, agree, newsletter) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.birthdate = birthdate;
        this.genre = genre;
        this.agree = agree;
        this.newsletter = newsletter;
        this.registrationDate = new Date().toLocaleString('ru-RU');
    }

    // Метод для форматированного вывода в консоль
    displayToConsole() {
        console.log('🎬 === Данные пользователя Киномира ===');
        console.log(`👤 Имя пользователя: ${this.username}`);
        console.log(`📧 Email: ${this.email}`);
        console.log(`🔐 Пароль: ${'*'.repeat(this.password.length)}`);
        console.log(`🎂 Дата рождения: ${this.birthdate || 'Не указана'}`);
        console.log(`🎭 Любимый жанр: ${this.getGenreName()}`);
        console.log(`✅ Согласие на обработку данных: ${this.agree ? 'Да' : 'Нет'}`);
        console.log(`📨 Email-рассылка: ${this.newsletter ? 'Подписан' : 'Не подписан'}`);
        console.log(`📅 Дата регистрации: ${this.registrationDate}`);
        console.log('====================================');
    }

    // Вспомогательный метод для получения названия жанра
    getGenreName() {
        const genres = {
            'action': 'Боевик',
            'fantasy': 'Фантастика',
            'comedy': 'Комедия',
            'drama': 'Драма',
            'horror': 'Ужасы'
        };
        return genres[this.genre] || 'Не указан';
    }

    // Метод для валидации email
    isValidEmail() {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(this.email);
    }

    // Метод для проверки возраста (18+)
    isAdult() {
        if (!this.birthdate) return true; // Если дата не указана, пропускаем проверку
        
        const birthDate = new Date(this.birthdate);
        const today = new Date();
        const age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
        
        return age > 18 || (age === 18 && monthDiff >= 0);
    }
}

// Обработка формы
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('userForm');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Получаем данные из формы
            const username = document.getElementById('username').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const birthdate = document.getElementById('birthdate').value;
            const genre = document.getElementById('genre').value;
            const agree = document.getElementById('agree').checked;
            const newsletter = document.getElementById('newsletter').checked;
            
            // Создаем объект пользователя
            const user = new User(username, email, password, birthdate, genre, agree, newsletter);
            
            // Валидация
            if (!user.isValidEmail()) {
                alert('Пожалуйста, введите корректный email адрес');
                return;
            }
            
            if (!user.isAdult()) {
                alert('Для регистрации вам должно быть больше 18 лет');
                return;
            }
            
            if (!agree) {
                alert('Необходимо согласие на обработку персональных данных');
                return;
            }
            
            // Выводим данные в консоль
            user.displayToConsole();
            
            // Показываем сообщение об успехе
            alert(`Регистрация успешна! Добро пожаловать в Киномир, ${username}! Данные отправлены в консоль.`);
            
            // Очистка формы
            this.reset();
        });
    }
});

// Дополнительные функции для улучшения UX
document.addEventListener('DOMContentLoaded', function() {
    // Добавляем валидацию в реальном времени
    const inputs = document.querySelectorAll('.form__input');
    
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            if (this.value.trim() !== '' && this.checkValidity()) {
                this.style.borderColor = '#27ae60';
            } else if (this.value.trim() === '') {
                this.style.borderColor = '#ddd';
            } else {
                this.style.borderColor = '#e74c3c';
            }
        });
    });
});
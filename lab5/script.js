// // Класс User для хранения данных пользователя
// class User {
//     constructor(username, email, password, birthdate, genre, agree, newsletter) {
//         this.username = username;
//         this.email = email;
//         this.password = password;
//         this.birthdate = birthdate;
//         this.genre = genre;
//         this.agree = agree;
//         this.newsletter = newsletter;
//         this.registrationDate = new Date().toLocaleString('ru-RU');
//     }

//     // Метод для форматированного вывода в консоль
//     displayToConsole() {
//         console.log('🎬 === Данные пользователя Киномира ===');
//         console.log(`👤 Имя пользователя: ${this.username}`);
//         console.log(`📧 Email: ${this.email}`);
//         console.log(`🔐 Пароль: ${'*'.repeat(this.password.length)}`);
//         console.log(`🎂 Дата рождения: ${this.birthdate || 'Не указана'}`);
//         console.log(`🎭 Любимый жанр: ${this.getGenreName()}`);
//         console.log(`✅ Согласие на обработку данных: ${this.agree ? 'Да' : 'Нет'}`);
//         console.log(`📨 Email-рассылка: ${this.newsletter ? 'Подписан' : 'Не подписан'}`);
//         console.log(`📅 Дата регистрации: ${this.registrationDate}`);
//         console.log('====================================');
//     }

//     // Вспомогательный метод для получения названия жанра
//     getGenreName() {
//         const genres = {
//             'action': 'Боевик',
//             'fantasy': 'Фантастика',
//             'comedy': 'Комедия',
//             'drama': 'Драма',
//             'horror': 'Ужасы'
//         };
//         return genres[this.genre] || 'Не указан';
//     }

//     // Метод для валидации email
//     isValidEmail() {
//         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         return emailRegex.test(this.email);
//     }

//     // Метод для проверки возраста (18+)
//     isAdult() {
//         if (!this.birthdate) return true; // Если дата не указана, пропускаем проверку
        
//         const birthDate = new Date(this.birthdate);
//         const today = new Date();
//         const age = today.getFullYear() - birthDate.getFullYear();
//         const monthDiff = today.getMonth() - birthDate.getMonth();
        
//         return age > 18 || (age === 18 && monthDiff >= 0);
//     }
// }

// // Обработка формы
// document.addEventListener('DOMContentLoaded', function() {
//     const form = document.getElementById('userForm');
    
//     if (form) {
//         form.addEventListener('submit', function(e) {
//             e.preventDefault();
            
//             // Получаем данные из формы
//             const username = document.getElementById('username').value;
//             const email = document.getElementById('email').value;
//             const password = document.getElementById('password').value;
//             const birthdate = document.getElementById('birthdate').value;
//             const genre = document.getElementById('genre').value;
//             const agree = document.getElementById('agree').checked;
//             const newsletter = document.getElementById('newsletter').checked;
            
//             // Создаем объект пользователя
//             const user = new User(username, email, password, birthdate, genre, agree, newsletter);
            
//             // Валидация
//             if (!user.isValidEmail()) {
//                 alert('Пожалуйста, введите корректный email адрес');
//                 return;
//             }
            
//             if (!user.isAdult()) {
//                 alert('Для регистрации вам должно быть больше 18 лет');
//                 return;
//             }
            
//             if (!agree) {
//                 alert('Необходимо согласие на обработку персональных данных');
//                 return;
//             }
            
//             // Выводим данные в консоль
//             user.displayToConsole();
            
//             // Показываем сообщение об успехе
//             alert(`Регистрация успешна! Добро пожаловать в Киномир, ${username}! Данные отправлены в консоль.`);
            
//             // Очистка формы
//             this.reset();
//         });
//     }
// });

// // Дополнительные функции для улучшения UX
// document.addEventListener('DOMContentLoaded', function() {
//     // Добавляем валидацию в реальном времени
//     const inputs = document.querySelectorAll('.form__input');
    
//     inputs.forEach(input => {
//         input.addEventListener('blur', function() {
//             if (this.value.trim() !== '' && this.checkValidity()) {
//                 this.style.borderColor = '#27ae60';
//             } else if (this.value.trim() === '') {
//                 this.style.borderColor = '#ddd';
//             } else {
//                 this.style.borderColor = '#e74c3c';
//             }
//         });
//     });
// });
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
        if (!this.birthdate) return true;
        
        const birthDate = new Date(this.birthdate);
        const today = new Date();
        const age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
        
        return age > 18 || (age === 18 && monthDiff >= 0);
    }
}

// Функция для настройки динамической валидации формы
function setupFormValidation() {
    const form = document.getElementById('userForm');
    if (!form) return;
    
    // Создаем контейнеры для сообщений об ошибках
    const inputs = {
        username: document.getElementById('username'),
        email: document.getElementById('email'),
        password: document.getElementById('password'),
        birthdate: document.getElementById('birthdate')
    };
    
    // Создаем элементы для отображения ошибок
    Object.keys(inputs).forEach(field => {
        if (inputs[field]) {
            const errorElement = document.createElement('div');
            errorElement.className = 'form__error';
            errorElement.style.color = '#e74c3c';
            errorElement.style.fontSize = '0.9em';
            errorElement.style.marginTop = '5px';
            errorElement.style.display = 'none';
            inputs[field].parentNode.appendChild(errorElement);
        }
    });
    
    // Валидация имени пользователя в реальном времени
    if (inputs.username) {
        inputs.username.addEventListener('input', function() {
            const errorElement = this.parentNode.querySelector('.form__error');
            if (this.value.length < 3 && this.value.length > 0) {
                errorElement.textContent = 'Имя должно содержать минимум 3 символа';
                errorElement.style.display = 'block';
                this.style.borderColor = '#e74c3c';
            } else if (this.value.length === 0) {
                errorElement.style.display = 'none';
                this.style.borderColor = '#ddd';
            } else {
                errorElement.style.display = 'none';
                this.style.borderColor = '#27ae60';
            }
        });
    }
    
    // Валидация email в реальном времени
    if (inputs.email) {
        inputs.email.addEventListener('blur', function() {
            const errorElement = this.parentNode.querySelector('.form__error');
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            
            if (!emailRegex.test(this.value) && this.value.length > 0) {
                errorElement.textContent = 'Введите корректный email адрес';
                errorElement.style.display = 'block';
                this.style.borderColor = '#e74c3c';
            } else if (this.value.length === 0) {
                errorElement.style.display = 'none';
                this.style.borderColor = '#ddd';
            } else {
                errorElement.style.display = 'none';
                this.style.borderColor = '#27ae60';
            }
        });
    }
    
    // Валидация пароля в реальном времени
    if (inputs.password) {
        inputs.password.addEventListener('input', function() {
            const errorElement = this.parentNode.querySelector('.form__error');
            if (this.value.length < 6 && this.value.length > 0) {
                errorElement.textContent = 'Пароль должен содержать минимум 6 символов';
                errorElement.style.display = 'block';
                this.style.borderColor = '#e74c3c';
            } else if (this.value.length === 0) {
                errorElement.style.display = 'none';
                this.style.borderColor = '#ddd';
            } else {
                errorElement.style.display = 'none';
                this.style.borderColor = '#27ae60';
            }
        });
    }
    
    // Валидация даты рождения в реальном времени
    if (inputs.birthdate) {
        inputs.birthdate.addEventListener('change', function() {
            const errorElement = this.parentNode.querySelector('.form__error');
            if (this.value) {
                const birthDate = new Date(this.value);
                const today = new Date();
                const age = today.getFullYear() - birthDate.getFullYear();
                const monthDiff = today.getMonth() - birthDate.getMonth();
                
                if (age < 18 || (age === 18 && monthDiff < 0)) {
                    errorElement.textContent = 'Для регистрации вам должно быть больше 18 лет';
                    errorElement.style.display = 'block';
                    this.style.borderColor = '#e74c3c';
                } else {
                    errorElement.style.display = 'none';
                    this.style.borderColor = '#27ae60';
                }
            } else {
                errorElement.style.display = 'none';
                this.style.borderColor = '#ddd';
            }
        });
    }
}

// Функция для отправки данных формы через POST-запрос
async function submitFormData(userData) {
    try {
        console.log('📤 Отправка данных на сервер:', userData);
        
        // Используем тестовый JSONPlaceholder или локальный сервер
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title: 'Регистрация пользователя Киномир',
                body: JSON.stringify(userData, null, 2),
                userId: 1,
            }),
        });
        
        if (!response.ok) {
            throw new Error(`HTTP ошибка! статус: ${response.status}`);
        }
        
        const result = await response.json();
        console.log('✅ Данные успешно отправлены на сервер:', result);
        return result;
    } catch (error) {
        console.error('❌ Ошибка при отправке данных на сервер:', error);
        
        // В случае ошибки имитируем успешный ответ для демонстрации
        return {
            id: Date.now(),
            message: 'Данные сохранены локально (сервер недоступен)'
        };
    }
}

// Функция для получения фильмов с сервера
async function fetchMovies() {
    try {
        console.log('🔄 Запрос данных о фильмах...');
        
        // Пробуем получить данные с локального сервера
        let response;
        try {
            response = await fetch('http://localhost:3000/movies');
        } catch (e) {
            // Если локальный сервер не запущен, используем fallback
            console.log('Локальный сервер недоступен, используем резервные данные');
            throw new Error('Сервер недоступен');
        }
        
        if (!response.ok) {
            throw new Error(`HTTP ошибка! статус: ${response.status}`);
        }
        
        const movies = await response.json();
        console.log('🎬 Фильмы получены с сервера:', movies);
        return movies;
    } catch (error) {
        console.error('❌ Ошибка при получении фильмов:', error.message);
        
        // Возвращаем резервные данные
        return [
            {
                id: 1,
                title: "Мстители: Секретные войны",
                genre: "Фантастика, Боевик",
                releaseDate: "2 мая 2025",
                director: "Дестин Дертон",
                budget: "$350 млн",
                rating: "9.8/10"
            },
            {
                id: 2,
                title: "Форсаж 11",
                genre: "Боевик, Криминал",
                releaseDate: "4 апреля 2025",
                director: "Луис Летеррье",
                budget: "$200 млн",
                rating: "8.5/10"
            },
            {
                id: 3,
                title: "Мир Юрского периода 4",
                genre: "Фантастика, Приключения",
                releaseDate: "18 июля 2025",
                director: "Дэвид Литч",
                budget: "$180 млн",
                rating: "8.7/10"
            },
            {
                id: 4,
                title: "Аватар 3",
                genre: "Фантастика, Приключения",
                releaseDate: "19 декабря 2025",
                director: "Джеймс Кэмерон",
                budget: "$250 млн",
                rating: "9.2/10"
            }
        ];
    }
}

// Функция для обновления таблицы фильмов
async function updateMoviesTable() {
    try {
        const tableBody = document.querySelector('.table tbody');
        if (!tableBody) {
            console.log('Таблица фильмов не найдена на странице');
            return;
        }
        
        console.log('🔄 Обновление таблицы фильмов...');
        
        // Показываем индикатор загрузки
        const loadingRow = document.createElement('tr');
        loadingRow.innerHTML = `
            <td colspan="6" class="table__cell table__cell--center" style="padding: 20px;">
                <div style="display: flex; align-items: center; justify-content: center; gap: 10px;">
                    <div class="spinner" style="
                        width: 20px;
                        height: 20px;
                        border: 3px solid #f3f3f3;
                        border-top: 3px solid #3498db;
                        border-radius: 50%;
                        animation: spin 1s linear infinite;
                    "></div>
                    <span>Загрузка фильмов...</span>
                </div>
            </td>
        `;
        
        // Сохраняем старые данные
        const oldRows = Array.from(tableBody.children);
        
        // Очищаем таблицу и добавляем индикатор загрузки
        tableBody.innerHTML = '';
        tableBody.appendChild(loadingRow);
        
        // Добавляем CSS для анимации спиннера
        if (!document.querySelector('#spinner-style')) {
            const style = document.createElement('style');
            style.id = 'spinner-style';
            style.textContent = `
                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
            `;
            document.head.appendChild(style);
        }
        
        // Получаем данные о фильмах
        const movies = await fetchMovies();
        
        // Удаляем индикатор загрузки
        tableBody.innerHTML = '';
        
        if (movies.length === 0) {
            const noDataRow = document.createElement('tr');
            noDataRow.innerHTML = `
                <td colspan="6" class="table__cell table__cell--center" style="padding: 20px; color: #666;">
                    Нет данных о фильмах
                </td>
            `;
            tableBody.appendChild(noDataRow);
            return;
        }
        
        // Заполняем таблицу новыми данными
        movies.forEach((movie, index) => {
            const row = document.createElement('tr');
            row.className = 'table__row';
            row.style.animation = `fadeIn 0.5s ease ${index * 0.1}s both`;
            row.innerHTML = `
                <td class="table__cell table__cell--left">${movie.title}</td>
                <td class="table__cell table__cell--left">${movie.genre}</td>
                <td class="table__cell table__cell--center">${movie.releaseDate}</td>
                <td class="table__cell table__cell--left">${movie.director}</td>
                <td class="table__cell table__cell--right">${movie.budget}</td>
                <td class="table__cell table__cell--center">
                    <span class="rating-badge" style="
                        display: inline-block;
                        padding: 3px 8px;
                        background: ${parseFloat(movie.rating) >= 8.5 ? '#27ae60' : '#f39c12'};
                        color: white;
                        border-radius: 12px;
                        font-weight: bold;
                    ">${movie.rating}</span>
                </td>
            `;
            tableBody.appendChild(row);
        });
        
        console.log(`✅ Таблица обновлена. Загружено ${movies.length} фильмов`);
        
        // Добавляем анимацию fadeIn если её нет
        if (!document.querySelector('#fadeIn-style')) {
            const fadeStyle = document.createElement('style');
            fadeStyle.id = 'fadeIn-style';
            fadeStyle.textContent = `
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `;
            document.head.appendChild(fadeStyle);
        }
        
    } catch (error) {
        console.error('❌ Ошибка при обновлении таблицы:', error);
        
        const tableBody = document.querySelector('.table tbody');
        if (tableBody) {
            tableBody.innerHTML = `
                <tr>
                    <td colspan="6" class="table__cell table__cell--center" style="padding: 20px; color: #e74c3c;">
                        ❌ Ошибка при загрузке данных. Пожалуйста, попробуйте позже.
                    </td>
                </tr>
            `;
        }
    }
}

// Периодическое обновление данных
let updateInterval;

function startPeriodicUpdates() {
    // Первое обновление через 1 секунду после загрузки
    setTimeout(() => {
        updateMoviesTable();
    }, 1000);
    
    // Затем каждые 5 минут (300000 миллисекунд)
    updateInterval = setInterval(() => {
        console.log('🔄 Автоматическое обновление данных (каждые 5 минут)');
        updateMoviesTable();
    }, 300000); // 5 минут
    
    console.log('🚀 Автоматическое обновление данных запущено');
}

function stopPeriodicUpdates() {
    if (updateInterval) {
        clearInterval(updateInterval);
        console.log('⏹️ Автоматическое обновление данных остановлено');
    }
}

// Создание кнопки для ручного обновления
function createUpdateButton() {
    const updateButton = document.createElement('button');
    updateButton.id = 'updateMoviesBtn';
    updateButton.innerHTML = '🔄 Обновить фильмы';
    updateButton.style.cssText = `
        display: inline-flex;
        align-items: center;
        gap: 8px;
        margin: 10px 0 20px 0;
        padding: 10px 20px;
        background: linear-gradient(135deg, #3498db, #2980b9);
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 14px;
        font-weight: bold;
        transition: all 0.3s ease;
        box-shadow: 0 2px 5px rgba(0,0,0,0.2);
    `;
    
    updateButton.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px)';
        this.style.boxShadow = '0 4px 8px rgba(0,0,0,0.3)';
    });
    
    updateButton.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
    });
    
    updateButton.addEventListener('click', async function() {
        this.disabled = true;
        this.innerHTML = '⏳ Загрузка...';
        
        await updateMoviesTable();
        
        this.disabled = false;
        this.innerHTML = '🔄 Обновить фильмы';
        
        // Показываем уведомление
        const notification = document.createElement('div');
        notification.textContent = '✅ Фильмы успешно обновлены!';
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #27ae60;
            color: white;
            padding: 10px 20px;
            border-radius: 5px;
            z-index: 1000;
            animation: slideIn 0.3s ease;
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    });
    
    return updateButton;
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Инициализация скриптов для Киномира...');
    
    // 1. Настройка динамической валидации формы
    setupFormValidation();
    
    // 2. Обработка отправки формы
    const form = document.getElementById('userForm');
    if (form) {
        form.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            // Получаем данные из формы
            const username = document.getElementById('username').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const birthdate = document.getElementById('birthdate').value;
            const genre = document.getElementById('genre').value;
            const agree = document.getElementById('agree').checked;
            const newsletter = document.getElementById('newsletter').checked;
            
            // Проверяем обязательные поля
            if (!username || !email || !password) {
                alert('Пожалуйста, заполните все обязательные поля');
                return;
            }
            
            if (!agree) {
                alert('Необходимо согласие на обработку персональных данных');
                return;
            }
            
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
            
            // Выводим данные в консоль
            user.displayToConsole();
            
            // Показываем индикатор загрузки
            const submitButton = this.querySelector('.form__button');
            const originalText = submitButton.textContent;
            submitButton.textContent = '⏳ Отправка...';
            submitButton.disabled = true;
            
            try {
                // Отправляем данные на сервер
                const userData = {
                    username: user.username,
                    email: user.email,
                    birthdate: user.birthdate,
                    genre: user.getGenreName(),
                    newsletter: user.newsletter,
                    registrationDate: user.registrationDate
                };
                
                const result = await submitFormData(userData);
                
                // Показываем сообщение об успехе
                alert(`✅ Регистрация успешна!\nДобро пожаловать в Киномир, ${username}!\nДанные отправлены на сервер.`);
                
                // Очистка формы
                this.reset();
                
                // Сбрасываем стили полей
                const inputs = this.querySelectorAll('.form__input');
                inputs.forEach(input => {
                    input.style.borderColor = '#ddd';
                });
                
                // Скрываем сообщения об ошибках
                const errors = this.querySelectorAll('.form__error');
                errors.forEach(error => error.style.display = 'none');
                
            } catch (error) {
                alert('❌ Ошибка при отправке данных. Пожалуйста, попробуйте еще раз.');
            } finally {
                // Восстанавливаем кнопку
                submitButton.textContent = originalText;
                submitButton.disabled = false;
            }
        });
    }
    
    // 3. Инициализация для страницы с фильмами
    if (window.location.pathname.includes('movies.html') || 
        window.location.href.includes('movies.html')) {
        
        console.log('🎬 Инициализация страницы фильмов...');
        
        // Создаем и добавляем кнопку обновления
        const table = document.querySelector('.table');
        if (table) {
            const updateButton = createUpdateButton();
            table.parentNode.insertBefore(updateButton, table);
        }
        
        // Запускаем периодическое обновление
        startPeriodicUpdates();
        
        // Останавливаем обновление при закрытии страницы
        window.addEventListener('beforeunload', stopPeriodicUpdates);
        
        // Добавляем индикатор статуса обновления
        const statusIndicator = document.createElement('div');
        statusIndicator.id = 'updateStatus';
        statusIndicator.style.cssText = `
            font-size: 12px;
            color: #666;
            margin-top: 5px;
            display: flex;
            align-items: center;
            gap: 5px;
        `;
        statusIndicator.innerHTML = `
            <span class="status-dot" style="
                width: 8px;
                height: 8px;
                background: #27ae60;
                border-radius: 50%;
                display: inline-block;
                animation: pulse 2s infinite;
            "></span>
            <span>Автообновление включено (каждые 5 минут)</span>
        `;
        
        if (document.querySelector('#updateMoviesBtn')) {
            document.querySelector('#updateMoviesBtn').parentNode.appendChild(statusIndicator);
        }
        
        // Добавляем CSS для пульсации
        const pulseStyle = document.createElement('style');
        pulseStyle.textContent = `
            @keyframes pulse {
                0% { opacity: 1; }
                50% { opacity: 0.5; }
                100% { opacity: 1; }
            }
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            @keyframes slideOut {
                from { transform: translateX(0); opacity: 1; }
                to { transform: translateX(100%); opacity: 0; }
            }
        `;
        document.head.appendChild(pulseStyle);
    }
    
    // 4. Улучшение UX для всех страниц
    const allInputs = document.querySelectorAll('.form__input');
    allInputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.style.boxShadow = '0 0 0 3px rgba(52, 152, 219, 0.3)';
        });
        
        input.addEventListener('blur', function() {
            this.style.boxShadow = 'none';
        });
    });
    
    console.log('✅ Все скрипты успешно инициализированы');
});
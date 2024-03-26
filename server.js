const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware для обслуживания статических файлов из папки public
app.use(express.static(path.join(__dirname, '')));

// Маршрут для обработки запроса /register
app.get('/register', (req, res) => {
    // Отправка файла index.html
    res.sendFile(path.join(__dirname, 'index.html'));
});


// Запуск сервера
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

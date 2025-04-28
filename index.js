import express from 'express';
const app = express();
app.listen(3000, () => {
    console.log('Server is runninf on port 3000');
});
app.get('/', (req, res) => {
    res.send('Hello World NODEMON!');
    }
);
app.get(
    "/route",
    (req, res) => {
        const frases = [
            "🚀 ¡Hoy es un gran día para desplegar un bug!",
            "🐍 Si no funciona... ¡reinicia el router!",
            "🍕 Código sin pizza es como servidor sin puerto.",
            "🔥 ¡Compila sin miedo y depura después!",
            "🧠 ¿Error 404? La motivación no encontrada.",
            "😎 keep calm and npm install.",
            "👾 El primer paso para arreglarlo es admitir que lo rompiste.",
        ];
        
        const fraseAleatoria = frases[Math.floor(Math.random() * frases.length)];
        res.send(fraseAleatoria);
    });
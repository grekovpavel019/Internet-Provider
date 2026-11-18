import app from "./app.js"
import { env } from "./config/config.js"

const PORT = Number(env.PORT);

app.listen(PORT, _ => {
    console.log(`Сервер запущен на ${PORT} порту`);
})
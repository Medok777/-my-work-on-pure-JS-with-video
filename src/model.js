import image from "./assets/image.png";
import {
  TextBlock,
  TitleBlock,
  ColumnsBlock,
  ImageBlock,
} from "../classes/blocks";

const text = `🚀 Хочешь делать крутые штуки вместе со мной?? Заходи: <a href="https://github.com/Medok777" target="_blank">GitHub</a> | <a href="https://t.me/Medok_777" target="_blank">Telegram</a> | Получи ✨ Эксклюзивные идеи для наших будущих сайтов
✨ Море смеха и тёплых моментов`;

export const model = [
  new TitleBlock("Моя работа по видео на чистом JavaScript 🙃💻", {
    tag: "h2",
    styles: {
      background: "linear-gradient(to right, #ff0099, #493240)",
      color: "#fff",
      "text-align": "center",
      padding: "1.5rem",
    },
  }),
  new ImageBlock(image, {
    styles: {
      padding: "2rem 0",
      display: "flex",
      "justify-content": "center",
    },
    imageStyles: {
      "border-radius": "10px",
      "box-shadow": "0 0  60px rgba(255, 80, 0, 0.6)",
    },
    alt: "Это я бобрито бондито )",
  }),
  new ColumnsBlock(
    [
      "Я: Пишу код, который работает... иногда",
      "Я: Автор самого читаемого кода... среди чайников в Stack Overflow",
      "Я: создаю баги, которые потом героически фиксаю",
      "Я: эксперт по нажатию F5 до тех пор, пока всё не заработает",
      "Я: Делаю вид, что понимаю, что делает мой AI-ассистент",
    ],
    {
      styles: {
        background: "linear-gradient(to bottom, #8e2de2, #4a00e0)",
        padding: "2rem",
        color: "#fff",
        "font-weight": "bold",
      },
    }
  ),
  new TextBlock(text, {
    styles: {
      background: "linear-gradient(to left, #f2994a, #f2c94c)",
      padding: "1rem",
      "font-weight": "bold",
    },
  }),
];

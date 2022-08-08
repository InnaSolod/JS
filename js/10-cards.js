// Работаем с коллекцией карточек в trello
// Метод splice()
// Удалить
// Добавить
// Обновить

const cards = [
  "Карточка-1",
  "Карточка-2",
  "Карточка-3",
  "Карточка-4",
  "Карточка-5",
];

// Удаление (по индексу), метод indexOf()

const cardToRemove = "Карточка-3";
const index = cards.indexOf(cardToRemove);
console.log(index);

cards.splice(index, 1);
console.log(cards);

// Добавление (по индексу)

const cardToInsert = "Карточка-6";
const index1 = 3;

cards.splice(index1, 0, cardToInsert);
console.log(cards);

// Обновление (по индексу)

const cardToUpdate = "Карточка-4";

cards.splice(index1, 1, "Новая карточка-4");
console.log(cards);

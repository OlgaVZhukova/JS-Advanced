class Library {
    //приватное свойство для хранения списка книг
    #books = [];

    // геттер для получения текущего списка книг
    get allBooks() {
        return this.#books.join(", ");
    }

    // Метод добавления книги в библиотеку
    addBook(title) {
        try {
            if (this.#books.includes(title)) {
                throw new Error(
                    "Ошибка: книга с таким названием уже существует в списке."
                );
            }
            this.#books.push(title);
            return this.#books.join(", ");
        } catch (error) {
            return error.message;
        }
    }

    // Метод удаления книги из библиотеки
    removeBook(title) {
        try {
            if (!this.#books.includes(title)) {
                throw new Error("Ошибка: книги с таким названием нет в списке.");
            }
            const titleId = this.#books.indexOf(title);
            this.#books.splice(titleId, 1);
            return this.#books.join(", ");
        } catch (error) {
            return error.message;
        }
    }

    // Метод проверки наличия книги в библиотеке
    hasBook(title) {
        return this.#books.includes(title);
    }

    constructor(initialBookList) {
        const uniqueList = [...new Set(initialBookList)];
        if (uniqueList.length !== initialBookList.length) {
            throw new Error("Список содержит дубликаты");
        }
        this.#books = initialBookList;
    }
}

const bookList = [
    "Капитал",
    "Происхождение видов",
    "Демократия в Америке",
    "Уловка-22",
];

// Создаем библиотеку
let library = new Library(bookList);
console.log(library.allBooks); // Вывод: Капитал, Происхождение видов, Демократия в Америке, Уловка-22

// Добавление новой книги
console.log(library.addBook("Хладнокровное убийство")); // Вывод: Капитал, Происхождение видов, Демократия в Америке, Уловка-22, Хладнокровное убийство

console.log(library.addBook("Капитал")); // Ошибка: книга с таким названием уже существует в списке.

// Удаление книги из списка
console.log(library.removeBook("Уловка-22")); // Вывод: Капитал, Происхождение видов, Демократия в Америке, Хладнокровное убийство
console.log(library.removeBook("Красная книжечка")); // Ошибка: книги с таким названием нет в списке.

//Проверка наличия книги в библиотеке
console.log(library.hasBook("Демократия в Америке")); // Вывод: true
console.log(library.hasBook("Уловка-22")); // Вывод: false
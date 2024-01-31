const initialData = [{
        product: "Apple iPhone 13",
        feedbacks: [{
                id: "1",
                text: "Отличный телефон! Батарея держится долго.",
            },
            {
                id: "2",
                text: "Камера супер, фото выглядят просто потрясающе.",
            },
        ],
    },
    {
        product: "Samsung Galaxy Z Fold 3",
        feedbacks: [{
            id: "3",
            text: "Интересный дизайн, но дорогой.",
        }, ],
    },
    {
        product: "Sony PlayStation 5",
        feedbacks: [{
            id: "4",
            text: "Люблю играть на PS5, графика на высоте.",
        }, ],
    },
];

const userInput = document.querySelector(".user_input");
const submitBtn = document.querySelector(".submit_btn");
const feedbacks = document.querySelector(".feedbacks");
const divError = document.querySelector(".error_msg");

initialData.forEach((element) => {
    const productName = document.createElement("h3");
    productName.textContent = element.product;
    feedbacks.appendChild(productName);
    element.feedbacks.forEach((feedback) => {
        const defaultFeedback = document.createElement("p");
        defaultFeedback.textContent = feedback.text;
        feedbacks.appendChild(defaultFeedback);
    });
});

submitBtn.addEventListener("click", function() {
    try {
        if (
            userInput.value.trim().length < 20 ||
            userInput.value.trim().length > 500
        ) {
            throw new Error("Несоответствующая длина текста");
        }
        const feedbackElem = document.createElement("p");
        feedbackElem.textContent = userInput.value;
        feedbacks.appendChild(feedbackElem);
        divError.textContent = "";
    } catch (error) {
        divError.textContent = error.message;
    }
});
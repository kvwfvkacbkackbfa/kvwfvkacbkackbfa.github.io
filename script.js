// script.js

const scheduleData = {
    monday: [
        { lesson: "Фізика (каб. 29)", color: "#b50d0d" },
        { lesson: "Мистецтво (каб. 39)", color: "#b50d0d" },
        { lesson: "Хімія (каб. 33)", color: "#b50d0d" },
        { 
            lesson: "Інформатика (каб. 12)", 
            color: "#e0e0e0" 
        },
        { 
            lesson: "Українська мова (каб. 39)", 
            color: "#145bff" 
        },
        { lesson: "Алгебра (каб. 39)", color: "#145bff" },
        { lesson: "Зарубіжна література (каб. 39)", color: "#145bff" },
    ],
    tuesday: [
        { lesson: "Всесвітня історія (каб. 39)", color: "#b50d0d" },
        { lesson: "Українська література (каб. 39)", color: "#b50d0d" },
        { 
            lesson: "Англійська мова (каб. 39)", 
            color: "#b50d0d" 
        },
        { lesson: "Фізкультура (хуй знає де)", color: "#e0e0e0" },
        { lesson: "Правознавство (каб. 39)", color: "#145bff" },
        { lesson: "Геометрія (каб. 39)", color: "#145bff" },
        { lesson: "Біологія (каб. 7)", color: "#145bff" },
    ],
    wednesday: [
        { lesson: "Зарубіжна література (каб. 39)", color: "#b50d0d" },
        { lesson: "Історія України (каб. 39)", color: "#b50d0d" },
        { lesson: "Фізкультура (хуй знає де)", color: "#e0e0e0" },
        { lesson: "Фізика (каб. 29)", color: "#b50d0d" },
        { lesson: "Алгебра (каб. 39)", color: "#145bff" },
        { 
            lesson: "Англійська мова (каб. 39)", 
            color: "#145bff" 
        },
        { lesson: "Географія (каб. 39)", color: "#145bff" },
    ],
    thursday: [
        { lesson: "Трудове навчання (каб. 1)", color: "#e0e0e0" },
        { 
            lesson: "Інформатика (каб. 12)", 
            color: "#e0e0e0" 
        },
        { lesson: "Біологія (каб. 39)", color: "#b50d0d" },
        { lesson: "Геометрія (каб. 39)", color: "#b50d0d" },
        { 
            lesson: "Англійська мова (каб. 39)", 
            color: "#145bff" 
        },
        { 
            lesson: "Українська мова (каб. 39)", 
            color: "#145bff" 
        },
    ],
    friday: [
        { lesson: "Основи здоров'я (каб. 39)", color: "#b50d0d" },
        { lesson: "Хімія (каб. 33)", color: "#b50d0d" },
        { lesson: "Фізкультура (хуй знає де)", color: "#e0e0e0" },
        { lesson: "Фізика (каб. 29)", color: "#b50d0d" },
        { lesson: "Алгебра (каб. 39)", color: "#145bff" },
        { 
            lesson: "Історія України (каб. 7) / Географія (каб. 39)", 
            color: "#145bff" 
        },
        { lesson: "Українська література (каб. 38)", color: "#145bff" },
    ],
};

const bellsData = [
    "08:00 - 08:35",
    "08:40 - 09:15",
    "09:30 - 10:05",
    "10:20 - 10:55",
    "11:00 - 11:35",
    "11:40 - 12:15",
    "12:20 - 12:55",
    "чёрт побери какой же я красавчик🤙",
];

const daySelect = document.getElementById("daySelect");
const viewSelect = document.getElementById("viewSelect");
const scheduleDiv = document.getElementById("schedule");

// Рендеринг розкладу
function renderSchedule() {
    const day = daySelect.value;
    const view = viewSelect.value;

    scheduleDiv.innerHTML = ""; // Очистка контейнера

    const items = view === "lessons" ? scheduleData[day] : bellsData;

    items.forEach((item, index) => {
        const scheduleItem = document.createElement("div");
        scheduleItem.className = "schedule-item";

        const numberDiv = document.createElement("div");
        numberDiv.className = "schedule-number";
        numberDiv.textContent = index + 1;

        const lessonDiv = document.createElement("div");
        lessonDiv.className = "lesson";

        if (view === "lessons") {
            lessonDiv.style.backgroundColor = item.color;
            lessonDiv.textContent = item.lesson;
        } else {
            lessonDiv.textContent = item;
        }

        scheduleItem.appendChild(numberDiv);
        scheduleItem.appendChild(lessonDiv);

        scheduleDiv.appendChild(scheduleItem);
    });
}

// Додавання обробників подій
daySelect.addEventListener("change", renderSchedule);
viewSelect.addEventListener("change", renderSchedule);

// Показ початкового стану
renderSchedule();
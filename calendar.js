document.addEventListener('DOMContentLoaded', function() {
    const daysTag = document.querySelector(".days"),
        currentDate = document.querySelector(".current-date"),
        prevNextIcon = document.querySelectorAll(".icons span"),
        eventInfo = document.querySelector(".event-info");

    let date = new Date(),
        currYear = date.getFullYear(),
        currMonth = date.getMonth();

    const months = ["January", "February", "March", "April", "May", "June", "July",
                    "August", "September", "October", "November", "December"];

    const events = {
        "2024-06-05": "City Marathon",
        "2024-06-12": "High School Football Championship",
        "2024-06-18": "Regional Basketball Tournament - Day 1",
        "2024-06-19": "Regional Basketball Tournament - Day 2",
        "2024-06-20": "Regional Basketball Tournament - Day 3",
        "2024-06-25": "Community Soccer Day",
        "2024-07-01": "Independence Day Softball Classic - Day 1",
        "2024-07-02": "Independence Day Softball Classic - Day 2",
        "2024-07-03": "Independence Day Softball Classic - Day 3",
        "2024-07-04": "Independence Day Softball Classic - Grand Finale",
        "2024-07-10": "Beach Volleyball Championship"
    };

    const renderCalendar = () => {
        let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(),
            lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(),
            lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(),
            lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate();
        let liTag = "";

        for (let i = firstDayofMonth; i > 0; i--) {
            liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
        }

        for (let i = 1; i <= lastDateofMonth; i++) {
            let isToday = i === date.getDate() && currMonth === new Date().getMonth() 
                         && currYear === new Date().getFullYear() ? "active" : "";
            liTag += `<li class="${isToday}" data-date="${currYear}-${String(currMonth + 1).padStart(2, '0')}-${String(i).padStart(2, '0')}">${i}</li>`;
        }

        for (let i = lastDayofMonth; i < 6; i++) {
            liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`;
        }
        currentDate.innerText = `${months[currMonth]} ${currYear}`;
        daysTag.innerHTML = liTag;

        const dateElements = document.querySelectorAll(".days li");
        dateElements.forEach(dateElement => {
            dateElement.addEventListener("click", () => {
                if (!dateElement.classList.contains("inactive")) {
                    dateElements.forEach(element => {
                        element.classList.remove("active");
                    });
                    dateElement.classList.add("active");

                    const selectedDate = dateElement.getAttribute("data-date");
                    eventInfo.innerText = events[selectedDate] ? events[selectedDate] : "No events for this day.";
                }
            });
        });
    }
    renderCalendar();

    prevNextIcon.forEach(icon => {
        icon.addEventListener("click", () => {
            currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;

            if(currMonth < 0 || currMonth > 11) {
                date = new Date(currYear, currMonth, new Date().getDate());
                currYear = date.getFullYear();
                currMonth = date.getMonth();
            } else {
                date = new Date();
            }
            renderCalendar();
        });
    });
});

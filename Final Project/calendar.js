const daysTag = document.getElementById("days"),
DateNow = document.getElementById("current-date")
prevNextIcon = document.querySelectorAll(".icons span");

var date = new Date(),
YearNow = date.getFullYear(),
MonthNow = date.getMonth();

const months = ["January", "February", "March", "April", "May", "June", "July",
              "August", "September", "October", "November", "December"];

const CalendarStart = () => {
    var firstDayofMonth = new Date(YearNow, MonthNow, 1).getDay(), 
    lastDateofMonth = new Date(YearNow, MonthNow + 1, 0).getDate(), 
    lastDayofMonth = new Date(YearNow, MonthNow, lastDateofMonth).getDay(), 
    lastDateofLastMonth = new Date(YearNow, MonthNow, 0).getDate(); 
    var days = "";

    for (var i = firstDayofMonth; i > 0; i--) { 
        days += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
    }

    for (var i = 1; i <= lastDateofMonth; i++) { 
        var isToday = i === date.getDate() && MonthNow === new Date().getMonth() 
                     && YearNow === new Date().getFullYear() ? "active" : "";
        days += `<li class="${isToday}">${i}</li>`;
    }

    for (var i = lastDayofMonth; i < 6; i++) {
        days += `<li class="inactive">${i - lastDayofMonth + 1}</li>`
    }
    DateNow.innerText = `${months[MonthNow]} ${YearNow}`;
    daysTag.innerHTML = days;
}
CalendarStart();

prevNextIcon.forEach(icon => { 
    icon.addEventListener("click", () => { 
        MonthNow = icon.id === "prev" ? MonthNow - 1 : MonthNow + 1;

        if(MonthNow < 0 || MonthNow > 11) { 

            date = new Date(YearNow, MonthNow, new Date().getDate());
            YearNow = date.getFullYear(); 
            MonthNow = date.getMonth(); 
        } else {
            date = new Date(); 
        }
        CalendarStart(); 
    });
});
function myFunction(x) {
    document.getElementById("OverlayMenu").style.width = "250px";

  }
  function closebtn(){
    document.getElementById("OverlayMenu").style.width = "0";
  }
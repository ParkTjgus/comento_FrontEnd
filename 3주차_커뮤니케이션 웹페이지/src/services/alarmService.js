const alarmForm = document.getElementsByClassName("alarm_form")[0];
const alarmList = document.getElementsByClassName("alarm_list")[0];

let alarms = [];

const renderAlarmList = () => {
  alarmList.innerHTML = alarms
    .map(
      (alarm, index) =>
        `<li>
      [${index}] ${alarm.alarm_hour}:${alarm.alarm_minute}:${alarm.alarm_second}
    </li>`
    )
    .join("");
};

alarmForm.addEventListener("submit", (e) => {
  e.preventDefault(); //새로고침 방지

  if (alarms.length >= 3) {
    alert("알람은 최대 3개까지 설정 가능합니다.");
    return;
  }

  const alarm_hour = document
    .getElementById("alarm_hour")
    .value.padStart(2, "0");
  const alarm_minute = document
    .getElementById("alarm_minute")
    .value.padStart(2, "0");
  const alarm_second = document
    .getElementById("alarm_second")
    .value.padStart(2, "0");

  alarms.push({ alarm_hour, alarm_minute, alarm_second });
  renderAlarmList();
});

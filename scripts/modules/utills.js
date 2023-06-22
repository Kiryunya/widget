export const getCurrentDateTime = () => {
  const monthName = [
    "январь",
    "февраль",
    "март",
    "апрель",
    "май",
    "июнь",
    "июль",
    "август",
    "сентябрь",
    "октябрь",
    "ноябрь",
    "декабрь",
  ];

  const weekDay = [
    "воскресенье",
    "понедельник",
    "вторник",
    "среда",
    "четверг",
    "пятница",
    "суббота",
  ]

  const date = new Date()

  const month = monthName[date.getMonth()];
  
  const dayOfMonth = date.getDate();
  
  const dayOfWeek = weekDay[date.getDay()];
  
  const year = date.getFullYear();
  
  let hours = date.getHours();

  let minutes = date.getMinutes();
  
  if (hours < 10) {
    hours = `0${hours}`;
  }
  
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return { month, dayOfMonth, dayOfWeek, hours, minutes, year };
};

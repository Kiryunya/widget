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
  ];

  const date = new Date();

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

export const getWindDirection = (deg) => {
  const directions = [
    "&#8593",
    "&#8598",
    "&#8592",
    "&#8601",
    "&#8595",
    "&#8600",
    "&#8594",
    "&#8599",
  ];

  const i = Math.round(deg / 45) % 8;
  return directions[i];
};

export const calculateDewPoint = (temp, humidity) => {
  const a = 17.27;
  const b = 237.7;

  const ft = (a * temp) / (b + temp) + Math.log(humidity / 100);
  const dewPoint = (b * ft) / (a - ft);
  return dewPoint.toFixed(1);
};

export const convertPressure = (pressure) => {
  const mmHg = pressure * 0.750063755419211;
  return mmHg.toFixed(0);
};

export const getWeatherForecastData = (data) => {
  const forecast = data.list.filter(
    (item) =>
      new Date(item.dt_txt).getHours() === 12 &&
      new Date(item.dt_txt).getDate() > new Date().getDate()
  );

  const forecastData = forecast.map((item) => {
    const date = new Date(item.dt_txt);

    const weekDayShort = ["вс", "пн", "вт", "ср", "чт", "пт", "сб"];

    const dayOfWeek = weekDayShort[date.getDay()];

    const weatherIcon = item.weather[0].icon;

    let minTemp = Infinity;
    let maxTemp = -Infinity;

    for (let i = 0; i < data.list.length; i++) {
      const temp = data.list[i].main.temp;
      const tempDate = new DataTransfer(data.list[i].dt_txt);

      if (tempDate.getData === date.getDate()) {
        if (temp < minTemp) {
          minTemp = temp;
        } else {
          maxTemp = temp;
        }
      }
    }

    return {
      dayOfWeek,
      weatherIcon,
      minTemp,
      maxTemp,
    };
  });

  return forecastData;
};

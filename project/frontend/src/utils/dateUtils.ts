export const isToday = (targetDate: Date) => {
  const today = new Date();
  return (
    targetDate.getDate() === today.getDate() &&
    targetDate.getMonth() === today.getMonth() &&
    targetDate.getFullYear() === today.getFullYear()
  );
};

export const getTimeFromDate = (targetDate: Date) => {
  const hours = targetDate.getHours();
  const minutes = targetDate.getMinutes();

  return `${hours.toString().length === 1 ? '0' + hours : hours}:${
    minutes.toString().length === 1 ? '0' + minutes : minutes
  }`;
};

export const getDayAndMonthFromDate = (targetDate: Date) => {
  const day = targetDate.getDate();
  const month = targetDate.getMonth() + 1;

  return `${day.toString().length === 1 ? '0' + day : day}.${
    month.toString().length === 1 ? '0' + month : month
  }`;
};

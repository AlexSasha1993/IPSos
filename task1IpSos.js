/* 1) Определить минимальный порог времени заполнения интервью (например, 30 секунд).
   2) Для каждой оценки посчитать разницу между наибольшей и наименьшей оценкой в данном интервью.
   3) Если сумма этих разниц меньше некоторого порога (например, 10), то интервью считается подозрительным.
   4) Если время заполнения интервью меньше минимального порога, то интервью также считается подозрительным.
   5) В противном случае, интервью считается честным.
*/

// Минимальное время заполнения интервью (в секундах)
const minTime = 30;

// Минимальная сумма разниц между оценками для честного интервью
const minDiffSum = 10;

// Функция для определения подозрительности интервью
function isSuspiciousInterview(interview) {
  const time = parseInt(interview[1]); // время заполнения
  if (time < minTime) {
    return true; // интервью подозрительно
  }
  let diffSum = 0; // сумма разниц между оценками
  for (let i = 2; i < interview.length; i++) {
    const rating = parseInt(interview[i]);
    const minRating = Math.min(...interview.slice(2));
    const maxRating = Math.max(...interview.slice(2));
    const diff = maxRating - minRating;
    diffSum += diff;
  }
  if (diffSum < minDiffSum) {
    return true; // интервью подозрительно
  }
  return false; // интервью честное
}

// Пример использования функции
const data = [
  ['1', '60', '5', '4', '3', '2', '1'],
  ['2', '25', '5', '5', '5', '5', '5'],
  ['3', '45', '4', '4', '3', '3', '2'],
];
const suspiciousInterviews = data.filter(isSuspiciousInterview);
console.log(suspiciousInterviews); // [["2", "25", "5", "5", "5", "5", "5"]] подозрительное

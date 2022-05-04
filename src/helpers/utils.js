// Генерирует массив их чисел от "startNumber" до "endNumber"
export const range = (startNumber, endNumber) => {
  return [...Array(endNumber).keys()].map(el => el + startNumber)
}

export const getItemFromLocalStorage = key => {
  try {
    return JSON.parce(localStorage.getItem(key))
  } catch (evt) {
    console.log('Error getting data from localStorage', evt);
    return null
  }
}

export const setItemInLocalStorage = (key, data) => {
  try {
    localStorage.setItem(key, JSON.stringify(data))
  } catch (evt) {
    console.log('Error saving data in localStorage', evt);
    return null
  }
}

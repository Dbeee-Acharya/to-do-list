
const storeItem = (key, value) => {
    //logic to store task

    localStorage.setItem(key, JSON.stringify(value));
}

const getStoredItems = (itemKey) => {
    //logic to get tasks stored in localstorage

    return localStorage.getItem(itemKey)
}

export {storeItem, getStoredItems}

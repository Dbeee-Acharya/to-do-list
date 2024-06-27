const storeTask = (task) => {
    //logic to store task

    localStorage.setItem("tasks", JSON.stringify(task));
}

const getStoredItems = (itemKey) => {
    //logic to get tasks stored in localstorage

    return localStorage.getItem(itemKey)
}

export {storeTask, getStoredItems}

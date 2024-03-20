export const addItem = (item) => ({
    type: 'ADD_ITEM',
    payload: item
});

export const initializeData = (data) => ({
    type: 'INITIALIZE_DATA',
    payload: data
});
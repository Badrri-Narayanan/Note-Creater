export const AddItemToList = (list_of_tasks, new_item) => {
    let new_list = [
        ...list_of_tasks,
        new_item
    ];
    return new_list
}

export const RemoveItemFromList = (list_of_tasks, index) => {
    let new_list = [
        ...list_of_tasks,
    ]
    new_list.splice(index, 1)
    return new_list;
}
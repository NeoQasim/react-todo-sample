export const reducer = (state, action) => {// reducer is a function that controls the action of type of dispatch function
    if (action.type === "EMPTY_INPUT") {
        return {
            ...state,
            modal: true,
            modalcontent: "please enter text to add"
        }
    }
    else if (action.type === "REMOVE_MODAL") {
        return {
            ...state,
            modal: false,
            modalcontent: ""
        }
    }
    else if (action.type === "ADD_TODO") {
        return {
            ...state,
            todos: [
                ...state.todos, action.payload
            ],
            modal: true,
            modalcontent: "todo added succesfully"
        }
    }
}
import { useReducer, createContext } from "react";

// ----- USE REDUCER SIDE ----- //

// Initial State and Action
const initialState = {
    basket: []
}
const ACTION = {
    ADD_TO_BASKET: 'ADD_TO_BASKET'
}

// Create Reducer function
const reducer = (state, action) => {
    switch (action.type) {
        case ACTION.ADD_TO_BASKET:
            return {
                basket: [
                    ...state.basket, action.item
                ]
            };

        default:
            return state
    }
}

// ----- USE CONTEXT SIDE ----- //

// Create Context
export const StateContext = createContext();

// context and provider
export const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const value = {
        basket: state.basket,
        addToBasket: (id, title, price, image, rating) => {
            dispatch({
                type: ACTION.ADD_TO_BASKET,
                item: {
                    id: id,
                    title: title,
                    image: image,
                    price: price,
                    rating: rating
                }
            })
        }
    }

    return (
        <StateContext.Provider value={value}>
            {children}
        </StateContext.Provider>
    )
}
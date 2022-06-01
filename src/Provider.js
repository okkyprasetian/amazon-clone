import { useReducer, createContext } from "react";


// ----- USE REDUCER SIDE ----- //

// Initial State and Action
const initialState = {
    basket: [],
    user: null
}
const ACTION = {
    ADD_TO_BASKET: 'ADD_TO_BASKET',
    REMOVE_FROM_BASKET: 'REMOVE_FROM_BASKET',
    SET_USER: 'SET_USER'
}

// Create Reducer function
const reducer = (state, action) => {
    switch (action.type) {
        case ACTION.ADD_TO_BASKET:
            return {
                ...state,
                basket: [
                    ...state.basket, action.item
                ]
            };
        case ACTION.REMOVE_FROM_BASKET:
            return{
                ...state,
                basket: [...state.basket.filter(item => item.id !== action.item.id)]
            };
        case ACTION.SET_USER:
            return{
                ...state,
                user: action.user
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

    // Install usereducer in this provider for global state using usecontext
    const [state, dispatch] = useReducer(reducer, initialState)

    const value = {

        // Global State
        basket: state.basket,
        user: state.user,

        // Add new item to basket
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
        },

        // Remove item from basket
        removeFromBasket: id => {
            dispatch({
                type: ACTION.REMOVE_FROM_BASKET,
                item: {id: id}
            })
        },

        // Sum of all basket item price
        totalPrice: state.basket.length <= 0 ? 0 : state.basket.map(e => e.price).reduce((acc, curr) => acc + curr),

        // Set user or loggin in user
        setUser: authUser => {
            dispatch({
                type: ACTION.SET_USER,
                user: authUser
            })
        }
    }

    return (
        <StateContext.Provider value={value}>
            {children}
        </StateContext.Provider>
    )
}

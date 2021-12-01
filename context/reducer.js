export let data = {
    cartItem:[]
}

// console.log(data,'data red')
export function reducer(state, action) {
    switch (action.type) {
        case "AUTH_USER": {
            return {
                ...state,
                authUser: action.payload
            }
        }

        case "ADD_TO_CART": {
            // console.log(action.payload,'Cart in reducer')
            return {
                ...state,
                cartItem: action.payload
            }
        }
      
        default:
            return state;

        }
    }
    // console.log(data.cartItem,'data in reducer')

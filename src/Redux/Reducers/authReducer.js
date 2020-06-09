const INITIAL_STATE = {
    username: '',
    dataCat: [],
    image: '',
}

export const authReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {...state, username: action.payload
            }
        case 'GET_DATA':
            return {...state, dataCat: action.payload
            }
        case 'IMAGE':
            return {...state, image: action.payload
            }
        case 'logout':
            return {...state, username: ''
            }
        default:
            return state
    }
}
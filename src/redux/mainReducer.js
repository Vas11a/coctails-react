import {
    pinaColada, whiskeyCola, mojito, b_52, sex_on_beach, daiquiri, cuba_libre, jagerbomb, blue_lagon, long_island,
    aperol_spritz, bellini, bloody_mary, caipirinha, campari_tonic, cosmopolitan, espresso_martini, gimlet, glintwine,
    jagermonstr, manhattan, margarita, mimosa, negroni, tequila_boom, tequila_sunrise, white_russian, gin_tonic, beer_vodka
} from './../imgsImport'

const SHOW_MORE_MESS_AC = 'SHOW_MORE_MESS_AC'
const UPDATE_FIRST_INPUT_AC ='UPDATE_FIRST_INPUT_AC'
const UPDATE_SEC_INPUT_AC = 'UPDATE_SEC_INPUT_AC'
const UPDATE_TH_INPUT_AC = 'UPDATE_TH_INPUT_AC'
const FIND_USER_COCTAIL_AC = 'FIND_USER_COCTAIL_AC'

let initialState = {
    show: 8,
    firstInput: '',
    secInput: '',
    thInput: '',
    coctails: [
        { id: 1, name: 'Pina Colada', photo: pinaColada, ingridients: [{ in: 'pineaple juice', mas: '120ml', id: 1 }, { in: 'rum', mas: '60ml', id: 2 }, { in: 'coconut cream', mas: '60ml', id: 3 }] },
        { id: 2, name: 'Whiskey Cola', photo: whiskeyCola, ingridients: [{ in: 'whiskey', mas: '50ml', id: 1 }, { in: 'coca cola', mas: '200ml', id: 2 }, { in: 'cocos', mas: '100g', id: 3 }] },
        { id: 3, name: 'Mojito', photo: mojito, ingridients: [{ in: 'soda', mas: '150ml', id: 1 }, { in: 'rum', mas: '60ml', id: 2 }, { in: 'sugar', mas: '10g', id: 3 }, { in: 'lemon juice', mas: '20ml', id: 4 }, { in: 'lime', mas: '1/4', id: 5 }] },
        { id: 4, name: 'B-52', photo: b_52, ingridients: [{ in: 'coffee liqueur', mas: '1/3', id: 1 }, { in: 'cream liqueur', mas: '1/3', id: 2 }, { in: 'orange liqueur', mas: '1/3', id: 3 }] },
        { id: 5, name: 'Blue Lagoon', photo: blue_lagon, ingridients: [{ in: 'soda', mas: '100ml', id: 1 }, { in: 'vodka', mas: '50ml', id: 2 }, { in: 'blue curacao', mas: '50ml', id: 3 }, { in: 'lemon juice', mas: '20ml', id: 4 }, { in: 'orange juice', mas: '50ml', id: 5 }] },
        { id: 6, name: 'Sex on the beach', photo: sex_on_beach, ingridients: [{ in: 'vodka', mas: '50ml', id: 1 }, { in: 'peach liqueur', mas: '25ml', id: 2 }, { in: 'cranberry juice', mas: '50ml', id: 3 }, { in: 'orange juice', mas: '100ml', id: 4 }] },
        { id: 7, name: 'Cuba Libre', photo: cuba_libre, ingridients: [{ in: 'rum', mas: '50ml', id: 1 }, { in: 'coca cola', mas: '150ml', id: 2 }, { in: 'lime juice', mas: '20ml', id: 3 }] },
        { id: 8, name: 'Daiquiri', photo: daiquiri, ingridients: [{ in: 'rum', mas: '50ml', id: 1 }, { in: 'sugar', mas: '10g', id: 2 }, { in: 'lime juice', mas: '25ml', id: 3 }] },
        { id: 9, name: 'Long Island', photo: long_island, ingridients: [{ in: 'vodka', mas: '20ml', id: 1 }, { in: 'gin', mas: '20ml', id: 2 }, { in: 'rum', mas: '20ml', id: 3 }, { in: 'tequila', mas: '20ml', id: 4 }, { in: 'orange liqueur', mas: '20ml', id: 5 }, { in: 'coca cola', mas: '200ml', id: 6 }] },
        { id: 10, name: 'Jagerbomb', photo: jagerbomb, ingridients: [{ in: 'jagermeister', mas: '50ml', id: 1 }, { in: 'red bull', mas: '150ml', id: 2 }] },
        { id: 11, name: 'Aperol Spritz', photo: aperol_spritz, ingridients: [{ in: 'aperol', mas: '100ml', id: 1 }, { in: 'prosecco', mas: '150ml', id: 2 }, { in: 'soda', mas: 'to top up', id: 3 }] },
        { id: 12, name: 'Bellini', photo: bellini, ingridients: [{ in: 'peach juice', mas: '100ml', id: 1 }, { in: 'prosecco', mas: '100ml', id: 2 }] },
        { id: 13, name: 'Bloody Mary', photo: bloody_mary, ingridients: [{ in: 'vodka', mas: '50ml', id: 1 }, { in: 'tomato juice', mas: '150ml', id: 2 }, { in: 'salt', mas: '3g', id: 3 }, { in: 'tabasco', mas: '4 dash', id: 4 }] },
        { id: 14, name: 'Caipirinha', photo: caipirinha, ingridients: [{ in: 'cacha', mas: '200ml', id: 1 }, { in: 'lime', mas: '1/2', id: 2 }, { in: 'sugar', mas: '5g', id: 3 }] },
        { id: 15, name: 'Campari Tonic', photo: campari_tonic, ingridients: [{ in: 'tonic', mas: '200ml', id: 1 }, { in: 'campari', mas: '30ml', id: 2 }, { in: 'lime', mas: '1/4', id: 3 }] },
        { id: 16, name: 'Cosmopolitan', photo: cosmopolitan, ingridients: [{ in: 'vodka', mas: '45ml', id: 1 }, { in: 'orange liqueur', mas: '15ml', id: 2 }, { in: 'cranberry juice', mas: '30ml', id: 3 }, { in: 'lime juice', mas: '10ml', id: 4 }] },
        { id: 17, name: 'Espresso Martini', photo: espresso_martini, ingridients: [{ in: 'vodka', mas: '100ml', id: 1 }, { in: 'coffe', mas: '50ml', id: 2 }, { in: 'coffe liqueur', mas: '50ml', id: 3 }] },
        { id: 18, name: 'Gimlet', photo: gimlet, ingridients: [{ in: 'gin', mas: '50ml', id: 1 }, { in: 'sugar', mas: '100g', id: 2 }, { in: 'lime', mas: '1', id: 3 }] },
        { id: 19, name: 'Glintwine', photo: glintwine, ingridients: [{ in: 'red vine', mas: '750ml', id: 1 }, { in: 'anise', mas: '2', id: 2 }, { in: 'cloves', mas: '4', id: 3 }, { in: 'sugar', mas: '50g', id: 4 }, { in: 'cinnamon', mas: '1', id: 5 }] },
        { id: 20, name: 'Jagermonstr', photo: jagermonstr, ingridients: [{ in: 'jagermeister', mas: '50ml', id: 1 }, { in: 'orange juice', mas: '150ml', id: 2 }, { in: 'grenadin', mas: '30ml', id: 3 }] },
        { id: 21, name: 'Manhattan', photo: manhattan, ingridients: [{ in: 'whiskey', mas: '75ml', id: 1 }, { in: 'vermouth', mas: '30ml', id: 2 }, { in: 'cherry syrup', mas: '5ml', id: 3 }] },
        { id: 22, name: 'Margarita', photo: margarita, ingridients: [{ in: 'tequila', mas: '50ml', id: 1 }, { in: 'lime juice', mas: '25ml', id: 2 }, { in: 'orange liqueur', mas: '20ml', id: 3 }] },
        { id: 23, name: 'Mimosa', photo: mimosa, ingridients: [{ in: 'orange juice', mas: '100ml', id: 1 }, { in: 'prosecco', mas: '100ml', id: 2 }] },
        { id: 24, name: 'Negroni', photo: negroni, ingridients: [{ in: 'gin', mas: '25ml', id: 1 }, { in: 'vermout', mas: '25ml', id: 2 }, { in: 'campary', mas: '25ml', id: 3 }] },
        { id: 25, name: 'Tequila Boom', photo: tequila_boom, ingridients: [{ in: 'tequila', mas: '50ml', id: 1 }, { in: 'sprite', mas: '150ml', id: 2 }] },
        { id: 26, name: 'Tequila Sunrise', photo: tequila_sunrise, ingridients: [{ in: 'tequila', mas: '50ml', id: 1 }, { in: 'orange juice', mas: '150ml', id: 2 }, { in: 'grenadin', mas: '30ml', id: 3 }] },
        { id: 27, name: 'White Russian', photo: white_russian, ingridients: [{ in: 'vodka', mas: '1/3', id: 1 }, { in: 'coffee liqueur', mas: '1/3', id: 2 }, { in: 'milk cream', mas: '1/3', id: 3 }] },
        { id: 28, name: 'Gin Tonic', photo: gin_tonic, ingridients: [{ in: 'gin', mas: '50ml', id: 1 }, { in: 'tonic', mas: '150ml', id: 2 }] },
        { id: 29, name: 'Vodka-Beer', photo: beer_vodka, ingridients: [{ in: 'beer', mas: '400ml', id: 1 }, { in: 'vodka', mas: '100ml', id: 2 }] },
    ],
    userCoctails: [] 
}


const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_MORE_MESS_AC:
            return {
                ...state,
                show: state.show+=8
            }

        case UPDATE_FIRST_INPUT_AC:
            return {
                ...state,
                firstInput: action.updateText.toLowerCase()
            }
        case UPDATE_SEC_INPUT_AC:
            return {
                ...state,
                secInput: action.updateText.toLowerCase()
            }
        case UPDATE_TH_INPUT_AC:
            return {
                ...state,
                thInput: action.updateText.toLowerCase()
            }
        case FIND_USER_COCTAIL_AC:
            state.userCoctails = []
            state.coctails.forEach(e => {
                let ing = e.ingridients
                let resem = 0;
                let searchCoctail = () =>{
                    ing.forEach(el => {
                        if (el.in === state.firstInput.trim()) resem += 1
                    })
                    ing.forEach(el => {
                        if (el.in === state.secInput.trim()) resem += 1
                    })
                    ing.forEach(el => {
                        if (el.in === state.thInput.trim()) resem += 1
                    }) 
                }
                let first = state.firstInput.trim(), sec = state.secInput.trim(), th = state.thInput.trim()
                if (first !== '' && sec !== '' && th !== '' ) {
                    
                    searchCoctail()
                    if (resem === 3) state.userCoctails.push(e)  

                } else if ((first === '' && sec !== '' && th !== '') || (sec === '' && first !== '' && th !== '') || (th === '' && sec !== '' && first !== '')) {
                    
                    searchCoctail()
                    if (resem === 2) state.userCoctails.push(e)  
                } else {
                    searchCoctail()
                    if (resem === 1) state.userCoctails.push(e)
                }
            })
        
            
            return{
                ...state,
                userCoctails: state.userCoctails
            }
        default:
            return state;
    }
}

export const showMoreMessAC = () => ({ type: SHOW_MORE_MESS_AC})

export const updateFirstInputAC = (mess) => {
    return {
        type: UPDATE_FIRST_INPUT_AC,
        updateText: mess
    }
}

export const updateSecInputAC = (mess) => {
    return {
        type: UPDATE_SEC_INPUT_AC,
        updateText: mess
    }
}

export const updateThInputAC = (mess) => {
    return {
        type: UPDATE_TH_INPUT_AC,
        updateText: mess
    }
}

export const findUserCoctailAC = () => ({type: FIND_USER_COCTAIL_AC})

export default mainReducer;
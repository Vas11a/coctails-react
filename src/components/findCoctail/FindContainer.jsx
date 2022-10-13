import { connect } from "react-redux";
import Find from "./Find";
import { updateFirstInputAC, updateSecInputAC, updateThInputAC, findUserCoctailAC } from './../../redux/mainReducer'

let mapStateToProps = (state) => {
    return {
        fInput: state.recepies.firstInput,
        sInput: state.recepies.secInput,
        tInput: state.recepies.thInput,
        userCoctail: state.recepies.userCoctails
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updatefInput: (mess) => {
            dispatch(updateFirstInputAC(mess))
        },
        updateSInput: (mess) => {
            dispatch(updateSecInputAC(mess))
        },
        updateTInput: (mess) => {
            dispatch(updateThInputAC(mess))
        },
        findUserCoctail: () => {
            dispatch(findUserCoctailAC())
        }
    }
}


const FindContainer = connect(mapStateToProps, mapDispatchToProps)(Find) 

export default FindContainer;
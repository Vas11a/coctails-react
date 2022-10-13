import { connect } from "react-redux";
import AllCoctails from './AllCoctails'
import {showMoreMessAC} from './../../redux/mainReducer'

let mapStateToProps = (state) => {
    return {
        coctailState: state.recepies.coctails,
        maxShow: state.recepies.show
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        showMoreMess: () => {
            dispatch(showMoreMessAC())
        },
    }
}



const DialogContainer = connect(mapStateToProps, mapDispatchToProps)(AllCoctails);

export default DialogContainer;
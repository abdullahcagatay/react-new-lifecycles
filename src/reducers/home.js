import {
	requestData
} from "../services/networkServices";
import * as Endpoints from "../const/endpoints";

//ACTIONS
const BUTTON_CLICKED_ACTION = "reducer/BUTTON_CLICKED_ACTION";
const RESET_DATA_ACTION = "reducer/RESET_DATA_ACTION";



//REDUCERS
export default (
	state = {	
		enteredData: {name:"",lastName:""}, 
		buttonClicked:false
	}, action) => {
		switch (action.type) {
			case BUTTON_CLICKED_ACTION:
				return {
					...state,
					enteredData: action.enteredData,
					buttonClicked: action.buttonClicked
				}
			case RESET_DATA_ACTION:
				return {
					...state,
					enteredData: action.enteredData,
					buttonClicked: action.buttonClicked
				}
			default:
				return state;
		}
	}


//ACTION CREATORS
export function exampleActionCreator(enteredData) {
	return function (dispatch) {
		dispatch({
			type: BUTTON_CLICKED_ACTION,
			enteredData: enteredData,
			buttonClicked:true
		});
	}
}
export function resetReduxData() {
	return function (dispatch) {
		dispatch({
			type: RESET_DATA_ACTION,
			enteredData: {name:"",lastName:""},
			buttonClicked:false
		});
	}
}

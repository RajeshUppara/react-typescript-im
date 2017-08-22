import request from 'superagent';
import {LOGIN, LOGOUT, TODAY_CLASSES, MONTH_CLASSES,CUSTOM_CLASSES,MONTH_PAYMENTS,CUSTOM_PAYMENTS,MONTH_TEACHERPAYMENTS,CUSTOM_TEACHERPAYMENTS} from "../actions/ActionTypes";

const API_URL = "http://localhost:5002/rest";


const getApiGenerator = next => (route, name, formData) => request
	.get(route)
    .query(formData)
	.end((err, res) => {
		if (err) {
			return next({
				type: `${name}_ERROR`,
				err
			})
		}
		const data = JSON.parse(res.text)
		next({
			type: `${name}_RECEIVED`,
			data
		})
	})
const postApiGenerator = next => (route, name, formData) => request
	.post(route)
   // .set('Content-Type', 'application/x-www-form-urlencoded')
    .set('Content-Type', 'application/json')
    .send(formData)
	.end((err, res) => {
		if (err) {
			return next({
				type: `${name}_ERROR`,
				err
			})
		}
		const data = JSON.parse(res.text);
		next({
			type: `${name}_RECEIVED`,
			data
		})
	})


const DataService = store => next => action => {    
    next(action);
    const postApi = postApiGenerator(next);
    let formData = {
        data:{
            email: "prasad.srg@gmail.com",
            password: "Test1234"
        }
    };
   // formData = JSON.parse(formData);
	switch (action.type) {
        case LOGIN: postApi(`${API_URL}/signin`, LOGIN, formData);  break;
		case TODAY_CLASSES:
						formData = {
							data : {
								startDate: action.startDate,
								endDate: action.endDate
							}
						} 
						postApi(`${API_URL}/classtimings`, 'CLASS_TIMININGS', formData);  
						break;
		case MONTH_CLASSES: 
						formData = {
							data : {
								startDate: action.startDate,
								endDate: action.endDate
							}
						} 
			postApi(`${API_URL}/classtimings`, 'CLASS_TIMININGS', formData);  
         break; 
		case CUSTOM_CLASSES: 
						formData = {
							data : {
								startDate: action.startDate,
								endDate: action.endDate
							}
						} 
			postApi(`${API_URL}/classtimings`, 'CLASS_TIMININGS', formData);  break;

		case MONTH_PAYMENTS: 
						formData = {
							data : {
								startDate: action.startDate,
								endDate: action.endDate
							}
						} 
			postApi(`${API_URL}/studentcredits`, 'STUDENT_PAYMENTS', formData);  
         break; 
		case CUSTOM_PAYMENTS: 
						formData = {
							data : {
								startDate: action.startDate,
								endDate: action.endDate
							}
						} 
			postApi(`${API_URL}/studentcredits`, 'STUDENT_PAYMENTS', formData);
        break; 
		default: break; 
			case MONTH_TEACHERPAYMENTS: 
						formData = {
							data : {
								startDate: action.startDate,
								endDate: action.endDate
							}
						} 
			postApi(`${API_URL}/teacherpayments`, 'TEACHER_PAYMENTS', formData);  
         break; 
		case CUSTOM_TEACHERPAYMENTS: 
						formData = {
							data : {
								startDate: action.startDate,
								endDate: action.endDate
							}
						} 
			postApi(`${API_URL}/teacherpayments`, 'TEACHER_PAYMENTS', formData);
        break; 
	}

};
export default DataService;
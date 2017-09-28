/* globals localStorage */
import axios from 'axios'
const authUrl = 'https://dev-414554-admin.oktapreview.com/api/v1/users?activate=true'
export default {
  login (firstname, lastname, email, username, password, question, answer) {
    const headers = {'Accept': 'application/json', 'Content-Type': 'application/json;charset=UTF-8', 'Authorization': 'SSWS 00-NP11rVjcqNBCZB_xHovLsSDZdaRHmx83GtkQA2x', 'Access-Control-Allow-Origin': `${authUrl}`, 'Access-Control-Max-Age': '1728000', 'Access-Control-Allow-Headers': 'Content-Type, Content-Range, Content-Disposition, Content-Description', 'Access-Control-Allow-Method': 'DELETE, HEAD, GET, OPTIONS, POST, PUT'}
    const signup = {'profile': {'firstName': firstname, 'lastName': lastname, 'email': email, 'login': username}, 'credentials': {'password': {'value': password}, 'recovery_question': {'question': question, 'answer': answer}}}
    console.log(JSON.stringify(signup))
    const result = axios.post(`${authUrl}`, JSON.stringify(signup), {'headers': headers}).then(function (response) { console.log(response.data) })
    return result
  }
}

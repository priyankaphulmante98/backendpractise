import {baseUrl} from './Url'
import commonFunction from './Fetch'


export const postFunction = async (data, header) => {

    return await commonFunction("POST",`${baseUrl}/task/post`,data,header)
    

}


export const  getFunction = async ()=> {

    return await commonFunction("GET", `${baseUrl}/task`, "")
 }

 export const deleteFunction = async (id) => {
    return await commonFunction("DELETE", `${baseUrl}/task/delete/${id}`,{})


 }

 export const getSingleTaskFunction = async (id) => {
    return await commonFunction("GET", `${baseUrl}/task/${id}`)
 }

 export const updateTaskFunction = async (id, header, data) => {
    return await commonFunction("PUT", `${baseUrl}/task/update/${id}`,data, header)
 } 
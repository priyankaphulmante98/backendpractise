import axios from 'axios'


    async function commonFunction(methods, url, body, header){
     
        let config = {

            method:methods,
            url :url,
            headers:header?
            header:{
                'Content-Type':"application/json"
            },

            data:body
        }
        return axios(config).then((data)=>{
            return data
        }).catch((error)=>{
            return error
        })
    }

    export default commonFunction
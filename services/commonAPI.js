import axios from "axios";






const commonAPI = async(method, url, data, reqHeader)=>{
    const reqConfig = {
        method,
        url,
        data,
        headers: reqHeader?reqHeader:{"Content-Type":"application/json"}
    }
    return await axios(reqConfig).then((result)=>{
        return result
    }).catch((reason)=>{
        return reason
    })
}

export default commonAPI
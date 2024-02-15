import commonAPI from "./commonAPI";






import SERVER_URL from "./serverUrl";

export const registerAPI = async(data)=>{
    return await commonAPI('POST', `${SERVER_URL}/register`, data, "")
}

export const detailsAPI = async()=>{
    return await commonAPI('GET', `${SERVER_URL}/details`, "", "")
}
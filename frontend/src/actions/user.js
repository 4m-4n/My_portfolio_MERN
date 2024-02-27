import axios from "axios"
export const getuser=()=>async(dispatch)=>{
try {
    dispatch({
        type:"GET_USER_REQUEST"
    });
    const {data}=await axios.get("/api/v1/user");
    dispatch({
        type:"GET_USER_SUCCESS",
        payload:data.usr
    });
} catch (error) {
    dispatch({
        type:"GET_USER_FAILURE",
        payload:error.response.data.message,
    });
}
}
export const login=(email,password)=>async(dispatch)=>{
    try {
        dispatch({
            type:"LOGIN_REQUEST"
        });
        const {data}=await axios.post("/api/v1/login",{email,password},{
            headers:{
                "Content-Type":"application/json",
            }
        });
        dispatch({
            type:"LOGIN_SUCCESS",
            payload:data.message,
        });
    } catch (error) {
        dispatch({
            type:"LOGIN_FAILURE",
            payload:error.response.data.message,
        });
    }
    }
    export const logout=()=>async(dispatch)=>{
        try {
            dispatch({
                type:"LOGOUT_REQUEST"
            });
            const {data}=await axios.get("/api/v1/logout");
            dispatch({
                type:"LOGOUT_SUCCESS",
                payload:data.message,
            });
        } catch (error) {
            dispatch({
                type:"LOGOUT_FAILURE",
                payload:error.response.data.message,
            });
        }
        }
        export const loaduser=()=>async(dispatch)=>{
            try {
                dispatch({
                    type:"USER_LOAD_REQUEST"
                });
                const {data}=await axios.get("/api/v1/me");
                dispatch({
                    type:"USER_LOAD_SUCCESS",
                    payload:data.usr,
                });
            } catch (error) {
                dispatch({
                    type:"USER_LOAD_FAILURE",
                    payload:error.response.data.message,
                });
            }
            }
             export const updateuser=(name,email,password,skills,about)=>async(dispatch)=>{
                try {
                    dispatch({
                        type:"UPDATE_USER_REQUEST"
                    });
                    const {data}=await axios.put("/api/v1/admin/update",{name,email,password,skills,about},{
                        headers:{
                            "Content-Type":"application/json",
                        }
                    });
                    dispatch({
                        type:"UPDATE_USER_SUCCESS",
                        payload:data.message,
                    });
                } catch (error) {
                    dispatch({
                        type:"UPDATE_USER_FAILURE",
                        payload:error.response.data.message,
                    });
                }
                }
                export const addtimeline=(title,description,date)=>async(dispatch)=>{
                    try {
                        dispatch({
                            type:"ADD_TL_REQUEST"
                        });
                        const {data}=await axios.post("/api/v1/admin/timeline/add",{title,description,date},{
                            headers:{
                                "Content-Type":"application/json",
                            }
                        });
                        dispatch({
                            type:"ADD_TL_SUCCESS",
                            payload:data.message,
                        });
                    } catch (error) {
                        dispatch({
                            type:"ADD_TL_FAILURE",
                            payload:error.response.data.message,
                        });
                    }
                    }                
                    export const deletetimeline=(id)=>async(dispatch)=>{
                        try {
                            dispatch({
                                type:"DELETE_TL_REQUEST"
                            });
                            const {data}=await axios.delete(`/api/v1/admin/timeline/${id}`);
                            dispatch({
                                type:"DELETE_TL_SUCCESS",
                                payload:data.message,
                            });
                        } catch (error) {
                            dispatch({
                                type:"DELETE_TL_FAILURE",
                                payload:error.response.data.message,
                            });
                        }
                        }
                        export const addproject=(url,title,image,description,technologies)=>async(dispatch)=>{
                            try {
                                dispatch({
                                    type:"ADD_PROJECT_REQUEST"
                                });
                                const {data}=await axios.post("/api/v1/admin/project/add",{url,title,image,description,technologies},{
                                    headers:{
                                        "Content-Type":"application/json",
                                    }
                                });
                                dispatch({
                                    type:"ADD_PROJECT_SUCCESS",
                                    payload:data.message,
                                });
                            } catch (error) {
                                dispatch({
                                    type:"ADD_PROJECT_FAILURE",
                                    payload:error.response.data.message,
                                });
                            }
                            }              
                            export const deleteproject=(id)=>async(dispatch)=>{
                                try {
                                    dispatch({
                                        type:"DELETE_PROJECT_REQUEST"
                                    });
                                    const {data}=await axios.delete(`/api/v1/admin/project/${id}`);
                                    dispatch({
                                        type:"DELETE_PROJECT_SUCCESS",
                                        payload:data.message,
                                    });
                                } catch (error) {
                                    dispatch({
                                        type:"DELETE_PROJECT_FAILURE",
                                        payload:error.response.data.message,
                                    });
                                }
                                }
                                export const contact=(name,email,message)=>async(dispatch)=>{
                                    try {
                                        dispatch({
                                            type:"CONTACT_REQUEST"
                                        });
                                        const {data}=await axios.post("/api/v1/contact",{name,email,message},{
                                            headers:{
                                                "Content-Type":"application/json",
                                            }
                                        });
                                        dispatch({
                                            type:"CONTACT_SUCCESS",
                                            payload:data.message,
                                        });
                                    } catch (error) {
                                        dispatch({
                                            type:"CONTACT_FAILURE",
                                            payload:error.response.data.message,
                                        });
                                    }
                                    }                                      
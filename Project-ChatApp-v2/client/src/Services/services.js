export const baseUrl = "http://localhost:3000/api"

export const postRequest = async (url, body) => {
    try{
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body
        });
    
        const data = await response.json();
    
        if (!response.ok) {
            if (data?.message) return { error: true, message: data.message }
            return { error: true, message: data }
        }
        return data;
    }catch(err){
        return {error:true,message:'Server fail'}
    }
}


export const getRequest = async(url) => {

    try{
        const response = await fetch(url);
        const data = await response.json();
    
        if(!response.ok){
            if(data?.message) return {error:true,message:data.message}
            return {error:true,message:data}
        }
        return data;
    }catch(err){
        return{error:true,message:'Server fail'}
    }
}
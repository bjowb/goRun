import { toast } from "sonner";
import React from "react";
import { useState } from "react";

const useFetch = (cb) => {
    const [data,setData] = React.useState(undefined);
    const [error,setError] = React.useState(null);
    const [loading,setLoading] = React.useState(false); 


    const fn = async (...args) => {

        setLoading(true);
        setError(null);

        try {
            const response = await cb(...args);
            setData(response);
            setError(false);
            
        } catch (error) {
            setError(error);    
            toast.error(error.message);
        }
        finally {
            setLoading(false);
        }

    }

    return {data,error,loading,fn,setData};

}
export default useFetch;
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import ViewServices from '../ViewServices/ViewServices';

const Services = () => {
   const{services,setServices}=useContext(AuthContext);
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setServices(data);
        })
    },[setServices])
    return (
        <div className='grid md:grid-cols-2 gap-6 justify-items-center my-5'>
            {
                services.map(service=><ViewServices key={service._id} service={service}></ViewServices>)
            }
        </div>
    );
};

export default Services;
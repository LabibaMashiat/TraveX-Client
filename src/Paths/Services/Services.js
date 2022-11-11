import React, { useEffect, useState } from 'react';
import ViewServices from '../ViewServices/ViewServices';

const Services = () => {
    const[services,setServices]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setServices(data);
        })
    },[])
    return (
        <div className='grid md:grid-cols-2 gap-6 justify-items-center my-5'>
            {
                services.map(service=><ViewServices key={service._id} service={service}></ViewServices>)
            }
        </div>
    );
};

export default Services;
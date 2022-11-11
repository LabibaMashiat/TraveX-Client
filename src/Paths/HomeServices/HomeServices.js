import React, { useEffect, useState } from 'react';
import ViewServices from '../ViewServices/ViewServices';

const HomeServices = () => {
    const [homeServices,setHomeServices]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/homeServices')
        .then(res=>res.json())
        .then(data=>{
            setHomeServices(data);
        })
    },[])
    return (
        <div className='grid md:grid-cols-2 gap-6 justify-items-center my-5'>
            {
                homeServices.map(homeService=><ViewServices key={homeService._id} service={homeService}></ViewServices>)
            }
        </div>
    );
};

export default HomeServices;
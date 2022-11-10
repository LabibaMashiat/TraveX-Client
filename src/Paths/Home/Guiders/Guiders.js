import React from 'react';
import guider1 from '../../../images-11/guides/guider1.jpg'
import guider2 from '../../../images-11/guides/guider2.jpg'
import guider3 from '../../../images-11/guides/guider3.jpg'
import { FaFacebook,FaInstagram,FaWhatsapp} from 'react-icons/fa';

const Guiders = () => {
    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
            <div className="card w-80 bg-white shadow-xl">
  <figure><img src={guider1} alt="" /></figure>
  <div className="card-body">
    <h2 className="card-title text-black">Annie Marthur</h2>
    <p className='text-black'>Contact: +995638342</p>
    <div className='flex justify-items-center'>
        <a href='#facebbok'><FaFacebook  className='w-24 h-8 '></FaFacebook></a>
        <a href='#whatsapp'><FaWhatsapp  className='w-24 h-8 '></FaWhatsapp></a>
       <a href='#instagram'> <FaInstagram className='w-24 h-8'></FaInstagram></a>
    </div>
    
    <div className="card-actions justify-end">
      <button className="btn btn-primary w-full h-28 text-3xl">France Guider</button>
    </div>
  </div>
</div>
            <div className="card w-80 bg-white shadow-xl">
  <figure><img className='h-68 w-full' src={guider2} alt="" /></figure>
  <div className="card-body">
    <h2 className="card-title text-black">Leo De'Souza</h2>
    <p className='text-black'>Contact: +109563838933</p>
    <div className='flex justify-items-center'>
        <a href='#facebbok'><FaFacebook  className='w-24 h-8 '></FaFacebook></a>
        <a href='#whatsapp'><FaWhatsapp  className='w-24 h-8 '></FaWhatsapp></a>
       <a href='#instagram'> <FaInstagram className='w-24 h-8'></FaInstagram></a>
    </div>
    
    <div className="card-actions justify-end">
      <button className="btn btn-primary w-full h-28 text-3xl">Italy Guider</button>
    </div>
  </div>
</div>
            <div className="card w-80 bg-white shadow-xl">
  <figure><img src={guider3} alt="" /></figure>
  <div className="card-body">
    <h2 className="card-title text-black">Martil Joe</h2>
    <p className='text-black'>Contact: +7645638342</p>
    <div className='flex justify-items-center'>
        <a href='#facebbok'><FaFacebook  className='w-24 h-8 '></FaFacebook></a>
        <a href='#whatsapp'><FaWhatsapp  className='w-24 h-8 '></FaWhatsapp></a>
       <a href='#instagram'> <FaInstagram className='w-24 h-8'></FaInstagram></a>
    </div>
    
    <div className="card-actions justify-end">
      <button className="btn btn-primary w-full h-28 text-3xl">Poland Guider</button>
    </div>
  </div>
</div>
           
        </div>
    );
};

export default Guiders;
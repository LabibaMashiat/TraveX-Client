import React from 'react';

const AddService = () => {
    const handleAddService=(event)=>{
        event.preventDefault();
        const form=event.target;
        const picture=form.picture.value;
        const name=form.name.value;
        const service_id=form.service_id.value;
        const description=form.description.value;
        const price=form.price.value;
        const rating=form.rating.value;
        const package_duration=form.package_duration.value;

        const addService={
            picture,
            name,
            service_id,
            description,
            price,
            rating,
            package_duration


        }
        fetch('http://localhost:5000/services',{
            method: 'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(addService)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            window.confirm('Service added successfully');
            form.reset();
        })
        .catch(er=>console.error(er));
    }
    return (
        <div className="hero min-h-screen bg-white">
  <div className="hero-content">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Add Service!</h1>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-lime-50 ">
      <form onSubmit={handleAddService} className="card-body">
        <div className="form-control">
          <input name='picture' type="text" placeholder="picture url" className="input input-bordered text-black bg-slate-200 mb-5" />
        </div>
        <div className="form-control">
          <input name='name' type="text" placeholder="spot name" className="input input-bordered text-black bg-slate-200 mb-5" />
      </div>
        <div className="form-control">
          <input name='service_id' type='text' placeholder="service_id" className="input input-bordered text-black bg-slate-200 mb-5" />
      </div>
        <div className="form-control">
          <input name='description' type="text" placeholder="description" className="input input-bordered text-black bg-slate-200 mb-5" />
      </div>
        <div className="form-control">
          <input name='price' type="text" placeholder="price" className="input input-bordered text-black bg-slate-200 mb-5" />
      </div>
        <div className="form-control">
          <input name='rating' type="text" placeholder="rating" className="input input-bordered text-black bg-slate-200 mb-5" />
      </div>
        <div className="form-control">
          <input name='package_duration' type="text" placeholder="package_duration" className="input input-bordered text-black bg-slate-200 mb-5" />
      </div>
        <div className="form-control mt-6">
          <button type='submit' className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  </div>
</div>
    );
};

export default AddService;
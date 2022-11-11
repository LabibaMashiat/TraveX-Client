import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import img1 from '../../images-11/SignInUp/login.jpg';

const SignUp = () => {
    const{createUser}=useContext(AuthContext);
    const handleSignUp=event=>{
        event.preventDefault();
        const form =event.target;
        const email=form.email.value;
        const password=form.password.value;
        console.log(email,password);

        createUser(email,password)
        .then(result=>{
            const user=result.user;
            form.reset();
        })
        .catch(err=>console.error(err))

    }
    return (
        <div className="hero min-h-screen bg-white">
        <div className="hero-content flex-col md:flex-row">
          <div className="text-center lg:text-left">
           
            <img src={img1} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-white">
            <form onSubmit={handleSignUp} className="card-body">
            <h1 className="text-5xl font-bold text-black">SignUp</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black">Name</span>
                </label>
                <input name='text' type="text" placeholder="name" className="input input-bordered bg-slate-200 text-black" required/>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black">Email</span>
                </label>
                <input name='email' type="email" placeholder="email" className="input input-bordered bg-slate-200 text-black" required/>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black">Password</span>
                </label>
                <input name='password' type="password" placeholder="password" className="input input-bordered bg-slate-200 text-black" required/>
              </div>
              <div className="form-control mt-6">
                <button type='submit' className="btn btn-primary">SignUp</button>
              </div>
              <h1 className='text-black font-semi-bold'>Already have an account? <Link to='/signUp'><u>Login</u></Link></h1>
            </form>
            
          </div>
        </div>
      </div>
    );
};

export default SignUp;
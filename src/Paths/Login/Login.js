import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../images-11/SignInUp/login.jpg';
import { FaGoogle} from 'react-icons/fa';

const Login = () => {
    const handleLogin=event=>{
        event.preventDefault();
        const form =event.target;
        const email=form.email.value;
        const password=form.password.value;
        console.log(email,password);
    }
    return (
        <div className="hero min-h-screen bg-white">
  <div className="hero-content flex-col md:flex-row">
    <div className="text-center lg:text-left">
     
      <img src={img1} alt="" />
      <div>
      <button className="btn btn-success w-3/4 mx-auto">
        <FaGoogle className='mr-4 h-12 w-6'></FaGoogle>
        Sign In with Google
      </button>
      </div>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-white">
      <form onSubmit={handleLogin} className="card-body">
      <h1 className="text-5xl font-bold text-black">Login now!</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-black">Email</span>
          </label>
          <input name='email' type="email" placeholder="email" className="input input-bordered bg-slate-200"required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-black">Password</span>
          </label>
          <input name='password' type="password" placeholder="password" className="input input-bordered bg-slate-200" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover text-black">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button type='submit' className="btn btn-primary">Login</button>
        </div>
        <h1 className='text-black font-semi-bold'>Do not have any account yet? <Link to='/signUp'><u>SignUp</u></Link> now</h1>
      </form>
      
    </div>
  </div>
</div>
    );
};

export default Login;
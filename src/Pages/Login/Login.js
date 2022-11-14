import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
  
    const handleLogin = data =>{
        console.log(data);
        console.log(errors)
    }
    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-4xl'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type='text' className="input input-bordered w-full" {...register("name")} />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Password</span></label>
                    <input type='password' className="input input-bordered w-full" 
                    {...register("password", {
                        required:"password is required",
                        minLength: {value: 6 , message: "password must be 6 characters or longer"}
                        })} />
                    <label className="label"><span className="label-text">Forget Password?</span></label>
                    {errors.password && <p className='text-red-600' role="alert">{errors.password?.message}</p>}
                </div>
                 <input className='btn btn-accent w-full' value="login" type="submit" />
                </form>
                <p>New to doctors Portal <Link to='/signup' className='text-secondary'>Create new Account</Link></p>
                <div className='divider'>OR</div>
                <button className='w-full btn btn-outline'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;
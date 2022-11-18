import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const SignUp = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const {createUser, updateUser} = useContext(AuthContext);
    const [signUpError, setSignUpError] = useState('');
    const navigate = useNavigate();
  
    const handleLogin = data =>{
        console.log(data);
        setSignUpError('')
        createUser(data.email, data.password)
        .then(result=>{
            const user = result.user;
            console.log(user);
            toast.success("user created successfully")
            const userInfo ={
                displayName: data.name
            }
            updateUser(userInfo)
            .then(()=>{
                navigate('/');
            })
            .catch(error => console.log(error))
        })
        .catch(error =>{
            console.log(error)
            setSignUpError(error.message)
        } )
    }
    
    return (
        <div className='h-[800px] flex justify-center items-center'>
        <div className='w-96 p-7'>
            <h2 className='text-4xl'>Sign Up</h2>
            <form onSubmit={handleSubmit(handleLogin)}>
            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Name</span>
                </label>
                <input type='text' className="input input-bordered w-full" 
                {...register("text", {
                    required: "Name is required"
                    })} />
                    {/* {errors.email && <p className='text-red-600' role="alert">{errors.email?.message}</p>} */}
            </div>
            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input type='email' className="input input-bordered w-full" 
                {...register("email", {
                    required: "Email address is required"
                    })} />
                    {errors.email && <p className='text-red-600' role="alert">{errors.email?.message}</p>}
            </div>
            <div className="form-control w-full max-w-xs">
                <label className="label"><span className="label-text">Password</span></label>
                <input type='password' className="input input-bordered w-full" 
                {...register("password", {
                    required:"password is required",
                    minLength: {value: 6 , message: "password must be 6 characters or longer"},
                    pattern: {value:/(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])/, 
                    message:"Password must be strong"}
                    })} />
                <label className="label"><span className="label-text">Forget Password</span></label>
                {errors.password && <p className='text-red-600' role="alert">{errors.password?.message}</p>}
            </div>
             <input className='btn btn-accent w-full' value="Sign UP" type="submit" />
             {signUpError && <p className='text-red-600'>{signUpError}</p>}
            </form>
            <p>Already have an account<Link to='/login' className='text-secondary'>Please Login</Link></p>
            <div className='divider'>OR</div>
            <button className='w-full btn btn-outline'>CONTINUE WITH GOOGLE</button>
        </div>
    </div>
    );
};

export default SignUp;
import { Result } from 'postcss';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const {signIn} = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from.pathname || '';

    setLoginError('');
    const handleLogin = data =>{
        console.log(data);
   
        signIn(data.email, data.password)
        .then(result =>{
            const user = result.user;
            console.log(user)
            navigate(from , {replace:true})
        })
        .catch(error =>{
            console.log(error);
            setLoginError(error.message)
        })
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
                        minLength: {value: 6 , message: "password must be 6 characters or longer"}
                        })} />
                    <label className="label"><span className="label-text">Forget Password?</span></label>
                    {errors.password && <p className='text-red-600' role="alert">{errors.password?.message}</p>}
                </div>
                 <input className='btn btn-accent w-full' value="login" type="submit" />
                 <div>
                    {loginError && <p className='text-red-600'>{loginError}</p>}
                 </div>
                </form>
                <p>New to doctors Portal <Link to='/signup' className='text-secondary'>Create new Account</Link></p>
                <div className='divider'>OR</div>
                <button className='w-full btn btn-outline'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;
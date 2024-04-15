import { useForm } from "react-hook-form"
import { Button, Input } from "../components"
import { facebookIcon, googleIcon } from "../assets";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Signup = () => {
    const { handleSubmit, register, formState: { errors } } = useForm();
    const navigate = useNavigate()
    const [isChecked, setIsChecked] = useState(false)

    const create = (data: any) => {
        if (isChecked) {
            console.log(data)
            navigate('/tracker')
        }
    }

    return (
        <div className='h-screen max-w-[475px] w-full px-4 py-8 flex flex-col justify-between'>
            <h2 className=" max-sm:text-xl font-Roboto font-semibold">Create an account</h2>
            <form
                onSubmit={handleSubmit(create)}
                className=" h-full pt-10 flex flex-col justify-between"
            >
                <div className="space-y-5">
                    <Input
                        placeholder="First Name"
                        {...register("FName", {
                            required: "First Name is required",
                        })}
                    />
                    {errors?.FName && (
                        <span className=' text-red-500 text-xs'>
                            {/* @ts-ignore */}
                            {errors?.FName?.message}
                        </span>
                    )}
                    <Input
                        placeholder="Last Name"
                        {...register("LName", {
                            required: "Last Name is required",
                        })}
                    />
                    {errors?.LName && (
                        <span className=' text-red-500 text-xs'>
                            {/* @ts-ignore */}
                            {errors?.LName?.message}
                        </span>
                    )}
                    <Input
                        placeholder="Email"
                        {...register("email", {
                            required: "Email is required",
                        })}
                    />
                    {errors?.email && (
                        <span className=' text-red-500 text-xs'>
                            {/* @ts-ignore */}
                            {errors?.email?.message}
                        </span>
                    )}
                    <Input
                        placeholder="Password"
                        type="password"
                        {...register("password", {
                            required: "Password is required",
                        })}
                    />
                    {errors?.password && (
                        <span className=' text-red-500 text-xs'>
                            {/* @ts-ignore */}
                            {errors?.password?.message}
                        </span>
                    )}
                    <div className=" flex items-center gap-1">
                        <input
                            type="checkbox"
                            className=" h-5 w-5"
                            checked={isChecked}
                            onChange={() => setIsChecked(prev => !prev)}
                        />
                        <p className=" text-xs font-medium font-Montserrat text-lightGray">By proceeding, I agree to all <span className=" text-link underline">T&C</span> and <span className=" text-link underline">Privacy Policy</span></p>
                    </div>
                </div>
                <Button
                    type="submit"
                    className=" rounded-lg my-4"
                >Create an Account</Button>
            </form>
            <div>
                <div className=" flex items-center py-4">
                    <div className=" w-full h-[0.5px] bg-lightGray"></div>
                    <p className=" text-xs font-Montserrat font-medium px-2">Or</p>
                    <div className=" w-full h-[0.5px] bg-lightGray"></div>
                </div>
                <div className=" w-full flex justify-center items-center gap-4 py-4">
                    <div className=" h-11 w-11 rounded-lg border border-lightGray p-3 cursor-pointer ">
                        <img src={googleIcon} alt="google icon" />
                    </div>
                    <div className=" h-11 w-11 rounded-lg border border-lightGray p-3 cursor-pointer">
                        <img src={facebookIcon} alt="google icon" />
                    </div>
                </div>
                <p className=" text-xs font-Montserrat font-medium text-center">Already have an account? <span className=" text-link underline cursor-pointer" onClick={() => navigate('/login')}>Login</span></p>
            </div>
        </div>
    )
}

export default Signup

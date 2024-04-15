import { useForm } from "react-hook-form"
import { Button, Input } from "../components";
import { facebookIcon, googleIcon } from "../assets";
import { IoEyeOffOutline } from "react-icons/io5";
import { FaRegEye } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const { handleSubmit, register, formState: { errors } } = useForm();
    const [showPass, setShowPass] = useState(false)
    const navigate = useNavigate()

    const userLogin = (data: any) => {
        console.log(data);
    }

    return (
        <div className='h-screen w-full max-w-[375px] px-4 py-8 flex flex-col justify-between'>
            <h2 className=" max-sm:text-xl font-Roboto font-semibold">Welcome Back</h2>
            <form
                onSubmit={handleSubmit(userLogin)}
                className=" h-full pt-10 flex flex-col justify-between"
            >
                <div className=" space-y-5  ">
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
                    <div className=" relative">
                        <Input
                            placeholder="Password"
                            type={showPass ? "text" : "password"}
                            {...register("password", {
                                required: "Password is required",
                            })}
                        />
                        <div
                            className=" absolute top-4 right-4 text-lightGray cursor-pointer"
                            onClick={() => setShowPass((prev) => !prev)}
                        >
                            {!showPass ? <IoEyeOffOutline size={15} /> : <FaRegEye size={15} />}
                        </div>
                    </div>
                    {errors?.password && (
                        <span className=' text-red-500 text-xs'>
                            {/* @ts-ignore */}
                            {errors?.password?.message}
                        </span>
                    )}
                    <p className=" text-lightGray font-Montserrat font-medium text-xs underline">Forgot your password?</p>
                </div>
                <Button
                    type="submit"
                    className=" rounded-lg my-4"
                >Sign In</Button>
            </form>
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
            <p className=" text-xs font-Montserrat font-medium text-center">Don't have an account? <span className=" text-link underline cursor-pointer" onClick={() => navigate("/signup")}>Create an account</span></p>
        </div>
    )
}

export default Login


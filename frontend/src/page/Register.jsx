import {
  ArrowLeft,
  Eye,
  EyeOff,
  Lock,
  Mail,
  Mailbox,
  User,
  XIcon,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [isForgetPassword, setIsForgetPassword] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const nameFieldRef = useRef(null);

  const handleToggle = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setIsLogin(!isLogin);
      setTimeout(() => setIsTransitioning(false), 50);
    }, 300);
  };

  useEffect(() => {
    if (!isLogin && nameFieldRef.current) {
      nameFieldRef.current.style.opacity = "0";
      nameFieldRef.current.style.transform = "translateY(-10px)";
      setTimeout(() => {
        if (nameFieldRef.current) {
          nameFieldRef.current.style.transition = "all 0.4s ease-out";
          nameFieldRef.current.style.opacity = "1";
          nameFieldRef.current.style.transform = "translateY(0)";
        }
      }, 350);
    }
  }, [isLogin]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="w-full flex md:justify-around justify-center min-h-screen bg-blue-50 overflow-hidden md:p-0 p-10">
      <Link
        to={"/"}
        className="absolute top-5 left-5 flex gap-2 items-center p-1.5 bg-blue-800 text-white rounded-sm hover:opacity-80 cursor-pointer z-1"
      >
        <ArrowLeft />
        <p className="font-black">Home</p>
      </Link>
      {isForgetPassword && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          onClick={() => setIsForgetPassword(false)}
        >
          <div
            className="bg-white rounded-lg md:p-8 p-4 shadow-2xl relative md:w-1/3"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="md:text-2xl text-xl font-bold text-gray-800">
              Forgot Password?
            </h2>
            <p className="text-gray-600 mb-5 text-md">
              Enter your email to reset your password
            </p>
            <form className="flex flex-col gap-4">
              <div className="relative">
                <input
                  type="email"
                  className="border-2 border-gray-300 rounded-lg p-1.5 w-full pl-10 transition-all duration-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                  placeholder="Enter your email"
                />
                <Mailbox
                  className="absolute left-3 top-3 text-gray-400"
                  size={20}
                />
                <button
                  onClick={() => setIsForgetPassword(false)}
                  className="bg-blue-500 text-white text-sm p-2 md:p-1 rounded-lg transition-all duration-300 hover:from-blue-600 hover:to-blue-700 hover:shadow-lg md:w-fit w-full my-2 md:absolute right-1.5 -top-0.5 cursor-pointer"
                >
                  Reset Password
                </button>
              </div>
            </form>
            <button
              onClick={() => setIsForgetPassword(false)}
              className="w-full text-gray-600 font-medium p-2 hover:text-gray-800 transition-colors absolute top-1 right-1 flex justify-end cursor-pointer"
            >
              <XIcon />
            </button>
          </div>
        </div>
      )}
      <div
        className={`md:w-1/2 w-full flex flex-col justify-center md:p-20 gap-5 transition-all duration-700 ease-in-out ${
          isLogin ? "order-1 items-start" : "order-2 items-end"
        } ${isTransitioning ? "opacity-0 scale-95" : "opacity-100 scale-100"}`}
      >
        <h1
          className={`font-black text-3xl bg-blue-600 bg-clip-text text-transparent w-full flex justify-center ${
            isLogin ? "md:justify-start" : "md:justify-end"
          }`}
        >
          {isLogin ? "Welcome Back" : "Create Account"}
        </h1>
        <div className="md:w-5/6 w-full flex flex-col gap-5">
          {!isLogin && (
            <div ref={nameFieldRef} className="flex flex-col w-full">
              <label className="font-medium text-gray-700 mb-1">
                Name <span className="text-red-500">*</span>
              </label>
              <div className="relative w-full group">
                <input
                  type="text"
                  className="border-2 border-gray-300 rounded-lg w-full pl-10 p-1.5 transition-all duration-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                  placeholder="Enter your name"
                />
                <User
                  className="absolute left-3 top-3 text-gray-400 transition-colors duration-300 group-focus-within:text-blue-500"
                  size={20}
                />
              </div>
            </div>
          )}
          <div className="flex flex-col">
            <label className="font-medium text-gray-700 mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <div className="relative w-full group">
              <input
                type="email"
                className="border-2 border-gray-300 rounded-lg p-1.5 w-full pl-10 transition-all duration-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                placeholder="Enter your email"
              />
              <Mail
                className="absolute left-3 top-3 text-gray-400 transition-colors duration-300 group-focus-within:text-blue-500"
                size={20}
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label className="font-medium text-gray-700 mb-1">
              Password <span className="text-red-500">*</span>
            </label>
            <div className="relative w-full group">
              <input
                type={showPassword ? "text" : "password"}
                className="border-2 border-gray-300 rounded-lg p-1.5 w-full pl-10 pr-10 transition-all duration-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                placeholder="Enter your password"
              />
              <Lock
                className="absolute left-3 top-3 text-gray-400 transition-colors duration-300 group-focus-within:text-blue-500"
                size={20}
              />
              <button
                type="button"
                className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition-all duration-200 transform hover:scale-110"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
              </button>
            </div>
          </div>
          <button
            onClick={handleSubmit}
            className="w-full bg-blue-500 blue-600 text-white font-semibold p-2 rounded-lg transition-all duration-300 hover:bg-blue-600  hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
          <div className="w-full flex flex-col justify-center items-center mt-5 gap-2">
            <div className="flex gap-2 text-gray-600">
              <span>
                {isLogin
                  ? "Don't have an account?"
                  : "Already have an account?"}
              </span>
              <button
                type="button"
                className="text-blue-600 font-bold hover:text-blue-700 transition-colors duration-200 hover:underline cursor-pointer"
                onClick={handleToggle}
              >
                {isLogin ? "Sign Up" : "Login"}
              </button>
            </div>
            {isLogin && (
              <div
                className="text-blue-600 font-bold hover:text-blue-700 transition-colors duration-200 hover:underline cursor-pointer"
                onClick={() => setIsForgetPassword(!isForgetPassword)}
              >
                Forgot Password?
              </div>
            )}
          </div>
        </div>
      </div>
      <div
        className={`w-1/2 bg-blue-500 hidden md:flex flex-col justify-center items-center transition-all duration-700 ease-in-out relative overflow-hidden ${
          isLogin ? "order-2 rounded-l-[40%]" : "order-1 rounded-r-[40%]"
        }`}
      >
        <div
          className={`flex items-center gap-5 my-5 transition-all duration-700 ${
            isTransitioning ? "scale-90 opacity-0" : "scale-100 opacity-100"
          } relative z-10`}
        >
          <div className="size-20 bg-white rounded-full flex items-center justify-center shadow-lg">
            <img src="src\asset\image\logo.png" alt="JobCV" />
          </div>
          <h1 className="text-7xl font-black text-white drop-shadow-lg">
            JobCV
          </h1>
        </div>
        <div
          className={`text-center transition-all duration-700 delay-100 ${
            isTransitioning
              ? "translate-y-4 opacity-0"
              : "translate-y-0 opacity-100"
          } relative z-10`}
        >
          <h2 className="text-3xl font-semibold text-white mb-2 drop-shadow-md">
            Feeling Unemployed?
          </h2>
          <p className="text-xl font-light text-blue-100">
            We're here to help you succeed
          </p>
        </div>
      </div>
    </div>
  );
}

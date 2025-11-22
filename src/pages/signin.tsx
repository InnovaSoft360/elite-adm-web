import logo from "../assets/logo.png";
import googleIcon from "../assets/google.svg";
import { NavLink } from "react-router";
import fundo from "../assets/fundo.jpg";
export function SignPage() {
  return (
    <form
      action=""
      className="flex h-screen overflow-hidden  w-full justify-center items-center "
    >
      <div className="flex flex-col gap-4 px-20 ">
        <div className="flex items-center  mb-4 justify-center">
          <img className="w-10 h-10" src={logo} alt="" />
          <span className="text-white">Elite House |SIGN IN</span>
        </div>
        <label className="text-white" htmlFor="name">
          Name
        </label>
        <input
          className="border  focus:border-border-blue-600  rounded-2xl p-2 text-white "
          type="text"
          name=""
          id="name"
          placeholder="Digita o teu nome"
        />
        <label className="text-white" htmlFor="email">
          Email
        </label>
        <input
          className="border  focus:border-border-blue-600  rounded-2xl p-2 text-white "
          type="email"
          name=""
          id="email"
          placeholder="Digita o seu email"
        />
        <label className="text-white" htmlFor="password">
          Password
        </label>
        <input
          className="border border-gray-200 focus:border-border-blue-600  rounded-2xl p-2 text-white "
          type="password"
          name=""
          id="password"
          placeholder="Digita a sua password"
        />

        <button className="text-white bg-gray-800 p-2 rounded-2xl cursor-pointer hover:bg-gray-700">
          Login
        </button>
        <button className="text-white bg-gray-800 p-2 rounded-2xl cursor-pointer hover:bg-gray-700 flex items-center justify-center gap-2">
          <img className="w-5 h-5" src={googleIcon} alt="" />
          Sign in with Google
        </button>
        <span className="text-white cursor-pointer text-center">
          Do you have an account?{" "}
          <span className="text-blue-500 hover:text-blue-600">
            <NavLink to="/login">Login</NavLink> {""}{" "}
          </span>
          for {""} free
        </span>
      </div>
      <div className=" h-screen   w-1/2">
        <img className="w-full h-full  object-cover " src={fundo} alt="" />
      </div>
    </form>
  );
}

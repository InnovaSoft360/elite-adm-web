import logo from "../assets/logo.png";
import fundo from "../assets/fundo.jpg";
import { NavLink } from "react-router";
export function ForgetPage() {
  return (
    <form
      action=""
      className="flex h-screen overflow-hidden w-full justify-center items-center gap-4"
    >
      <div className="flex flex-col gap-4 px-20 ">
        <div className="flex items-center  mb-4 justify-center">
          <img className="w-10 h-10" src={logo} alt="" />
          <span className="text-white ">Elite House| Recover Password </span>
        </div>
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
        <div className="flex justify-between items-center">
          <div className=" flex gap-2 items-center">
            <input type="checkbox" name="remember" id="remember" />
            <label className="text-white" htmlFor="remember">
              Remember me{" "}
            </label>
          </div>
          <div>
            <NavLink to="/forget" className="text-blue-500 cursor-pointer ">
              back
            </NavLink>
          </div>
        </div>

        <button className="text-white bg-gray-800 p-2 rounded-2xl cursor-pointer hover:bg-gray-700">
          Login
        </button>
      </div>
      <div className=" h-screen   w-1/2">
        <img className="w-full h-full  object-cover " src={fundo} alt="" />
      </div>
    </form>
  );
}

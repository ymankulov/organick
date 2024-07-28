import React, { useState } from "react";
import Logo from "../../assets/headerlogo.svg";
import { Link, useNavigate } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { BsCart3 } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import userIcon from "../../assets/user.webp";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useAuth } from "../context";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { searchProduct } from "../../redux/reducers/addProductSlice";

const Header = () => {
  const { register, signInWithGoogle, logOut, logIn } = useAuth();
  const { basket, user } = useSelector((s) => s.add);
  const [basketAni, setBasketAni] = useState(false);
  const [modal, setModal] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [searchProd, setSearchProd] = useState("");
  const [inputAni, setInputAni] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  console.log(user);

  async function handleRegister() {
    try {
      await register(email, password);
      setEmail("");
      setPassword("");
      navigate(`/`);
      setModal(false);
    } catch (err) {
      setError(err.message);
    }
  }

  async function handleGoogle() {
    try {
      await signInWithGoogle();
      navigate(`/`);
      setModal(false);
    } catch (err) {
      setError(err.message);
    }
  }

  async function handleLogin() {
    try {
      await logIn(email, password);
      setEmail("");
      setPassword("");
      navigate(`/`);
      setModal(false);
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <div className="py-[40px] header z-[99] sticky top-0 bg-[rgba(255, 255, 255)] backdrop-blur-[5px]">
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="flex items-center max-[428px]:hidden">
            <img src={Logo} alt="" />
            <h1 className="text-[#274C5B] text-[30px] font-bold">Organick</h1>
          </div>
          <div className="text-[#274C5B] text-[20px] font-bold flex items-center gap-8 max-[428px]:gap-2">
            <Link to={"/"}>Home</Link>
            <Link to={"/"}>About</Link>
            <Link to={user ? "/products" : "*"}>Shop</Link>
          </div>
          <div className="flex items-center gap-4 max-[428px]:gap-2">
            <div className="relative ">
              {inputAni ? (
                <input
                  onChange={(e) => setSearchProd(e.target.value)}
                  value={searchProd}
                  type="text"
                  placeholder="search..."
                  className={`text-2xl absolute left-[-300px] top-[-25px] text-black bg-gray-200 py-[10px] px-[30px] rounded-3xl outline-none`}
                />
              ) : null}
              <div
                className={`bg-[#7EB693] absolute cursor-pointer ${
                  inputAni ? "top-[-22px]" : "top-[-23px]"
                } max-[1024px]:top-[-20px] right-2 w-[40px] h-[40px] rounded-[50%] flex items-center justify-center`}
                onClick={() => {
                  dispatch(searchProduct(searchProd));
                  navigate(`/search/${searchProd}`);
                  setSearchProd("");
                  setInputAni(!inputAni);
                }}
              >
                <a className="text-white text-[22px]">
                  <IoSearch />
                </a>
              </div>
            </div>
            <Link
              to={`/basket`}
              className="flex items-center gap-2 border-2 border-solid border-gray-300 p-2 rounded-3xl"
              onMouseOver={() => setBasketAni(true)}
              onMouseOut={() => setBasketAni(false)}
            >
              <div className="w-[40px] h-[40px]  rounded-[50%] bg-[#274C5B] flex items-center justify-center">
                <a className="text-[22px] text-white">
                  <BsCart3 />
                </a>
              </div>
              {basketAni ? (
                <h1 className="text-[#274C5B] text-[24px] font-bold">
                  Cart ({basket.length ? basket.length : 0})
                </h1>
              ) : null}
            </Link>
          </div>
          <div
            className="flex items-center justify-center flex-col cursor-pointer"
            onClick={() => setModal(true)}
          >
            <img
              className=" rounded-[50%] "
              src={user ? (user.photoURL ? user.photoURL : userIcon) : userIcon}
              width={50}
              alt=""
            />

            <h1 className="text-[20px]">
              {user
                ? user.displayName
                  ? user.displayName
                  : "User Name"
                : "User"}
            </h1>
          </div>

          {modal ? (
            <div className="">
              <div className="w-[800px] h-[450px] p-5 flex items-center justify-center flex-col gap-5 bg-gray-300 rounded-3xl fixed top-[25%] left-[22%] z-[51]">
                <div className="relative z-0 w-[80%] mb-5 group">
                  <input
                    type="email"
                    className="block py-2.5 px-0 w-full text-2xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                  <label
                    for="floating_email"
                    className="peer-focus:font-medium absolute text-2xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Email address
                  </label>
                </div>
                <div className="relative z-0 w-[80%] mb-5 group">
                  <input
                    type="password"
                    className="block py-2.5 px-0 w-full text-2xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                  />
                  <label
                    for="floating_email"
                    className="peer-focus:font-medium absolute text-2xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Password
                  </label>
                </div>
                <div className="flex items-center">
                  <button
                    className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2"
                    onClick={handleLogin}
                  >
                    Log In
                  </button>
                  <button
                    className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2"
                    onClick={handleRegister}
                  >
                    Register
                  </button>
                  <button
                    type="button"
                    className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2"
                    onClick={() => handleGoogle()}
                  >
                    <svg
                      className="w-4 h-4 me-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 18 19"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    Sign in with Google
                  </button>
                </div>
                {error.length ? (
                  <div
                    class="flex items-center p-4 mb-4 text-xl text-red-800 border border-red-300 rounded-lg bg-red-50  dark:text-red-400 dark:border-red-800"
                    role="alert"
                  >
                    <svg
                      class="flex-shrink-0 inline w-4 h-4 me-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                    </svg>
                    <span class="sr-only">Info</span>
                    <div>
                      <span class="font-medium">{error}</span>
                    </div>
                  </div>
                ) : null}
                <button
                  className="text-[30px] text-black absolute top-[10px] right-[10px]"
                  onClick={() => setModal(false)}
                >
                  <IoIosCloseCircleOutline />
                </button>
              </div>
              <div className="bg"></div>
            </div>
          ) : null}
          {!user ? null : (
            <button
              className="text-[35px] text-red-500 fixed top-3 right-3"
              onClick={() => {
                logOut();
                navigate("/");
              }}
            >
              <RiLogoutCircleRLine />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;

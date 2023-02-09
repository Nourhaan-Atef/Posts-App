import Error from "../Images/Error4.png";
import { useRouteError, useNavigate } from "react-router-dom";
const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();
  console.log(error);
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen gap-10">
        <div className="font-extrabold text-5xl text-lightYellow text-center ">
          ErrorPage
        </div>
        <i className="text-red-700 font-extrabold text-3xl underline">
          {error.statusText || error.message}
        </i>
        <div className="flex justify-center mx-10">
          <img src={Error} alt="Error-Img" className="sm:h-[60vh]" />
        </div>
        <button
          onClick={() => navigate("/", { replace: true })}
          className="btn specialBtn"
        >
          Home
        </button>
      </div>
    </>
  );
};

export default ErrorPage;

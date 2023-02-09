import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const DetailsPage = () => {
  const navigate = useNavigate();

  const { record } = useSelector((state) => state.posts);

  return (
    <>
      <div className="bg-veryDarkVioletMain sm:h-screen font-pageFont px-3 ">
        <div className="text-center">
          <h1 className=" font-extrabold text-5xl text-pureCyan">
            Details of {record?.title}
          </h1>
        </div>
        <div className="text-white font-medium">
          <p className="text-2xl mt-10 text-vividMagenta">
            Post is Written By
            <span className="pl-3 text-white font-extrabold underline">
              {record?.username}
            </span>
          </p>
          <p className="text-2xl mt-10 text-vividMagenta">
            The Post's Topic is
            <span className="pl-3 text-white font-extrabold underline">
              {record?.topic}
            </span>
          </p>
          <div className="mt-10 text-center  text-white text-2xl font-normal">
            <span className="pl-3 text-vividMagenta font-extrabold block">
              Post Description
            </span>
            <p className="font-normal p-5 md:px-20 text-xl  text-center">
              {record?.description}
            </p>
          </div>
        </div>

        <div className=" flex justify-end mt-72 mr-28">
          <button
            onClick={() => navigate("/", { replace: true })}
            className="btn specialBtn"
          >
            Home
          </button>
        </div>
      </div>
    </>
  );
};

export default DetailsPage;

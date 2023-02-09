import React from "react";
import ErrorImage from "../../Images/Error5.png";
import LoadingImg from "../../Images/lo.gif";
const Loading = ({ type }) => {
  return (
    <>
      <div className="flex flex-col items-center  ">
        <p>
          {type !== "loading" ? (
            <span className="text-2xl text-red-500 font-semibold">
              <span className="text-pureCyan text-8xl font-bold block text-center mb-8">
                Ooops!
              </span>
              It's Seems That Something Went Wrong
            </span>
          ) : (
            ""
          )}
        </p>
        <img
          src={type === "loading" ? LoadingImg : ErrorImage}
          className="h-[60vh]"
          alt="IMG"
        />
      </div>
    </>
  );
};

export default Loading;

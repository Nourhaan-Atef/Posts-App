import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getPost, deletePosts } from "../store/PostSlice";

const PostCard = ({ data, search }) => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const deleteHandler = (post) => {
    if (window.confirm(`Are you sure you want to delete ${post.title}`)) {
      dispatch(deletePosts(post.id));
    }
  };

  const posts = data
    .filter((item) => {
      return search.toLowerCase() === ""
        ? item
        : item.topic.toLowerCase().includes(search);
    })
    .map((post) => {
      return (
        <div
          className=" bg-veryDarkVioletSecandary m-10 rounded-2xl border-2 border-pureCyan"
          key={post.id}
        >
          <div className="first flex justify-between items-center px-5 py-2">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-14 h-14 text-pureCyan"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <p className=" text-2xl font-bold">{post.username}</p>
            </div>
            <div>
              <p className="text-xl text-white px-2 border-2 rounded-md border-lightYellow">
                {post.topic}
              </p>
            </div>
          </div>
          <div className="secand">
            <h2 className="font-bold text-2xl text-center text-pureCyan mb-5">
              {post.title}
            </h2>
            <p className="mb-5 px-6 text-lg font-medium text-white ">
              {post.bref}
            </p>
          </div>
          <div className="third flex justify-between">
            <div className="flex ml-6">
              <button
                className="btn specialBtn"
                onClick={() => {
                  dispatch(getPost(post.id)).then((res) => {
                    if (res.meta.requestStatus === "fulfilled") {
                      navigate(`post/${post.id}/edit`);
                    }
                  });
                }}
              >
                Edit
              </button>
              <button
                className="btn ml-3 specialBtn"
                onClick={() => deleteHandler(post)}
              >
                Delete
              </button>
            </div>
            <div>
              <button
                className="btn mr-4 specialBtn"
                onClick={() => {
                  dispatch(getPost(post.id)).then((res) => {
                    if (res.meta.requestStatus === "fulfilled") {
                      navigate(`post/${post.id}/details`);
                    }
                  });
                }}
              >
                Details
              </button>
            </div>
          </div>
        </div>
      );
    });
  return <>{posts}</>;
};

export default PostCard;

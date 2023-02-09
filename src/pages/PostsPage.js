import { memo, useState } from "react";
import { NavLink } from "react-router-dom";
import Loading from "../components/LoadingHandler/Loading";
import PostCard from "../components/PostCard";

const PostsPage = ({ data, deletePost }) => {
  const [search, setSearch] = useState("");
  return (
    <>
      {data.length > 0 ? (
        <div className="grid xl:grid-cols-3 text-lightYellow pt-0 font-pageFont bg-veryDarkVioletMain">
          <div className="xl:col-span-1 col-span-2">
            <div className="col-span-1 flex flex-col justify-center items-center xl:items-end  px-2 xl:border-r-2 border-vividMagenta ">
              <button
                id="btn"
                className="bg-darkMagenta text-white btn hover:border-lightYellow hover:bg-vividMagenta"
              >
                <NavLink to="/post/add">ADD POST</NavLink>
              </button>
              <input
                type="text"
                className=" w-96 p-3 rounded-md text-darkVioletKey font-bold text-xl  outline-none border-2 border-lightYellow "
                placeholder="Search About Post"
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
          <div className="col-span-2 xl:mt-0 mt-14">
            <div className="text-center">
              <h1 className="font-bold text-5xl ">MY POSTS</h1>
            </div>
            <div className="grid lg:grid-cols-2">
              <PostCard data={data} deletePost={deletePost} search={search} />
            </div>
          </div>
        </div>
      ) : (
        <Loading type="null" />
      )}
    </>
  );
};

export default memo(PostsPage);

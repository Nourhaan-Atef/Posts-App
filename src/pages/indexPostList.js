import { useEffect } from "react";
import PostsPage from "./PostsPage";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../store/PostSlice";
import Loading from "../components/LoadingHandler/Loading";
const IndexPostList = () => {
  const dispatch = useDispatch();
  const { records, loading, error } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (loading) {
    return <Loading type="loading" />;
  }

  return (
    <>
      <PostsPage data={records} loading={loading} error={error} />
    </>
  );
};

export default IndexPostList;

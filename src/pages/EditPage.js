import { useDispatch, useSelector } from "react-redux";
import { editPost } from "../store/PostSlice";
import { useNavigate } from "react-router";
import { useFormik } from "formik";
import * as Yup from "yup";

const FormSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, "It is too short you should insert at least 2 characters")
    .max(10, "It is too long you should insert at most 10 characters")
    .required("It Is Required"),
  title: Yup.string()
    .min(2, "It is too short you should insert at least 2 characters")
    .max(10, "It is too long you should insert at most 10 characters")
    .required("Required"),
  topic: Yup.string()
    .min(5, "It is too short you should insert at least 5 characters")
    .max(15, "It is too long you should insert at most 15 characters")
    .required("Required"),
  bref: Yup.string()
    .min(10, "It is too short you should insert at least 10 characters")
    .max(20, "It is too long you should insert at most 20 characters")
    .required("Required"),
  description: Yup.string()
    .min(10, "It is too short you should insert at least 10 characters")
    .max(50, "It is too long you should insert at most 50 characters")
    .required("Required"),
});
const EditPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { record } = useSelector((state) => state.posts);

  const formik = useFormik({
    initialValues: {
      id: record ? record.id : "",
      username: record ? record.username : "",
      title: record ? record.title : "",
      topic: record ? record.topic : "",
      bref: record ? record.bref : "",
      description: record ? record.description : "",
    },
    validationSchema: FormSchema,
    enableReinitialize: true,
    onSubmit: (values) => {
      const { id, username, title, bref, topic, description } = values;
      dispatch(
        editPost({
          id,
          username,
          title,
          topic,
          bref,
          description,
        })
      ).then((res) => {
        if (res.meta.requestStatus === "fulfilled") {
          navigate("/");
        }
        console.log(res);
      });
    },
  });

  return (
    <>
      <div className="bg-veryDarkVioletMain h-screen font-pageFont px-3">
        <header className=" text-center">
          <h1 className=" font-extrabold text-5xl text-pureCyan  ">
            Edit Post Page
          </h1>
        </header>

        <form className="md:p-10 p-3 mt-20 " onSubmit={formik.handleSubmit}>
          <div className="grid grid-cols-4 mb-5">
            <label className="formLabel">User Name</label>
            <input
              type="text"
              className={`formInput ${
                formik.errors.username && formik.touched.username ? "error" : ""
              }`}
              name="username"
              onChange={formik.handleChange}
              value={formik.values.username}
            />
          </div>
          {formik.errors.username && formik.touched.username ? (
            <div className="inValidStyle">{formik.errors.username}</div>
          ) : null}
          <div className="grid grid-cols-4 mb-5">
            <label className="formLabel">Title</label>
            <input
              type="text"
              className={`formInput ${
                formik.errors.title && formik.touched.title ? "error" : ""
              }`}
              name="title"
              onChange={formik.handleChange}
              value={formik.values.title}
            />
          </div>
          {formik.errors.title && formik.touched.title ? (
            <div className="inValidStyle">{formik.errors.title}</div>
          ) : null}
          <div className="grid grid-cols-4 mb-5">
            <label className="formLabel">Topic</label>
            <input
              type="text"
              className={`formInput ${
                formik.errors.topic && formik.touched.topic ? "error" : ""
              }`}
              name="topic"
              onChange={formik.handleChange}
              value={formik.values.topic}
            />
          </div>
          {formik.errors.topic && formik.touched.topic ? (
            <div className="inValidStyle">{formik.errors.topic}</div>
          ) : null}
          <div className="grid grid-cols-4 mb-5">
            <label className="formLabel">Bref Desc</label>
            <input
              type="text"
              className={`formInput ${
                formik.errors.bref && formik.touched.bref ? "error" : ""
              }`}
              name="bref"
              onChange={formik.handleChange}
              value={formik.values.bref}
            />
          </div>
          {formik.errors.bref && formik.touched.bref ? (
            <div className="inValidStyle">{formik.errors.bref}</div>
          ) : null}
          <div className="grid grid-cols-4 mb-5">
            <label className="formLabel">Description</label>
            <input
              type="text"
              className={`formInput ${
                formik.errors.description && formik.touched.description
                  ? "error"
                  : ""
              }`}
              name="description"
              onChange={formik.handleChange}
              value={formik.values.description}
            />
          </div>
          {formik.errors.description && formik.touched.description ? (
            <div className="inValidStyle">{formik.errors.description}</div>
          ) : null}
          <div className="mt-20 flex justify-around ">
            <button
              className="addBtn disabled:bg-veryDarkBlue disabled:text-white px-10"
              type="submit"
              disabled={!formik.dirty}
            >
              Submit
            </button>
            <button className="addBtn px-10" onClick={() => navigate("/")}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditPage;

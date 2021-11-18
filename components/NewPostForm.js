import { useEffect, useState } from "react";

const NewPostForm = () => {
  const initialData = {
    body: "",
    title: "",
  };

  const [postData, setPostData] = useState(initialData);
  const [isDisabled, setIsDisabled] = useState(true);

  const changePostData = (event) => {
    setPostData({
      ...postData,
      [event.target.id]: event.target.value,
    });
  };

  const createPost = async (newPost) => {
    await fetch("https://tutuitah.herokuapp.com/tuits", {
      method: "POST",
      body: JSON.stringify(newPost),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();

    createPost(postData);
  };

  useEffect(() => {
    setIsDisabled(postData.title === "" || postData.body === "");
  }, [postData.username, postData.password, postData.name]);

  return (
    <div className="form-container">
      <h2 className="form-container__text">We accept your stories!</h2>
      <form
        onSubmit={onSubmit}
        autoComplete="off"
        noValidate
        className="login-form register-form"
      >
        <div className="form-container_name form-line">
          <label htmlFor="title">Your posts' title: </label>
          <input
            type="text"
            className="form-container_title-input"
            id="title"
            placeholder="Enter your title"
            value={postData.title}
            onChange={changePostData}
          />
        </div>
        <div className="form-container_body form-line">
          <label htmlFor="content" className="body-label">
            Your post:
          </label>
          <textarea
            className="form-container_body-input"
            id="body"
            placeholder="Enter your post"
            value={postData.body}
            onChange={changePostData}
          />
        </div>
        <button type="submit" className="login__button" disabled={isDisabled}>
          Create me!
        </button>
      </form>
    </div>
  );
};

export default NewPostForm;

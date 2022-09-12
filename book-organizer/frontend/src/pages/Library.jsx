import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { push, reset } from "../features/upload/uplaodSlice";

function Library() {
  const [bookName, setBookName] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isError, isSuccess, message } = useSelector((state) => state.upload);

  const cancel = (e) => {
    e.preventDefault();
    setBookName("");
  };

  const upload = () => {
    const book = { bookName };
    dispatch(push(book));
  };

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess) {
      navigate("/Library");
    }

    dispatch(reset());
  }, [isError, isSuccess, message, navigate, dispatch]);

  return (
    <div className="Library block">
      <h1 className="text-center my-14 text-white text-3xl">Your Space</h1>
      <p className="text-white paragraph">
        upload books to read them at any time you want
      </p>
      <form className="mx-6 my-32" onSubmit={upload}>
        <input
          type="file"
          id="actual-btn"
          hidden
          onChange={(e) => setBookName(e.target.value)}
        />
        <label for="actual-btn" className="font-semibold text-sm">
          {!bookName ? "Choose File +" : bookName}
        </label>
        <br />
        <div className="buttons my-32">
          <input
            type="submit"
            value="upload"
            className="text-white upload-button"
          />
          <button className="cancel text-white" onClick={cancel}>
            cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default Library;

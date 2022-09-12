import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login, reset } from "../features/auth/authSlice";
import Spinner from "../components/Spinner";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || user) {
      navigate("/Dash");
    }

    if (isError || !user) {
      navigate("/login");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email,
      password,
    };

    dispatch(login(userData));
  };

  return (
    <div className="login">
      <h1 className="text-white text-center text-3xl m-8">Login</h1>
      <form onSubmit={onSubmit}>
        <div className="grid grid-cols-1 gap-5 my-16 mx-12">
          <input
            type="email"
            placeholder="E-mail"
            name="email"
            value={email}
            onChange={onChange}
          />
          <input
            type="password"
            placeholder="password"
            name="password"
            value={password}
            onChange={onChange}
          />
          <input
            type="submit"
            className="my-20 login-button text-white"
            value="login"
          />
        </div>
      </form>
    </div>
  );
}

export default Login;

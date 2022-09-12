import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { register, reset } from "../features/auth/authSlice";
import { Spinner } from "react-bootstrap";

function Register() {

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });

  const { username, email, password, password2 } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess) {
      navigate("/login");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (password !== password2) {
      toast.error("password do not match");
    } else {
      const userData = {
        username,
        email,
        password,
      };

      dispatch(register(userData));
    }
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="register">
      <h1 className="text-white text-center text-3xl m-8">Register</h1>
      <form onSubmit={onSubmit}>
        <div className="grid grid-cols-1 gap-5 my-16 mx-12">
          <input
            type="text"
            placeholder="username"
            value={username}
            name="username"
            onChange={onChange}
          />
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            name="email"
            onChange={onChange}
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            name="password"
            onChange={onChange}
          />
          <input
            type="password"
            placeholder="confirm password"
            value={password2}
            name="password2"
            onChange={onChange}
          />
          <input type="submit" className="register-button my-20 text-white" value="register" />
          <h5 className="login-link text-white text-sm">
            Already have an account ?{" "}
            <Link to="/login" className="link text-lg">
              login
            </Link>
          </h5>
        </div>
      </form>
    </div>
  );
}

export default Register;

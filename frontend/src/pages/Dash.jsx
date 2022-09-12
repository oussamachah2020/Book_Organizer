import { BiLogOut } from "react-icons/bi";
import "../css/Dash.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";
import "../css/Dash.css";
import { useEffect } from "react";

function Dash() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/login");
  };

  return (
    <div className="Dashboard">
      <h1 className="text-white text-center text-3xl m-8">Book Organizer</h1>
      <BiLogOut className="logout text-3xl " onClick={onLogout} />
      <h2 className="text-white text-center mx-20 text-xl">
        Welcome {user.username}
      </h2>
      <div className="buttons-container grid grid-cols-2 gap-12 my-28 mx-12">
        <button className="text-balck text-lg dashBtn w-36" id="statics">
          Statics
        </button>
        <Link to="/Library">
          <button className="text-balck text-lg dashBtn w-36" id="library">
            Library
          </button>
        </Link>
        <button className="text-balck text-lg dashBtn w-36" id="profile">
          Profile
        </button>
        <button className="text-balck text-lg dashBtn w-36" id="random">
          Button
        </button>
      </div>
    </div>
  );
}

export default Dash;

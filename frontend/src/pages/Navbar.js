import { Link } from "react-router-dom";
import { MainButton } from "../components/buttons/MainButton";
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout";

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleClick = () => {
    logout();
  };

  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>Drag and Drop React App</h1>
        </Link>
        <nav>
          {user && (
            <div>
              <span
                style={{
                  fontSize: "22px",
                  color: "grey",
                  fontStyle: "italic",
                  letterSpacing: "1.5px",
                }}
              >
                {`Welcome`} ,{" "}
              </span>
              <span
                style={{
                  fontSize: "18px",
                  fontStyle: "italic",
                  letterSpacing: "1.5px",
                }}
              >
                {user?.email}
              </span>
              <MainButton onClick={handleClick} type={`Log out`} />
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

import postifyMeLogo from "../../assets/logo/postifyMeLogo.png";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../../redux/slices/themeSlice/themeSlice";
import { CustomNavbar } from "./NavbarStyle";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Navbar = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);

  const handleDarkMode = () => {
    dispatch(setTheme("dark"));
    localStorage.setItem("postifyMeTheme", JSON.stringify("dark"));
  };

  const handleLightMode = () => {
    dispatch(setTheme("light"));
    localStorage.setItem("postifyMeTheme", JSON.stringify("light"));
  };
  return (
    <CustomNavbar className="navbar navbar-expand-lg sticky-top" theme={theme}>
      <div className="container">
        <Link to="/" className="navbar-brand">
          <img
            src={postifyMeLogo}
            alt="PostifyMe"
            className="img-fluid"
            width="150px"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex gap-lg-4 gap-2">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="sss" className="nav-link">
                Sıkça Sorulan Sorular
              </Link>
            </li>
            <li className="nav-item">
              <Link to="contact" className="nav-link">
                İletişim
              </Link>
            </li>
          </ul>
          <div className="d-flex">
            {theme == "light" ? (
              <BsFillSunFill
                size="1.2rem"
                onClick={handleDarkMode}
                cursor="pointer"
              />
            ) : (
              <BsFillMoonFill
                size="1.2rem"
                onClick={handleLightMode}
                cursor="pointer"
              />
            )}
          </div>
        </div>
      </div>
    </CustomNavbar>
  );
};

export default Navbar;

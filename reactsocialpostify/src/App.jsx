import Navbar from "./components/Navbar/Navbar";
import Router from "./routes/Router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "./redux/slices/themeSlice/themeSlice";
import { GlobalStyle } from "./GlobalStyle/GlobalStyle";
import Footer from "./components/Footer/Footer";
function App() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);

  useEffect(() => {
    const postifyMeTheme = localStorage.getItem("postifyMeTheme");
    if (postifyMeTheme) {
      const parsedTheme = JSON.parse(postifyMeTheme);
      dispatch(setTheme(parsedTheme));
    } else {
      dispatch(setTheme("light"));
      localStorage.setItem("postifyMeTheme", JSON.stringify("light"));
    }
  }, []);

  return (
    <>
      <GlobalStyle theme={theme} />
      <Navbar />
      <Router />
      <Footer />
    </>
  );
}

export default App;

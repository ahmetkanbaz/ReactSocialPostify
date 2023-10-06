import { CustomFooter } from "./FooterStyle";
import { useSelector } from "react-redux";
const Footer = () => {
  const theme = useSelector((state) => state.theme.theme);
  return (
    <CustomFooter theme={theme} className="py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-4 col-sm-6 col-12">
            <div className="bg-danger"> Footer</div>
          </div>
          <div className="col-md-4 col-sm-6 col-12">
            <div className="bg-info"> Footer</div>
          </div>
          <div className="col-md-4 col-sm-6 col-12">
            <h5>İletişime Geçin</h5>
          </div>
        </div>
      </div>
    </CustomFooter>
  );
};

export default Footer;

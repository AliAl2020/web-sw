import './MainTemplate.css';

const MainTemplate = ({ children }) => {
  return (
    <div className="main-template-container">
      {/* Main Bootstrap Grid */}
      <div className="container-fluid h-100">
        <div className="row h-100 align-items-center">
          <div className="col-4"></div> {/* Left column placeholder */}
          <div className="col-4">
            {/* Middle column where children will be placed */}
            {children}
          </div>
          <div className="col-4"></div> {/* Right column placeholder */}
        </div>
      </div>
    </div>
  );
};

export default MainTemplate;

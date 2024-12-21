import './Menu.css';
import { FaPrint } from 'react-icons/fa';
const Menu = ({ title, onMinimize, onExportPdf, minimizeIcon }) => {
  return (
    <div className="menu-container overflow-auto">
      <h2 className="menu-title">{title}</h2>
      <div className="menu-buttons">
        <button className="menu-button" onClick={onMinimize} title="Minimize or Expand">
          {minimizeIcon}
        </button>
        <button className="menu-button" onClick={onExportPdf} title="Export to PDF">
        <FaPrint />
        </button>
      </div>
    </div>
  );
};

export default Menu;

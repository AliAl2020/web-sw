import Menu from './Menu';
import './Block.css';
import React, { useState } from 'react';
import html2pdf from 'html2pdf.js';
import { FaPrint, FaMinus, FaPlus } from 'react-icons/fa';

const Block = ({ children }) => {
  const { title, content } = children;
  const [isMinimized, setIsMinimized] = useState(false);

  const handleMinimize = () => {
    setIsMinimized((prev) => !prev);
  };

  const handleExportPdf = () => {
    const element = document.getElementById(`block-${title}`);
    const options = {
      margin: 10,
      filename: `${title}.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    };

    html2pdf().set(options).from(element).save();
  };

  return (
    <div id={`block-${title}`} className="block-wrapper">
      <Menu
        title={title}
        onMinimize={handleMinimize}
        onExportPdf={handleExportPdf}
        minimizeIcon={isMinimized ? <FaPlus /> : <FaMinus />}
      />
      <div className={`block-container ${isMinimized ? 'minimized' : ''}`}>
        {!isMinimized && <div className="block-content">{content}</div>}
      </div>
    </div>
  );
};

export default Block;

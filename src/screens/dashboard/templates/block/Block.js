import Menu from './Menu';
import './Block.css';
import React, { useState } from 'react';
import html2pdf from 'html2pdf.js';
import { FaPrint, FaMinus, FaPlus } from 'react-icons/fa';

import { ResizableBox } from 'react-resizable';
import 'react-resizable/css/styles.css'; // Required for default styling

const Block = ({ children }) => {
    const [width, setWidth] = useState(300);
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
    <ResizableBox
    width={width}
    //height={200} // Fixed height
    axis="x" // Allow resizing only horizontally
    resizeHandles={['e','w']} // Resize from the right edge
    //minConstraints={[200, 200]} // Minimum width and height
    //maxConstraints={[600, 200]} // Maximum width and height
    onResizeStop={(e, data) => setWidth(data.size.width)} // Update state on resize
  >
    <div id={`block-${title}`} className="block-wrapper">
      <Menu
        title={title}
        onMinimize={handleMinimize}
        onExportPdf={handleExportPdf}
        minimizeIcon={isMinimized ? <FaPlus /> : <FaMinus />}
      />
      <div className={`overflow-auto block-container ${isMinimized ? 'minimized' : ''}`}>
        {!isMinimized && <div className="block-content">{content}</div>}
      </div>
    </div>
    </ResizableBox>
  );
};

export default Block;

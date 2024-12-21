import React, { useState, useEffect } from "react";
import "./MainTemplate.css";
import { Responsive, WidthProvider } from "react-grid-layout";

// Wrap the Responsive component to use WidthProvider for responsive behavior
const ResponsiveReactGridLayout = WidthProvider(Responsive);

const MainTemplate = ({ children }) => {
  const [isDraggable, setIsDraggable] = useState(false);

  useEffect(() => {
    // Enable dragging when the "Shift" key is pressed
    const handleKeyDown = (e) => {
      if (e.key === "Shift") {
        setIsDraggable(true);
      }
    };

    // Disable dragging when the "Shift" key is released
    const handleKeyUp = (e) => {
      if (e.key === "Shift") {
        setIsDraggable(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  const layout = children.map((_, index) => ({
    i: `block-${index}`,
    x: (index % 2) * 6, // Alternating columns for a two-column layout
    y: Math.floor(index / 2), // Position in rows
    w: 6, // Width spans 6 grid units (half the width in a 12-column layout)
    h: 2, // Height spans 2 grid units
  }));

  return (
    <div className="main-template-container">
      <ResponsiveReactGridLayout
        className="layout"
        cols={{ lg: 12, md: 8, sm: 6, xs: 2, xxs: 1 }} // Define column numbers per screen size
        rowHeight={150} // Adjust height of each row
        layouts={{ lg: layout, md: layout, sm: layout, xs: layout, xxs: layout }} // Pass layout configurations
        margin={[16, 16]} // Add gap between items
        isDraggable={isDraggable} // Enable or disable dragging dynamically
        isResizable={true} // Allow resizing always
      >
        {children.map((child, index) => (
          <div key={`block-${index}`} className="grid-item">
            {child}
          </div>
        ))}
      </ResponsiveReactGridLayout>
    </div>
  );
};

export default MainTemplate;

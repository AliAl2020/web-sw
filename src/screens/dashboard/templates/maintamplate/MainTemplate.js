import React, { useState, useEffect } from "react";
import "./MainTemplate.css";
import { Responsive, WidthProvider } from "react-grid-layout";

const ResponsiveReactGridLayout = WidthProvider(Responsive);

const MainTemplate = ({ children }) => {
  const [isDraggable, setIsDraggable] = useState(false);

  // Ensure children is always treated as an array
  const processedChildren = React.Children.toArray(children);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Shift") {
        setIsDraggable(true);
      }
    };

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

  // Define layout for grid items
  const layout = processedChildren.map((_, index) => ({
    i: `block-${index}`,
    x: (index % 2) * 6,
    y: Math.floor(index / 2),
    w: 6,
    h: 2,
  }));

  return (
    <div className="main-template-container ">
      {processedChildren.length > 0 ? (
        <ResponsiveReactGridLayout
          className="layout "
          cols={{ lg: 12, md: 8, sm: 6, xs: 2, xxs: 1 }}
          rowHeight={90}
          layouts={{
            lg: layout,
            md: layout,
            sm: layout,
            xs: layout,
            xxs: layout,
          }}
          margin={[10, 10,10,10]}
          isDraggable={isDraggable}
          isResizable={true}
          containerPadding={[10, 10,10,10]}
        >
          {processedChildren.map((child, index) => (
            <div key={`block-${index}`} className="grid-item">
              {child}
            </div>
          ))}
        </ResponsiveReactGridLayout>
      ) : (
        <p>No content available</p>
      )}
    </div>
  );
};

export default MainTemplate;

import React from "react";

const ImageTable = () => {
  // Dummy image URLs for demonstration purposes
  const imageUrls = [
    "/html.png",
    "/css.png",
    "/js.png",
    "/mongo.png",
    "/express.png",
    "/react.png",
    "/node.png",
    "/git.png",
  ];

  const columnCounts = [3, 4, 1];
  let imageIndex = 0;

  return (
    <table>
      <tbody>
        {columnCounts.map((columnCount, rowIndex) => (
          <tr key={rowIndex}>
            {[...Array(columnCount)].map((col, colIndex) => {
              const currentImage = imageUrls[imageIndex];
              imageIndex = (imageIndex + 1) % imageUrls.length;

              return (
                <td key={colIndex} className="p-5 hover:scale-110">
                  {/* Render image based on the index */}
                  {currentImage && (
                    <img
                      src={currentImage}
                      alt="logo"
                      style={{ width: "100px", height: "100px" }}
                    />
                  )}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ImageTable;

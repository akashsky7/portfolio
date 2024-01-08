import React from "react";

const Project = () => {
  // Dummy data for demonstration purposes
  const tableData = [
    {
      imageUrl: "/EzShopping.png",
      content: "EzShopping",
      github: "https://github.com/akashsky7/ez-shopping",
      url: "https://ezshopping-28321.web.app/",
    },
    {
      imageUrl: "/keep.webp",
      content: "Google Keep",
      github: "https://github.com/akashsky7/google-keep-clone",
    },
    {
      imageUrl: "/todo.png",
      content: "TodoList-App",
      github: "https://github.com/akashsky7/ToDoList-App",
      url: "https://akashsky7.github.io/ToDoList-App/",
    },
  ];

  return (
    <div className="flex items-center justify-center">
      <table>
        <tbody>
          {[...Array(1)].map((_, rowIndex) => (
            <tr key={rowIndex} className="flex space-x-48 max-md:space-x-0 max-md:flex-col max-md:items-center">
              {[...Array(3)].map((_, colIndex) => {
                const cellIndex = rowIndex * 3 + colIndex;
                const cellData = tableData[cellIndex];

                return (
                  <td
                    key={colIndex}
                    className="w-1/3 pt-24 flex flex-col items-center max-md:w-full max-md:items-center"
                  >
                    {/* Render image and content in each cell */}
                    <a
                      href={cellData.url}
                      rel="noopener noreferrer"
                      target="_blank"
                      className="flex flex-col items-center transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"
                    >
                      <img
                        src={cellData.imageUrl}
                        alt="projectimage"
                        style={{
                          width: "100px",
                          height: "100px",
                          borderRadius: "30px",
                        }}
                      />
                      <p className="text-2xl pt-3">{cellData.content}</p>
                    </a>
                    {tableData[colIndex].url ? (
                      <div className="flex flex-col">
                        <a
                          className="text-sm border p-2 m-2 mt-10 rounded-3xl w-36 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 hover:border-myblue"
                          href={cellData.url}
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          Visit
                        </a>
                        <a
                          className="text-sm border p-2 m-2 rounded-3xl w-36 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 hover:border-myblue"
                          href={cellData.github}
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          Source Code
                        </a>
                      </div>
                    ) : (
                      <div className="flex flex-col">
                        <a
                          className="text-sm border p-2 m-2 mt-10 rounded-3xl w-36 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 hover:border-myblue"
                          href={cellData.github}
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          Source Code
                        </a>
                      </div>
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Project;

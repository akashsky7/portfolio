import React from "react";

function Company() {
  return (
    <div className="flex flex-col pt-12 items-center">
      <div className="flex flex-col w-96">
        <div className="flex items-center">
          <img
            src="./accenture_logo.jpeg"
            className="w-10 h-10 rounded-3xl"
            alt="Accenture Logo"
          />
          <div className="text-left pl-8">
            <h5 className="text-2xl">Accenture</h5>
            <p className="">Full-time · Jul 2021 - Present</p>
          </div>
        </div>
        <div className="text-left pl-20 pt-2">
          <ul className="">
            <div className="p-2">
              <li className="list-disc">Team Lead - (Jun 2022 - Present)</li>
              <p>Skills: Git, Node.JS, React, JavaScript, Restful APIs, MongoDB</p>
            </div>
            <div className="p-2">
              <li className="list-disc">
                Senior Developer - (Jul 2021 - Jun 2022)
              </li>
              <p>Skills: Git, Node.JS, React, JavaScript, Restful APIs, MongoDB</p>
            </div>
          </ul>
        </div>
      </div>
      <div className="text-myblue text-2xl">···</div>
      <div className="flex flex-col w-96">
        <div className="flex items-center">
          <img
            src="./ibm_logo.jpeg"
            className="w-10 h-10 rounded-3xl"
            alt="IBM Logo"
          />
          <div className="text-left pl-8">
            <h5 className="text-2xl">IBM</h5>
            <p className="">Full-time · May 2018 - Jul 2021</p>
          </div>
        </div>
        <div className="text-left pl-20 pt-2">
          <ul className="">
            <div className="p-2">
              <li className="list-disc">Application Developer - (Jun 2019 - Jul 2021)</li>
              <p>Skills: Git, Angular, HTML, CSS, Node.JS, React, JavaScript, Restful APIs, SQL Server</p>
            </div>
            <div className="p-2">
              <li className="list-disc">
                Associate Developer - (May 2018 - May 2019)
              </li>
              <p>Skills: Git, HTML, CSS, Node.JS, JavaScript, Restful APIs, SQL Server</p>
            </div>
          </ul>
        </div>
      </div>     
    </div>
  );
}

export default Company;

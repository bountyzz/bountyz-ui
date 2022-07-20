import React from "react";


export interface IEmployerCourse {
  name: string;
  desc: string;
  url: string;
  bounty: number;
}

const EmployerCourseComp: React.FC<IEmployerCourse> = ({
  name,
  desc,
  url,
  bounty
}) => {
  return (
    <div className="w-80 bg-white shadow rounded border border-transparent hover:border-blue-500 cursor-pointer">
        <div className="h-48 w-full bg-gray-200 flex flex-col justify-between p-4 bg-cover bg-center" 
            style={{backgroundImage: "url('https://www.kindpng.com/picc/m/318-3180572_online-course-icon-hd-png-download.png')"}}>
        </div>
        <div className="p-4">
            <div className="flex items-center justify-between">
                <h3 className="text-gray-600 font-medium text-lg">{name}</h3>
                <button className="text-white p-4 uppercase rounded-full bg-indigo-500 hover:bg-indigo-600 flex items-center shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                  <a href={url} >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    </svg>
                  </a>
                </button>
            </div>
            <p className="text-gray-400 text-sm my-1">{desc}</p>
            <span className="uppercase text-lg bg-green-50 p-0.5 border-green-500 border rounded text-green-700 font-medium">${bounty}</span>
         </div>
    </div>
  );
};

export default EmployerCourseComp;

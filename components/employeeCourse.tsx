import { useRouter } from "next/router";
import React from "react";


export interface IEmployeeCourse {
  id: number;
  name: string;
  desc: string;
  url: string;
  bounty: number;
  isShowCourses: boolean;
}

const EmployeeCourseComp: React.FC<IEmployeeCourse> = ({
  id, 
  name,
  desc,
  url,
  bounty,
  isShowCourses
}) => {

    const router = useRouter();
    const beginCourse = async (courseID: number, url: string) => {
    router.push('/course?courseID=' + id + "&courseURL=" + url+"&courseBounty="+ bounty);
  };
  return (
    <div>
      {( ((name.length != 0) && (url.length != 0) && (desc.length != 0) && (bounty != 0)) ? 
        (isShowCourses ? 
          (<div className="w-80 bg-white shadow rounded border border-transparent hover:border-blue-500 cursor-pointer">
          <div className="h-48 w-full bg-gray-200 flex flex-col justify-between p-4 bg-cover bg-center" 
              style={{backgroundImage: "url('https://www.kindpng.com/picc/m/318-3180572_online-course-icon-hd-png-download.png')"}}>
          </div>
          <div className="p-4">
              <div className="flex items-center justify-between">
                  <h3 className="text-gray-600 font-medium text-lg">{name}</h3>
                  <button className="text-white p-4 uppercase rounded-full bg-indigo-500 hover:bg-indigo-600 flex items-center shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                    <a href={url}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      </svg>
                    </a>
                  </button>
              </div>
              <p className="text-gray-400 text-sm my-1">{desc}</p>
              <span className="uppercase text-lg bg-green-50 p-0.5 border-green-500 border rounded text-green-700 font-medium">${bounty}</span>
          </div>
          <button className="text-white py-2 px-4 rounded-lg bg-green hover:bg-purple-800 font-medium transition-colors shadow-md"
                  onClick={() => beginCourse(id, url)}>
              Begin
          </button>
          </div>) :
          (<div className="w-80 bg-white shadow rounded border border-transparent hover:border-blue-500 cursor-pointer">
            <div className="h-48 w-full bg-gray-200 flex flex-col justify-between p-4 bg-cover bg-center" 
                style={{backgroundImage: "url('https://www.kindpng.com/picc/m/318-3180572_online-course-icon-hd-png-download.png')"}}>
            </div>
            <div className="p-4">
                <div className="flex items-center justify-between">
                    <h3 className="text-gray-600 font-medium text-lg">{name}</h3>
                    <button className="text-white p-4 uppercase rounded-full bg-indigo-500 hover:bg-indigo-600 flex items-center shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                      <a href={url}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        </svg>
                      </a>
                    </button>
                </div>
                <p className="text-gray-400 text-sm my-1">{desc}</p>
                <span className="uppercase text-lg bg-green-50 p-0.5 border-green-500 border rounded text-green-700 font-medium">${bounty}</span>
            </div>
        </div>)) : "")}
    </div>
  );
};

export default EmployeeCourseComp;

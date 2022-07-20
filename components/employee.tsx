import React, { useEffect, useState } from "react";
import Button from "../components/button";
import DeleteEmployee from "../components/delete_employee";


export interface IEmployee {
  name: string;
  address: string;
  isActive: boolean;
}

const EmployeeComp: React.FC<IEmployee> = ({
  address,
  name,
  isActive,
}) => {
  const [showDeleteEmployee, setShowDeleteEmployee] = useState(false);
  return (
    <div>{((isActive) ? 
      (<div className="flex p-4 items-center rounded-lg shadow-lg overflow-hidden border-1 border-b-grey-medium">
      <div className="p-6 flex">
        <img src="/employee_profile.png" width={64} height={64} />
        <div className="ml-6">
          <div className="mb-2 flex items-center">
            <h3 className="text-blue-dark text-lg mr-3">{name}</h3>
          </div>
          <p className="text-grey-medium">{address}</p>
        </div>
      </div>
      <Button
          className="text-sm w-full rounded-md flex justify-end mt-4"
          onClick={() => setShowDeleteEmployee(true)}>
          <div className="flex items-center">
            <span className="font-medium text-base">
              Delete
            </span>
          </div>
        </Button>
      <DeleteEmployee
        show={showDeleteEmployee}
        address={address}
        onClose={() => setShowDeleteEmployee(false)}
      />
    </div>) : "")}
  </div>
  );
};

export default EmployeeComp;

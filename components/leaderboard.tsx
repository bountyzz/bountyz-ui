import React from "react";


export interface ITopPerformers {
  name: string;
  address: string;
  totalBounty: number;
}

const LeaderBoardComp: React.FC<ITopPerformers> = ({
  address,
  name,
  totalBounty,
}) => {
  return (
    <div>
        {( ((name.length != 0) && (address.length != 0) && (totalBounty != 0)) ? 
        (
        <div className="p-4 text-white bg-green shadow-lg border border-gray-100  rounded-2xl font-medium">
            <p>{name}</p>
            <p>{address}</p>
            <p>{totalBounty}</p>
        </div>
        ) : "")}
    </div>
  );
};

export default LeaderBoardComp;

import React, { useEffect, useState } from "react";
import { useStore } from "../services/store";
import { getUSDCXBalance } from "../services/usdcx_contract";
import { flowDetails } from "../hooks/useSFsdk";
import { ethers } from "ethers";
import RunningBalance from "../components/running_balance";
import EmployeeCourseComp from "../components/employeeCourse";
import LeaderBoardComp from "../components/leaderboard";
import WithdrawModal from "../components/withdraw_modal";
import Button from "../components/button";

const MAX_FETCH_RETRIES = 60; // max retries to fetch from provider when expecting a change
const FETCH_RETRY_TIMEOUT = 1000; // timeout between fetches when expecting a change

const Employee: React.FC = () => {
  const {
    state: { contract, provider, wallet },
  } = useStore();

  const [balance, setBalance] = useState<number>();
  const [netFlow, setNetFlow] = useState<number>(0);
  const [username, setUsername] = useState();
  const [courses, setCourses] = useState([]);
  const [completedCourses, setCompletedCourses] = useState([]);
  const [topPerformers, setTopPerformers] = useState([]);
  const [showWithdraw, setShowWithdraw] = useState(false);

  const fetchTopPerformers = async () => {
    const newTopPerformers = await contract.getTopPerformers();
    setTopPerformers(newTopPerformers);
  };

  //To fetch employees onload
  useEffect(() => {
    if (!contract) {
      return;
    }

    fetchUsername();
    fetchTopPerformers();
  }, [contract]);

  const fetchUsername = async () => {
    const user_name = await contract.getUserName(wallet);
    console.log("Username: " + user_name);
    setUsername(user_name);
  };

  const updateBalance = () => {
    getUSDCXBalance(provider, wallet).then((value) => {
      console.log("Wallet:" + wallet);
      setBalance(parseFloat(value));
    });
  };

  const updateNetFlow = async () => {
    const result = await flowDetails(wallet);
    console.log("updateNetFlow, result: " + result);
    console.log("updateNetFlow, result.cfa.netFlow: " + result.cfa.netFlow);
    setNetFlow(parseFloat(ethers.utils.formatEther(result.cfa.netFlow)));
  };

  useEffect(() => {
    if (!provider) {
      return;
    }
    const id = setInterval(() => {
      updateBalance();
    }, 25000);

    updateBalance();
    updateNetFlow();
    return () => clearInterval(id);
  }, [provider]);

  const [coursesLoading, setCoursesLoading] = useState(false);

  const fetchCourses = async (retry = false, retries = 0) => {
    setCoursesLoading(true);
    const newCourses = await contract.fetchCourses();
    const completedCourses = await contract.fetchCompletedCourses();
    console.log("Fetch Courses Call.....");
    if (
      retry &&
      retries < MAX_FETCH_RETRIES &&
      courses.length === newCourses.length
    ) {
      return setTimeout(
        () => fetchCourses(true, retries + 1),
        FETCH_RETRY_TIMEOUT
      );
    }
    console.log("Init load courses");
    setCoursesLoading(false);
    setCourses(newCourses);
    setCompletedCourses(completedCourses);
  };

  //To fetch courses onload
  useEffect(() => {
    if (!contract) {
      return;
    }

    fetchCourses();
  }, [contract]);

  return (
    <div>
      <h1 className="text-xxl text-blue-dark mb-[5vh] ">
        Welcome to your Learner account,
        <br /> {username}
      </h1>
      <div className="bg-blue-dark px-6 py-8 rounded-xl text-white flex justify-between items-end stretch">
        <div className="flex flex-col items-start">
          <p className="text-base mb-1">FUNDS OVERVIEW</p>
          <h1 className={`text-xxl mb-6 flex items-end`}>
            {balance ? <RunningBalance value={balance} rate={netFlow} /> : 0}
            <span className="text-base ml-2"> USDCx</span>
          </h1>
          <img
            src="https://cryptologos.cc/logos/usd-coin-usdc-logo.svg?v=022"
            alt="USDC logo"
            width={48}
            height={48}
          />
        </div>
        <Button
          className="text-sm w-full rounded-md flex justify-end mt-4"
          onClick={() => setShowWithdraw(true)}>
          <div className="flex items-center">
            <span className="font-medium text-base">
              Convert to USDC
            </span>
          </div>
        </Button>
        <WithdrawModal
            show={showWithdraw}
            onClose={() => setShowWithdraw(false)}
            onTransfer={() => updateBalance()}
          />
      </div>

      <br />

      <div className={`mt-16`}>
        <div className="mb-8 flex items-center">
          <p className="text-md">LEADERBOARD</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-4 auto-cols-min overflow-hidden mb-6">
          {topPerformers.map((item) => (
            <LeaderBoardComp
              key={item[0]}
              address={item[0]}
              name={item[1]}
              totalBounty={item[3]}
            />
          ))}
        </div>
      </div>

      <br />
      <div className={`mt-16`}>
        <div className="mb-8 flex items-center">
          <p className="text-md">AVAILABLE COURSES</p>
        </div>
        <div className="flex items-start justify-start mb-6">
          {courses.map((item) => (
            <EmployeeCourseComp
              key={item[0]}
              id={item[0]}
              name={item[1]}
              desc={item[2]}
              url={item[4]}
              bounty={item[5]}
              isShowCourses={true}
            />
          ))}
        </div>
      </div>

      <br />
      <div className={`mt-16`}>
        <div className="mb-8 flex items-center">
          <p className="text-md">COMPLETED COURSES</p>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 auto-cols-min overflow-hidden mb-6">
          {completedCourses.map((item) => (
            <EmployeeCourseComp
              key={item[0]}
              id={item[0]}
              name={item[1]}
              desc={item[2]}
              url={item[4]}
              bounty={item[5]}
              isShowCourses={false}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Employee;

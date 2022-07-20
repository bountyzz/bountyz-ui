import { useRouter } from "next/router";
import React, { Component, useEffect, useState } from 'react'
import PlyrComponent from '../components/videoPlayer'
import Button from "../components/button";
import { useStore } from "../services/store";
import { createFlow } from "../hooks/useSFsdk";
import { ethers } from "ethers";


const VideoPlayerComp: React.FC = ({

}) => {

  const {
    state: { contract, wallet, provider},
} = useStore();

  const router = useRouter();
  const { courseID } = router.query;
  const { courseURL } = router.query;
  const { courseBounty } = router.query;
  let cid:string = {courseID}.courseID as string;
  let cURL:string = {courseURL}.courseURL as string;
  let bounty:string = {courseBounty}.courseBounty as string;
  

  const STREAMING_DAYS = 30;

  const setCourseCompleted = async (_cid: number, _bounty: number) => {

    router.push('/assessment?courseID=' + _cid+'&courseBounty='+_bounty);
  };

  //To fetch courses onload
  useEffect(() => {
    if (!contract) {
      return;
    }

  }, [contract]);

  return (
    <div>
        <div>
          <PlyrComponent url={cURL} id={cid} />
        </div>
        <br />
        <div>
          <Button
            className="text-sm w-full rounded-md flex justify-end mt-4"
            onClick={() => setCourseCompleted(parseInt(cid, 0), parseInt(bounty, 0))}>
            <div className="flex items-center">
              <span className="font-medium text-base">
                Start Assessment
                </span>
            </div>
          </Button>
        </div>
    </div>
  )

};

export default VideoPlayerComp;

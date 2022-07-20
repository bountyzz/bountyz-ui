import { useRouter } from "next/router";
import React, { useState } from "react";
import { Form, FormControl, InputGroup } from "react-bootstrap";
import Button from "../components/button";
import { useStore } from "../services/store";

const Enroll: React.FC = () => {
  const router = useRouter();

  const [name, setName] = useState("");

  const {
    state: { contract },
  } = useStore();
  const handleEmployerOnboard = async (name) => {
    console.log("contract: "+contract);
    await contract.createEmployer(name);
    router.push("/employer");
  };
  return (
    <div className="flex flex-1 flex-col items-center justify-center">
      <h1 className="text-hero text-blue-dark text-center mb-[8vh]">
        Enroll as<br />
        Sponsor
      </h1>
      <div className="flex">
        <InputGroup className="flex flex-col text-md mr-6">
              <Form.Label htmlFor="name">Enter Sponsor&apos;s name</Form.Label>
              <FormControl
                placeholder="Organisation name"
                aria-label="name"
                style={{ width: "100%", borderRadius: 12 }}
                onChange={(value) => setName(value.currentTarget.value)}
              />
            </InputGroup>
        <Button className="mr-12 bg-blue-dark" onClick={() => handleEmployerOnboard(name)}>
          Signup
        </Button>
      </div>
    </div>
  );
};

export default Enroll;

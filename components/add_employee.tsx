import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import Modal from "react-bootstrap/Modal";
import { useStore } from "../services/store";
import Arrow from "./arrow";
import Button from "./button";
import Slider from "./slider";
import Toggle from "./toggle";


interface IProps {
    show: boolean;
    onClose: () => void;
    onAdd: () => void;
  }
  
  const AddEmployee: React.FC<IProps> = ({ show, onClose, onAdd }) => {
    const [name, setName] = useState("");
    const [wallet, setWallet] = useState("");
    const [withdraw, setWithdraw] = useState(false);
    const [loading, setLoading] = useState(false);
    const {
      state: { contract },
    } = useStore();
  
    const createNewEmployee = async (wallet, name) => {
      setLoading(true);
      try {
        await contract.addEmployee(wallet, name);
        if (withdraw) {
          await contract.changeAccess(wallet);
        }
        onAdd();
      } catch (error) {
      } finally {
        setLoading(false);
        onClose();
      }
    };
  
    return (
      <Modal show={show} onHide={onClose} dialogClassName="w-modal" size="lg">
        <Modal.Header closeButton className="mb-7 border-0 px-12 pt-12">
        <h1 className="text-xl">
          Add a<br />
          New Learner
        </h1>
        </Modal.Header>
        <div className="flex text-md px-12 pb-12 justify-between items-end">
          <div className="flex-1 mr-12">
            <InputGroup className="flex flex-col">
              <Form.Label htmlFor="name">Enter Learner&apos;s name</Form.Label>
              <FormControl
                placeholder="Vitalik"
                aria-label="name"
                style={{ width: "100%", borderRadius: 12 }}
                onChange={(value) => setName(value.currentTarget.value)}
              />
            </InputGroup>
            <InputGroup className="flex flex-col mt-6">
              <Form.Label htmlFor="wallet">Wallet address</Form.Label>
              <FormControl
                placeholder="0x71bE63f3384f5fb98995898A86B02Fb2426c5788"
                aria-label="wallet"
                style={{ width: "100%", borderRadius: 12 }}
                onChange={(value) => setWallet(value.currentTarget.value)}
              />
            </InputGroup>
            <InputGroup className="flex flex-col mt-6">
              <Form.Label htmlFor="withdraw">
                Allow withdrawal for this learner?
              </Form.Label>
              <Toggle
                value={withdraw}
                onValueChange={setWithdraw}
                className="self-start"
              >
                <p className="text-grey-medium ml-2 pr-4">
                  {withdraw ? "Yes, allow" : "No, don’t allow"}
                </p>
              </Toggle>
            </InputGroup>
          </div>
          <Button
            className={loading && "animate-pulse pointer-events-none"}
            size="large"
            onClick={() => createNewEmployee(wallet, name)}
            disabled={!name || !wallet}
          >
            <div className="flex items-center">
              <span className="">Add</span>
            </div>
          </Button>
        </div>
      </Modal>
    );
  };
  
  export default AddEmployee;
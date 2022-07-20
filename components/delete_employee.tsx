import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { useStore } from "../services/store";
import Button from "./button";


interface IProps {
    show: boolean;
    address: string;
    onClose: () => void;
  }
  
  const DeleteEmployee: React.FC<IProps> = ({ show, address, onClose }) => {
    const [loading, setLoading] = useState(false);
    const {
      state: { contract },
    } = useStore();
  
    const deleteEmployee = async (address) => {
      setLoading(true);
      try {
        await contract.deleteEmployee(address);
      } catch (error) {
      } finally {
        setLoading(false);
        onClose();
      }
    };

    const closeWindow = async () => {
        setLoading(false);
        onClose();
      };
  
    return (
      <Modal show={show} onHide={onClose} dialogClassName="w-modal" size="sm">
        <Modal.Header closeButton className="mb-7 border-1 px-12 pt-12">
        <h4 className="text-xl">
          Are you sure you want to delete learner?
        </h4>
        </Modal.Header>
        <div className="flex text-md px-12 pb-12 justify-between items-end">
          <Button
            className={loading && "animate-pulse pointer-events-none"}
            size="medium"
            onClick={() => deleteEmployee(address)}
          >
            <div className="flex items-center">
              <span className="">Yes</span>
            </div>
          </Button>
          <Button
            className={loading && "animate-pulse pointer-events-none"}
            size="medium"
            onClick={() => closeWindow()}
          >
            <div className="flex items-center">
              <span className="">No</span>
            </div>
          </Button>
        </div>
      </Modal>
    );
  };
  
  export default DeleteEmployee;
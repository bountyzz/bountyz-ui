import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import Modal from "react-bootstrap/Modal";
import { useStore } from "../services/store";
import Button from "./button";

interface IProps {
    show: boolean;
    onClose: () => void;
    onAdd: () => void;
  }
  
  const AddCourse: React.FC<IProps> = ({ show, onClose, onAdd }) => {
    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");
    const [url, setUrl] = useState("");
    const [bounty, setBounty] = useState(0);
    const [loading, setLoading] = useState(false);
    const {
      state: { contract },
    } = useStore();
  
    const createNewCourse = async (name, desc, url, bounty) => {
      setLoading(true);
      try {
        let extractedUrl = youtube_parser(url);
        console.log("extractedUrl: "+extractedUrl);
        await contract.createCourse(name, desc, url, bounty);
        onAdd();
      } catch (error) {
      } finally {
        setLoading(false);
        onClose();
      }
    };

    function youtube_parser(url){
      var regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
      var match = url.match(regExp);
      if (match && match[2].length == 11) {
        return match[2];
      } else {
        console.log("Error occurred while parsing");
      }
    } 
  
    return (
      <Modal show={show} onHide={onClose} dialogClassName="w-modal" size="lg">
        <Modal.Header closeButton className="mb-7 border-0 px-12 pt-12">
        <h1 className="text-xl">
          Add a<br />
          New Course
        </h1>
        </Modal.Header>
        <div className="flex text-md px-12 pb-12 justify-between items-end">
          <div className="flex-1 mr-12">
            <InputGroup className="flex flex-col">
              <Form.Label htmlFor="name">Course name</Form.Label>
              <FormControl
                placeholder="Enter the course name"
                aria-label="name"
                style={{ width: "100%", borderRadius: 12 }}
                onChange={(value) => setName(value.currentTarget.value)}
              />
            </InputGroup>
            <InputGroup className="flex flex-col">
              <Form.Label htmlFor="name">Course description</Form.Label>
              <FormControl
                placeholder="Enter the course desciption"
                aria-label="description"
                style={{ width: "100%", borderRadius: 12 }}
                onChange={(value) => setDesc(value.currentTarget.value)}
              />
            </InputGroup>
            <InputGroup className="flex flex-col">
              <Form.Label htmlFor="name">Course URL</Form.Label>
              <FormControl
                placeholder="Enter the course URL"
                aria-label="url"
                style={{ width: "100%", borderRadius: 12 }}
                onChange={(value) => setUrl(value.currentTarget.value)}
              />
            </InputGroup>
            <InputGroup className="flex flex-col">
              <Form.Label htmlFor="name">Course bounty</Form.Label>
              <FormControl
                placeholder="Enter the course name"
                aria-label="name"
                style={{ width: "100%", borderRadius: 12 }}
                onChange={(value) => setBounty(parseInt(value.currentTarget.value, 0))}
              />
            </InputGroup>
          </div>
          <Button
            className={loading && "animate-pulse pointer-events-none"}
            size="large"
            onClick={() => createNewCourse(name, desc, url, bounty)}
            disabled={!name || !url || !bounty}
          >
            <div className="flex items-center">
              <span className="">Create</span>
            </div>
          </Button>
        </div>
      </Modal>
    );
  };
  
  export default AddCourse;
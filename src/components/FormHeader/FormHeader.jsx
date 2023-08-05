import "./FormHeader.css";
import { React, useState } from "react";
import { FiStar, FiSettings } from "react-icons/fi";
import { AiOutlineEye } from "react-icons/ai";
// import { Home } from "react-icons/io";
import HomeIcon from "@mui/icons-material/Home";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import AddIcon from "@mui/icons-material/Add";
import { IconButton } from "@material-ui/core";
// import avatarimage from "./2.jpg";
import ColorLensIcon from "@material-ui/icons/ColorLens";
import MorevertIcon from "@material-ui/icons/MoreVert";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import styled from "styled-components";

const PrimaryButton = styled(Button)`
  && {
    background-color: navy;
    color: #ffffff;
    margin: 10px;
  }
`;

const InvertedButton = styled(Button)`
  && {
    background-color: #ffffff;
    color: navy;
    border: 1px solid navy;
    shadows: none;
  }
`;

const FormHeader = () => {
  const [formTitle, setFormTitle] = useState("Untitled");

  const handleFormNameChange = (event) => {
    setFormTitle(event.target.value);
  };
  return (
    <>
      <div className="form_header">
        <div className="form_header_left">
          <HomeIcon
            className="form_header_icon"
            style={{ marginLeft: "15px" }}
          ></HomeIcon>
          <KeyboardArrowRightIcon
            className="form_header_icon"
            style={{ marginRight: "10px" }}
          />
          <span>{formTitle}</span>
        </div>
      </div>
      <div className="form_header">
        <div className="form_header_left">
          <input
            type="text"
            placeholder="Untitled form"
            className="form_name"
            value={formTitle}
            onChange={handleFormNameChange}
          ></input>
          {/* <IoMdFolderOpen
            className="form_header_icon"
            style={{ marginRight: "10px" }}
          ></IoMdFolderOpen>
          <FiStar
            className="form_header_icon"
            style={{ marginRight: "10px" }}
          /> */}
        </div>
        <div className="form_header_right">
          <IconButton>
            <AddIcon size="small" className="form_header_icon" />
          </IconButton>
          <IconButton>
            <AiOutlineEye className="form_header_icon" />
          </IconButton>
          <IconButton>
            <FiSettings className="form_header_icon" />
          </IconButton>

          {/* <Button
            className="send-button"
            // variant="contained"
            // color="primary"
            href="#contained-buttons"
          >
            Send
          </Button>
          <Button
            className="save-and-proceed-button"
            // variant="contained"
            // color="primary"
            href="#contained-buttons"
          >
            Save and Proceed
          </Button> */}
          <PrimaryButton variant="contained" href="#contained-buttons">
            Send
          </PrimaryButton>
          <InvertedButton variant="contained" href="#contained-buttons">
            Save and Proceed
          </InvertedButton>

          <IconButton>
            <MorevertIcon className="form_header_icon" />
          </IconButton>
          <IconButton>
            <Avatar
              style={{ height: "30px", width: "30px" }}
              //   src={avatarimage}
            />
          </IconButton>
        </div>
      </div>
    </>
  );
};

export default FormHeader;

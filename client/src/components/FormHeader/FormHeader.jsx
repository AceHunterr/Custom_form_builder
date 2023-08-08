import "./FormHeader.css";
import { React, useState } from "react";
import { FiStar, FiSettings } from "react-icons/fi";
import { AiOutlineEye } from "react-icons/ai";
import HomeIcon from "@mui/icons-material/Home";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import AddIcon from "@mui/icons-material/Add";
import { IconButton } from "@material-ui/core";
import ColorLensIcon from "@material-ui/icons/ColorLens";
import MorevertIcon from "@material-ui/icons/MoreVert";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  const navigateToPreview = () => {
    navigate("/renderer");
  };

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
        </div>
        <div className="form_header_right">
          <IconButton>
            <AiOutlineEye
              className="form_header_icon"
              onClick={navigateToPreview}
            />
          </IconButton>
          <IconButton>
            <FiSettings className="form_header_icon" />
          </IconButton>

          <PrimaryButton
            variant="contained"
            href="#contained-buttons"
            onClick={navigateToPreview}
          >
            Send
          </PrimaryButton>
          <InvertedButton
            variant="contained"
            href="#contained-buttons"
            onClick={navigateToPreview}
          >
            Save and Proceed
          </InvertedButton>

          <IconButton>
            <MorevertIcon className="form_header_icon" />
          </IconButton>
          <IconButton>
            <Avatar style={{ height: "30px", width: "30px" }} />
          </IconButton>
        </div>
      </div>
    </>
  );
};

export default FormHeader;

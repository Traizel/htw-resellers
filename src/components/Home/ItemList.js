import React from "react";
import './Main.css'
import Button from "react-bootstrap/Button";
import MUITable from "../MUITable/MUITable";
import { Paper, TextField } from "@material-ui/core";
import Form from "react-bootstrap/Form";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import DeleteIcon from "@material-ui/icons/Delete";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
import FlagIcon from "@material-ui/icons/Flag";
import QueueIcon from "@material-ui/icons/Queue";
import swal from "sweetalert";
//import { response } from "express";

function ItemList ({item}) {

    //defines the dataselector to know which items to preform actions on
    return (
      <tr>
        <td>
            {item.name}
        </td>
        <td>
            {item.sku}
        </td>
        <td>
            {item.id}
        </td>
        <td>
            <Button />
        </td>
      </tr>
    )
  }


export default ItemList;

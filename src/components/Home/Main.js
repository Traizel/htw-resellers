import React, {useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import './Main.css'
import MUITable from "../MUITable/MUITable";
import Button from "react-bootstrap/Button";
import { Paper, TextField } from "@material-ui/core";
import Form from "react-bootstrap/Form";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import Switch from '@material-ui/core/Switch';
import Checkbox from "@material-ui/core/Checkbox";
import DeleteIcon from "@material-ui/icons/Delete";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
import FlagIcon from "@material-ui/icons/Flag";
import QueueIcon from "@material-ui/icons/Queue";
import swal from "sweetalert";
import ItemList from './ItemList';


function Main () {

  const items = useSelector(store => store.item.itemlist);

  useEffect(() => {
    dispatch({
      type: "GET_ITEM_LIST",
    });
  }, [])
    //get all reseller info

  const data = newItems.map((item) => [
    item.name,
    item.location,
    item.id,
  ]);

    //defines the dataselector to know which items to preform actions on
    return (
      <>
      <br></br>
      <br></br>
      <br></br>
      <MUITable
              data={data} //brings in data as an array, in this case, list of items
              columns={[
                //names the columns found on MUI table
                { name: "Name" },
                { name: "Location" },
                { name: "ID" },
              ]}
              title={""} //give the table a name
              />
      <br></br>
      <br></br>
      <br></br>
      <div className="loader"></div>
      </>
    )
  }

export default Main;

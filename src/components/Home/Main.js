import React, {useEffect, useState} from "react";
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
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';
import { PhoneBluetoothSpeaker } from "@material-ui/icons";


function Main () {

  const items = useSelector(store => store.item.itemlist);

  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [business, setBusiness] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [customerid, setCustomerid] = useState('');
  const [location, setLocation] = useState('');

  useEffect(() => {
    dispatch({
      type: "GET_ITEM_LIST",
    });
  }, [])
    //get all reseller info

  new Map({
    target: 'map',
    layers: [
      new TileLayer({
        source: new XYZ({
          url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        })
      })
    ],
    view: new View({
      center: [0, 0],
      zoom: 2
    })
  });

  const data = items.map((item) => [
    item.name,
    item.business,
    item.phone,
    item.email,
    item.location,
    item.customerid,
    item.id,
  ]);

  const addReseller = (e) => {
    if (name === '' || business === '' || email === '' || phone === '' || customerid === '' || location === '') {
      swal('You need to fill out all info!');
    } else {
    dispatch({
      type: "ADD_ITEM",
      payload: {
                name: name,
                business: business,
                phone: phone,
                email: email,
                location: location,
                customerid: customerid
              }
    });
    setName('');
    setBusiness('');
    setPhone('');
    setEmail('');
    setLocation('');
    setCustomerid('');
   }
  }

    //defines the dataselector to know which items to preform actions on
    return (
      <>
      <br></br>
      <br></br>
      <br></br>
      <form>
        <h3>Add a Reseller</h3>
        <p>Name</p><input value={name} onChange={(e) => (setName(e.target.value))}></input>
        <p>Business</p><input value={business} onChange={(e) => (setBusiness(e.target.value))}></input>
        <p>Phone</p><input value={phone} type='number' onChange={(e) => (setPhone(e.target.value))}></input>
        <p>Email</p><input value={email} onChange={(e) => (setEmail(e.target.value))}></input>
        <p>Location</p><input value={location} type='number' onChange={(e) => (setLocation(e.target.value))}></input>
        <p>Customer ID</p><input value={customerid} type='number' onChange={(e) => (setCustomerid(e.target.value))}></input>
        <button onClick={(e) => (addReseller(e))}>Add</button>
      </form>
      <br/>
      <br/>
      <MUITable
              data={data} //brings in data as an array, in this case, list of items
              columns={[
                //names the columns found on MUI table
                { name: "Name" },
                { name: "Business" },
                { name: "Phone #" },
                { name: "Email" },
                { name: "Location" },
                { name: "Customer ID" },
                {
                  name: "",
                  options: {
                    filter: false,
                    sort: false,
                    empty: true,
                    customBodyRenderLite: (dataIndex, rowIndex) => {
                      return (
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={(event) => {
                            event.preventDefault();
                            const id = items[dataIndex].id;
                            console.log(id);
                            dispatch({
                              type: "DELETE_ITEM",
                              payload: {
                                id: id,
                              },
                            });
                            swal("Okay! This Reseller is removed!");
                          }}
                        >
                          <DeleteIcon /> Delete
                        </Button>
                      );
                    },
                  },
                },
              ]}
              title={"Resellers"} //give the table a name
              />
      <br></br>
      <br></br>
      <br></br>
      </>
    )
  }

export default Main;

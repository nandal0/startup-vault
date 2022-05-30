import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Switch from "@mui/material/Switch";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
// import TextField from '@mui/material/TextField';
import Autocomplete from "@mui/material/Autocomplete";
import Checkbox from "@mui/material/Checkbox";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
// import FormControl from '@mui/material/FormControl';
import Select from "@mui/material/Select";

import {
  Typography,
  TextField,
  Button,
  Stepper,
  Step,
  StepLabel,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
  useForm,
  Controller,
  FormProvider,
  useFormContext,
} from "react-hook-form";
import { useEffect } from "react";
import Csc from "./Csc";

const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: theme.spacing(1),
  },
}));

function getSteps() {
  return ["About Startup", "Contact Information", "Category & Your Interest"];
}
const BasicForm = () => {
  const [image,setImage] = useState("")
    const [url,setUrl] = useState("")
    const [name,setName] = useState("")
  const [age, setAge] = React.useState("");
  const label = { inputProps: { "aria-label": "Switch demo" } };
  const handleChange = (event) => {
    setAge(event.target.value);
  };
console.log(name);
console.log(age);
console.log(url);

  // useEffect(() => {
  //   if(image){
  //     sendd();
  //   }
    
  // },[image]);
  // useEffect(() => {
  //   if(url){
  //     if(url){
  //       console.log('fas');
  //    fetch("/createpost",{
  //        method:"post",
  //        headers:{
  //            "Content-Type":"application/json",
  //           //  "Authorization":"Bearer "+localStorage.getItem("jwt")
  //        },
  //        body:JSON.stringify({
  //            title:name,
  //            body:age,
  //            pic:url
  //        })
  //    }).then(res=>res.json())
  //    .then(data=>{
  // console.log(' postted');
        
  //    }).catch(err=>{
  //        console.log(err)
  //    })
  // }
  //   }
    
  // },[url]);

  const  sendd=()=>{
    console.log('first');
    const data=new FormData()
    data.append("file",image);
    data.append("upload_preset","insta-clone");
    data.append("cloud_name","cracker");
    fetch("https://api.cloudinary.com/v1_1/cracker/image/upload",{
        method:"post",
        body:data
    })
    .then(res=>res.json())
    .then(data=>{
        setUrl(data.url)
        console.log(data)
    })
    .catch(err=>{
        console.log(err)
    })
  }

  const { control } = useFormContext();
  return (
    <>
      <div className="compnay-details">
        <div className="compnay-left-details">
          <div className="company-logo">
            <p>ENTITY/COMPANY LOGO</p>
            <div className="logo-input">
              <label 
              for="file-input">
                <AddIcon fontSize="large" />
              </label>

              <input 
              onChange={(e)=>setImage(e.target.files[0])}
              id="file-input" type="file"         name="nickName"
 />
             
            </div>
            <div className="logo-switch">
              <p>IS THIS YOUR COMPANY/INSTITUTION LOGO</p>
              <Switch {...label} color="secondary" />
            </div>
            <div className="startup-name">
              <p>STARTUP NAME</p>
              <Controller
                control={control}
                name="firstName"
                render={({ field }) => (
                  <TextField
                    id="first-name"
                    label="STARTUP NAME"
                    variant="outlined"
                    onChange={(e)=>setName(e.target.value)}
                    placeholder="Startup Name"
                    fullWidth
                    margin="normal"
                    {...field}
                  />
                )}
              />
              {/* <input 
            type="text"
             placeholder=""
             value={name}
             onChange={(e)=>setName(e.target.value)}
             /> */}
            </div>
            <div className="funded">
              <p>FUNDED/BOOTSTRAPED?</p>
              <FormControl>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Funded"
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="BootStrapped"
                  />
                </RadioGroup>
              </FormControl>
            </div>
          </div>
        </div>
        <div className="compnay-right-details">
          <FormControl sx={{ m: 1, minWidth: 150 }}>
            <InputLabel id="demo-simple-select-autowidth-label">
              Stage
            </InputLabel>
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              value={age}
              onChange={handleChange}
              autoWidth
              label="Stage"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"Ideation"}>Ideation</MenuItem>
              <MenuItem value={"Validation"}>Validation</MenuItem>
              <MenuItem value={"Early Traction"}> Early Traction </MenuItem>
              <MenuItem value={"Scaling"}> Scaling </MenuItem>
            </Select>
          </FormControl>

          <div className="breif-startup">
            <p for="subject">BRIEF</p>
            <div className="col-75">
              <textarea
                className="form-control-textarea"
                id="subject"
                name="subject"
                placeholder="Write something.."
                style={{ height: "200px", width: "400px" }}
              ></textarea>
            </div>
          </div>
        </div>
      </div>
      {/* <Controller
        control={control}
        name="firstName"
        render={({ field }) => (
          <TextField
            id="first-name"
            label="First Name"
            variant="outlined"
            placeholder="Enter Your First Name"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />

      <Controller
        control={control}
        name="lastName"
        render={({ field }) => (
          <TextField
            id="last-name"
            label="Last Name"
            variant="outlined"
            placeholder="Enter Your Last Name"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />

      <Controller
        control={control}
        name="nickName"
        render={({ field }) => (
          <TextField
            id="nick-name"
            label="Nick Name"
            variant="outlined"
            placeholder="Enter Your Nick Name"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      /> */}
    </>
  );
};
const ContactForm = () => {
  // const [stetes, setSat]= useState([]);

  const { control } = useFormContext();
  return (
    <>
      <div className="contact-form">
        <div className="contact-form-left">
          <Controller
            control={control}
            name="emailAddress"
            render={({ field }) => (
              <TextField
                id="email"
                label="E-mail"
                variant="outlined"
                placeholder="Enter Your E-mail Address"
                fullWidth
                margin="normal"
                {...field}
              />
            )}
          />

          <Csc />
        </div>
        <div className="contact-form-right">
          <Controller
            control={control}
            name="phoneNumber"
            render={({ field }) => (
              <TextField
                id="phone-number"
                label="Phone Number"
                variant="outlined"
                placeholder="Enter Your Phone Number"
                fullWidth
                margin="normal"
                {...field}
              />
            )}
          />
          <Controller
            control={control}
            name="websiteLink"
            render={({ field }) => (
              <TextField
                id="alternate-phone"
                label="websiteLink"
                variant="outlined"
                placeholder=""
                fullWidth
                margin="normal"
                {...field}
              />
            )}
          />
          <Controller
            control={control}
            name="AppLink"
            render={({ field }) => (
              <TextField
                id="alternate-phone"
                label="AppLink"
                variant="outlined"
                placeholder=""
                fullWidth
                margin="normal"
                {...field}
              />
            )}
          />
        </div>
      </div>
    </>
  );
};
const PersonalForm = () => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  const { control } = useFormContext();
  const top10Categroy = [
    { label: "Ar" },
    { label: "Transporation & Storage" },
    { label: "Social Impact" },
    { label: "Textiles" },
    { label: "Travel & Tourism" },
    { label: "Security & Solution" },
    { label: "Real Estate" },
    { label: "Robotics " },
    { label: "Biotechonology " },
    { label: "Toys and Games " },
    { label: "Technlogy Hardware " },
    { label: "IOT " },
    { label: "Healthcare " },
    { label: "Food  " },
    { label: "Ohters  " },
  ];
  const top10Sector = [
    { label: "Ar" },
    { label: "Internet and Data Services" },
    { label: "Computer Systems and Software Services" },
    { label: "Business Consulting" },
    { label: "Traffic Mangement " },
    { label: "Transport Infrstructure" },
    { label: "3d" },
    { label: "Electroincs " },
    { label: "Embedded " },
    { label: "Food Processing " },
    { label: "Restaurants " },

    { label: "Ohters  " },
  ];
  const top10Int = [
    { label: "Hyperlocal" },
    { label: "Goverment" },
    { label: "Discovery" },
    { label: "Location Based Service" },
    { label: "Market Place " },
    { label: "Mobile" },
    { label: "Offile" },
    { label: "Peer to Peer " },
    { label: "Consulting " },
    { label: "E-commerce " },
    { label: "Research " },

    { label: "Ohters  " },
  ];
const [category, setCategory] = useState([]);
console.log(category);
  return (
    <>
      <div className="category-selected">
        <div className="top-categroy">
          <Autocomplete
            className="top-categroy-select"
            disablePortal

            id="combo-box-demo"
            options={top10Categroy}
           value={category}
            sx={{ width: 350 }}
            renderInput={(params) => <TextField {...params} label="Industry" />}
          />
          <Autocomplete
            className="top-categroy-select"
            disablePortal
            id="combo-box-demo"
            options={top10Sector}
            sx={{ width: 350 }}
            renderInput={(params) => <TextField {...params} label="Sector" />}
          />
          <Autocomplete
            className="top-categroy-select"
            disablePortal
            id="combo-box-demo"
            options={top10Int}
            sx={{ width: 350 }}
            renderInput={(params) => <TextField {...params} label="Techonlogy" />}
          />
        </div>
        <div className="interst-user">
          <div className="check-interst">
            <Checkbox {...label} defaultChecked color="success" />
            <p>India Market Entity</p>
          </div>
          <div className="check-interst">
            <Checkbox {...label} defaultChecked color="success" />
            <p>Exploring</p>
          </div>
          <div className="check-interst">
            <Checkbox {...label} defaultChecked color="success" />
            <p>Connect To Potential Partner</p>
          </div>
        </div>
      </div>

      <Controller
        className="link-to-company"
        control={control}
        name="address2"
        render={({ field }) => (
          <TextField
            id="address2"
            label="LinkedIN Profile"
            variant="outlined"
            // placeholder="Enter Your Address 2"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
    </>
  );
};
const PaymentForm = () => {
  const { control } = useFormContext();
  return (
    <>
      <Controller
        control={control}
        name="cardNumber"
        render={({ field }) => (
          <TextField
            id="cardNumber"
            label="Card Number"
            variant="outlined"
            placeholder="Enter Your Card Number"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="cardMonth"
        render={({ field }) => (
          <TextField
            id="cardMonth"
            label="Card Month"
            variant="outlined"
            placeholder="Enter Your Card Month"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="cardYear"
        render={({ field }) => (
          <TextField
            id="cardYear"
            label="Card Year"
            variant="outlined"
            placeholder="Enter Your Card Year"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
    </>
  );
};

function getStepContent(step) {
  switch (step) {
    case 0:
      return <BasicForm />;

    case 1:
      return <ContactForm />;
    case 2:
      return <PersonalForm />;

    default:
      return "unknown step";
  }
}

const LinaerStepper = () => {
  const classes = useStyles();
  const methods = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      nickName: "",
      emailAddress: "",
      phoneNumber: "",
      alternatePhone: "",
      address1: "",
      address2: "",
      country: "",
      cardNumber: "",
      cardMonth: "",
      cardYear: "",
    },
  });
// console.log(methods.values)
  const [activeStep, setActiveStep] = useState(0);
  const [skippedSteps, setSkippedSteps] = useState([]);
  const steps = getSteps();

  const isStepOptional = (step) => {
    return step === 1 || step === 2;
  };

  const isStepSkipped = (step) => {
    return skippedSteps.includes(step);
  };

  const handleNext = (data) => {
    console.log(data);
    if (activeStep == steps.length - 1) {
      fetch("https://jsonplaceholder.typicode.com/comments")
        .then((data) => data.json())
        .then((res) => {
          console.log(res);
          setActiveStep(activeStep + 1);
        });
    } else {
      setActiveStep(activeStep + 1);
      setSkippedSteps(
        skippedSteps.filter((skipItem) => skipItem !== activeStep)
      );
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleSkip = () => {
    if (!isStepSkipped(activeStep)) {
      setSkippedSteps([...skippedSteps, activeStep]);
    }
    setActiveStep(activeStep + 1);
  };

  // const onSubmit = (data) => {
  //   console.log(data);
  // };
  return (
    <div>
      <Stepper
        className="user-registered"
        alternativeLabel
        activeStep={activeStep}
      >
        {steps.map((step, index) => {
          const labelProps = {};
          const stepProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography
                variant="caption"
                align="center"
                style={{ display: "block" }}
              >
                optional
              </Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step {...stepProps} key={index}>
              <StepLabel {...labelProps}>{step}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      {activeStep === steps.length ? (
        <Typography variant="h3" align="center">
          Thank You
        </Typography>
      ) : (
        <>
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(handleNext)}>
              {getStepContent(activeStep)}

              <Button
                className={classes.button}
                disabled={activeStep === 0}
                onClick={handleBack}
              >
                back
              </Button>
              {isStepOptional(activeStep) && (
                <Button
                  className={classes.button}
                  variant="contained"
                  color="primary"
                  onClick={handleSkip}
                >
                  {/* skip */}
                </Button>
              )}
              <Button
                className={classes.button}
                variant="contained"
                color="primary"
                // onClick={handleNext}
                type="submit"
              >
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </form>
          </FormProvider>
        </>
      )}
    </div>
  );
};

export default LinaerStepper;

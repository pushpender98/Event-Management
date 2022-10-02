import { useForm } from "react-hook-form";
import './CreateEvent.css';
import LandingPageImage from "./../../LandingPageImage.svg";
import { useNavigate } from "react-router-dom";

function CreateEvent() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  let navigate = useNavigate();
	
  const routeChange = (data: any) => {
		let path = `/event`;
		navigate(path , {state: data});
  };
  
  const onSubmit = (data: any) => {
    console.log(data);
    routeChange(data);
  }

  return (
    <div className='create-page'>
      <div className="row">
        <div className="col-md-6">
          <div className="d-flex justify-content-center align-items-center">
            <img src={LandingPageImage} alt="..." />
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
          <form className="row g-3 needs-validation" onSubmit={handleSubmit(onSubmit)}>
            <div className="col-12">
              <h1 className="bg-gradiant">Create an Event</h1>
            </div>
            <div className="col-12">
              <label htmlFor="eventName" className="form-label">Event Name</label>
              <input type="text" className="form-control" id="eventName" {...register("eventName", { required: true })} />
              {errors.eventName && <p className="error-msg">Please check the Event Name</p>}
            </div>
            <div className="col-12">
              <label htmlFor="hostName" className="form-label">Host Name</label>
              <input type="text" className="form-control" id="hostName" {...register("hostName", { required: true })} />
              {errors.hostName && <p className="error-msg">Please check the Host Name</p>}
            </div>
            <div className="col-12">
              <label htmlFor="startDate" className="form-label">Start Date</label>
              <input type="text" className="form-control" id="startDate" {...register("startDate", { required: true })} />
              {errors.startDate && <p className="error-msg">Please check the Start Date</p>}
            </div>
            <div className="col-12">
              <label htmlFor="endDate" className="form-label">End Date</label>
              <input type="text" className="form-control" id="endDate" {...register("endDate", { required: true })} />
              {errors.endDate && <p className="error-msg">Please check the End Date</p>}
            </div>
            <div className="col-12">
              <label htmlFor="location" className="form-label">Location</label>
              <input type="text" className="form-control" id="location" {...register("location", { required: true })} />
              {errors.location && <p className="error-msg">Please check the Location</p>}
            </div>

            <div className="col-12">
              <button className="btn btn-primary" type="submit">Next</button>
            </div>
          </form>
          </div>

        </div>
      </div>
    </div>
  );
}

export default CreateEvent;

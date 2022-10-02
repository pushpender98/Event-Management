import { useLocation } from 'react-router-dom';
import './EventPage.css';
import BirthdayImg from "./../../Birthday.png";
import { ImCalendar, ImLocation } from "react-icons/im";

function EventPage() {
  const { state } = useLocation();
  console.log("Data: ", state)
  const { endDate, eventName, hostName, location, startDate } = state;

  return (
    <div className="landing-page">
      <div className="row">
        <div className="col-12 col-md-6">
          <div className="d-flex flex-column justify-content-center">
            <div className="heading">
              <h1>{eventName}</h1>
              <span>Hosted by <span className='host-name'>{hostName}</span></span>
            </div>
            <div className="content">
              <div className="card">
                <div className='icon'>
                  <ImCalendar />
                </div>
                <div className='mx-3 h-100 flex-column justify-content-center d-flex'>
                  <div className="card-top-heading">{startDate}</div>
                  <div className='card-bottom-heading'>to {endDate}</div>
                </div>
              </div>
              <div className="card">
                <div className="icon">
                  <ImLocation />
                </div>

                <div className='mx-3 h-100 flex-column justify-content-center d-flex'>
                  <div className="card-top-heading">{location}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="d-flex justify-content-center align-items-center">
            <img className='img-fluid' src={BirthdayImg} alt="..." />
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventPage;

import "./LandingPage.css";
import LandingPageImage from "./../../LandingPageImage.svg";
import { useNavigate } from "react-router-dom";

function LandingPage() {
	let navigate = useNavigate();
	const routeChange = () => {
		let path = `create`;
		navigate(path);
	};

	return (
		<div className="landing-page">
			<div className="row">
				<div className="col-12 col-md-6">
					<div className="d-flex justify-content-center align-items-center">
						<img src={LandingPageImage} alt="..." />
					</div>
				</div>
				<div className="col-12 col-md-6">
					<div className="heading">
						<p>Imagine if</p>
						<p className="bg-gradiant">Snapchat</p>
						<p>had events.</p>
						<p className="normal-heading">
							Easily host and share events with your friends across any social
							media.
						</p>
					</div>
					<div className="d-flex justify-content-end">
						<button className="btn btn-primary" onClick={routeChange}>
							Create a Event
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default LandingPage;

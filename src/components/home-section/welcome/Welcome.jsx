import "./welcome.scss";

import HomeSection from "../HomeSection";
import { bg1 } from "../../../assets/images";

const Welcome = (props) => {
	return (
		<HomeSection
			className={`welcome ${props.isActive ? "active" : ""}`}
			contentClassName="overlay welcome__content"
			bgImage={bg1}
		>
			<div className="welcome__info relative">
				<div className="welcome__info__content">
					<div className="title">
						<span>Welcome To</span>
						<h2 className="main-color">Summoner's Rift</h2>
					</div>
				</div>
			</div>
			<div className="welcome__img relative"></div>
		</HomeSection>
	);
};

export default Welcome;

import React from 'react';
import './landing.css';
import home from '../../images/home.png';
import pic from '../../images/pic.png';

const landing = () => {
	return (
		<div>
			<section className="intro">
				<div className="intro-img">
					<img src={home} alt="illustration-intro" />
				</div>
				<div className="intro-content">
					<h1>#Stay Home, Stay Safe</h1>

					<p className="lg-p mt-2">
						Wake Up, Stay Home, Sleep Well, Repeat...<br /> We will win this War!
					</p>
				</div>
			</section>

			<section className="productive">
				<div className="productive-img">
					{' '}
					<img src={pic} alt="" />{' '}
				</div>

				<div className="productive-content">
					<h2>How does COVID-19 spread?</h2>

					<p className="lg-p info">
						COVID-19 spreads by an infected person coughing and/or sneezing, thus producing infected respiratory droplets.
						This is person-to-person spread, most often by inhalation.
					</p>

					<p className="lg-p info">
						It also spreads by touching surfaces where infected droplets land followed by touching your eyes, nose, and/or
						face and mouth. There is no airborne spread like the measles virus.
					</p>
					<p className="lg-p info">
						Unfortunately, some people can be infected and have little or no symptoms yet still be able to spread COVID-19 to
						others.
					</p>
				</div>
			</section>

			<section className="features">
				<div className="features-item">
					<div className="features-item-head">
						<i className="fas fa-hands-wash" />
					</div>
					<div className="features-item-body  mt-2">
						<h3>Wash Hands</h3>

						<p>
							Clean your hands regularly<br />
							Wash your hands with soap and water, and dry them thoroughly.
						</p>
					</div>
				</div>

				<div className="features-item">
					<div className="features-item-head">
						<i className="fas fa-people-arrows" />
					</div>
					<div className="features-item-body mt-2">
						<h3> Maintain social distancing</h3>
						<p> Maintain at least 1 metre (3 feet) distance between yourself and anyone who is coughing or sneezing.</p>
					</div>
				</div>
				<div className="features-item">
					<div className="features-item-head">
						<i class="fas fa-head-side-mask" />
					</div>
					<div className="features-item-body  mt-2">
						<h3> Wear Masks</h3>
						<p>
							Wear mask if you are required to go out.If you are healthy, you only need to wear a mask if you are taking care
							of a person with COVID-19.<br />
							Wear a mask if you are coughing or sneezing.
						</p>
					</div>
				</div>
				<div className="features-item">
					<div className="features-item-head">
						<i className="fas fa-head-side-cough-slash" />
					</div>
					<div className="features-item-body  mt-2">
						<h3>Don’t cough into your hands </h3>
						<p>
							Cover your mouth and nose with your elbow or tissue when coughing or sneezing. Dispose of used tissue
							immediately.
						</p>
					</div>
				</div>
				<div className="features-item">
					<div className="features-item-head">
						<i className="fas fa-briefcase-medical" />
					</div>
					<div className="features-item-body  mt-2">
						<h3>Sick?</h3>
						<p>
							Call the helpline.<br />If you have a fever, cough and difficulty breathing seek medical care early.
						</p>
					</div>
				</div>
			</section>
		</div>
	);
};

export default landing;

import React, {Fragment} from 'react';
// import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './app-content.css';

import imgTop from "../../images/pic01.jpg";

const AppContent = ({ buttons }) => (
<Fragment>

	<section id="main" className="wrapper style2">
		<div className="title">Service</div>
		<div className="container">

			 {/*Image */}
			<a href="#" className="image featured">
				<img src={imgTop} alt=""/>
			</a>

			{/*Features */}
			<section id="features">
				<header className="style1">
					<h2>Dolor consequat feugiat amet veroeros</h2>
					<p>Feugiat dolor nullam orci pretium phasellus justo</p>
				</header>
				<div className="feature-list">
					<div className="row">
						<div className="col-6 col-12-medium">
							<section>
								<h3 className="icon fa-comment">Mattis velit diam vulputate</h3>
								<p>Eget mattis at, laoreet vel et velit aliquam diam ante, aliquet sit amet vulputate et
									magna feugiat laoreet vel velit lorem.</p>
							</section>
						</div>
						<div className="col-6 col-12-medium">
							<section>
								<h3 className="icon solid fa-sync">Lorem ipsum dolor sit veroeros</h3>
								<p>Eget mattis at, laoreet vel et velit aliquam diam ante, aliquet sit amet vulputate et
									magna feugiat laoreet vel velit lorem.</p>
							</section>
						</div>
						<div className="col-6 col-12-medium">
							<section>
								<h3 className="icon fa-image">Pretium phasellus justo lorem</h3>
								<p>Eget mattis at, laoreet vel et velit aliquam diam ante, aliquet sit amet vulputate et
									magna feugiat laoreet vel velit lorem.</p>
							</section>
						</div>
						<div className="col-6 col-12-medium">
							<section>
								<h3 className="icon solid fa-cog">Tempus sed pretium orci</h3>
								<p>Eget mattis at, laoreet vel et velit aliquam diam ante, aliquet sit amet vulputate et
									magna feugiat laoreet vel velit lorem.</p>
							</section>
						</div>
						<div className="col-6 col-12-medium">
							<section>
								<h3 className="icon solid fa-wrench">Aliquam consequat et feugiat</h3>
								<p>Eget mattis at, laoreet vel et velit aliquam diam ante, aliquet sit amet vulputate et
									magna feugiat laoreet vel velit lorem.</p>
							</section>
						</div>
						<div className="col-6 col-12-medium">
							<section>
								<h3 className="icon solid fa-check">Dolore laoreet aliquam mattis</h3>
								<p>Eget mattis at, laoreet vel et velit aliquam diam ante, aliquet sit amet vulputate et
									magna feugiat laoreet vel velit lorem.</p>
							</section>
						</div>
					</div>
				</div>
				<ul className="actions special">
					<li><HashLink to="/#footer" className="button style1 large">Contact Us</HashLink></li>
					<li><a href="#" className="button style2 large">More Info</a></li>
				</ul>
			</section>

		</div>
	</section>


	{/*botnews*/}
	<section id="highlights" className="wrapper style3">
		<div className="title">PARTNERS AND CUSTOMERS</div>
		<div className="container">
			<div className="row aln-center">
				<div className="col-4 col-12-medium">
					<section className="highlight">
						<a href="#" className="image featured"><img src="images/pic02.jpg" alt=""/></a>
						<h3><a href="#">Aliquam diam consequat</a></h3>
						<p>Eget mattis at, laoreet vel amet sed velit aliquam diam ante, dolor aliquet sit amet
							vulputate mattis amet laoreet lorem.</p>
						<ul className="actions">
							<li><a href="#" className="button style1">Learn More</a></li>
						</ul>
					</section>
				</div>
				<div className="col-4 col-12-medium">
					<section className="highlight">
						<a href="#" className="image featured"><img src="images/pic03.jpg" alt=""/></a>
						<h3><a href="#">Nisl adipiscing sed lorem</a></h3>
						<p>Eget mattis at, laoreet vel amet sed velit aliquam diam ante, dolor aliquet sit amet
							vulputate mattis amet laoreet lorem.</p>
						<ul className="actions">
							<li><a href="#" className="button style1">Learn More</a></li>
						</ul>
					</section>
				</div>
				<div className="col-4 col-12-medium">
					<section className="highlight">
						<a href="#" className="image featured"><img src="images/pic04.jpg" alt=""/></a>
						<h3><a href="#">Mattis tempus lorem</a></h3>
						<p>Eget mattis at, laoreet vel amet sed velit aliquam diam ante, dolor aliquet sit amet
							vulputate mattis amet laoreet lorem.</p>
						<ul className="actions">
							<li><a href="#" className="button style1">Learn More</a></li>
						</ul>
					</section>
				</div>
			</div>
		</div>
	</section>
</Fragment>
);

export default AppContent;
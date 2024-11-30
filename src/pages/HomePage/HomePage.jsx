import React from 'react';
import BookHome from '../../components/BookHome/BookHome';
import Footer from '../../components/Footer/Footer';
import Navbarhome from '../../components/Navbar/Navbarhome';
import About from '../About/About';

const HomePage = () => {
	return (
		<div className='holder'>
			<header className='header'>
				<Navbarhome />
				<div className='header-content flex flex-c text-center text-white'>
					<h1 className='header-title text-capitalize'>
						AWS Route 53 Deployment: Simplified and Seamless
					</h1>
					<h1 className='header-title text-capitalize'>
						Welcome to Cloud-Driven Efficiency
					</h1>
					<br />
					<p className='header-text fs-18 fw-3'>
						<h1>Experience Scalable, Reliable DNS with Route 53</h1>
						<h2 className='text-capitalize'><b>Achieve seamless deployments with AWS</b></h2>
						Route 53 is a highly available and scalable Domain Name System (DNS) web service that integrates effortlessly with your applications.
					</p>
				</div>
			</header>
			<BookHome />
			<About />
			<Footer />
		</div>
	);
};

export default HomePage;

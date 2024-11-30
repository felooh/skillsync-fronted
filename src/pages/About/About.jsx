import React from 'react';
import aboutImg from '../../images/about-img.jpg'; // Replace this with an AWS-related image if available
import './About.css';

const About = () => {
	return (
		<section className='about'>
			<div className='container'>
				<div className='section-title'>
					<h2>About AWS Route 53</h2>
				</div>

				<div className='about-content grid'>
					<div className='about-img'>
						<img src={aboutImg} alt='About AWS Route 53' />
					</div>
					<div className='about-text'>
						<h2 className='about-title fs-26 ls-1'>What is AWS Route 53?</h2>
						<p className='fs-17'>
							AWS Route 53 is a scalable and highly available Domain Name System (DNS) web service designed to provide fast and reliable DNS management for your applications and websites. It integrates seamlessly with other AWS services to offer robust traffic routing and domain registration capabilities.
						</p>
						<p className='fs-17'>
							Route 53 enables businesses to connect user requests to infrastructure running in AWS, on-premises, or other cloud environments. With features like health checks, monitoring, and failover routing, Route 53 ensures that your applications remain highly available and performant.
						</p>
						<p className='fs-17'>
							Whether you're a developer deploying a simple website or an enterprise managing complex workloads, Route 53's flexibility and reliability make it an essential tool in the AWS ecosystem.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;

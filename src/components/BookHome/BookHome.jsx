import React from 'react';
import './BookHome.css';

const features = [
	{
		id: 1,
		title: 'Scalable DNS Management',
		description:
			'Route 53 offers highly available and scalable Domain Name System (DNS) services, ensuring reliable connections for your applications.',
		icon: '🌐',
	},
	{
		id: 2,
		title: 'Traffic Routing',
		description:
			'Route 53 supports routing traffic across different AWS regions and integrates with failover and latency-based routing policies.',
		icon: '🚦',
	},
	{
		id: 3,
		title: 'Domain Registration',
		description:
			'You can register domain names directly with Route 53 and manage them alongside your DNS configurations.',
		icon: '🔑',
	},
	{
		id: 4,
		title: 'Health Checks and Monitoring',
		description:
			'Ensure high availability by configuring health checks and monitoring for your application endpoints.',
		icon: '📊',
	},
	{
		id: 5,
		title: 'Integration with AWS Services',
		description:
			'Route 53 integrates seamlessly with other AWS services like S3, CloudFront, and Elastic Load Balancing.',
		icon: '🔗',
	},
];

const BookHome = () => {
	return (
		<section className='feature-list'>
			<div className='container'>
				<div className='section-title'>
					<h2>Route 53 Features</h2>
				</div>
				<div className='feature-list-content grid'>
					{features.map((feature) => (
						<div className='feature-card' key={feature.id}>
							<div className='feature-icon'>{feature.icon}</div>
							<h3 className='feature-title'>{feature.title}</h3>
							<p className='feature-description'>
								{feature.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default BookHome;

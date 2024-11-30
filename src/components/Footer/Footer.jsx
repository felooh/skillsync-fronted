import { MDBBtn, MDBContainer, MDBFooter } from 'mdb-react-ui-kit';
import React from 'react';

export default function Footer() {
	return (
		<MDBFooter
			className='text-center text-white'
			style={{ backgroundColor: '#1d3557' }}
		>
			<MDBContainer className='p-4 pb-0'>
				<section className=''>
					<p className='d-flex justify-content-center align-items-center'>
						<span className='me-3'>Explore AWS Route 53</span>
						<MDBBtn
							type='button'
							style={{
								background: '#457b9d',
								border: 'solid white',
								borderRadius: '10px',
								color: 'white',
								marginTop: '10px',
							}}
							outline
							color='light'
							rounded
						>
							Learn More
						</MDBBtn>
					</p>
				</section>
			</MDBContainer>

			<div
				className='text-center p-3'
				style={{ backgroundColor: '#264653', height: '65px' }}
			>
				© 2023 Copyright:
				<a
					className='text-white'
					href='https://aws.amazon.com/route53/'
					target='_blank'
					rel='noopener noreferrer'
				>
					AWS Route 53
				</a>
			</div>
		</MDBFooter>
	);
}

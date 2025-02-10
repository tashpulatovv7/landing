import '../footer/footer.css';

const Footer = () => {
	return (
		<footer className='footer'>
			<span className='vv'></span>
			<div className='footer-container'>
				<div className='footer-left'>
					<img src='./icon/logo.png' alt='' />
					<p>Terms · Privacy Policy</p>
				</div>

				<div className='footer-links'>
					<div>
						<h4>Products</h4>
						<ul>
							<li>Web Studio</li>
							<li>DynamicBox Flex</li>
							<li>Programming Forms</li>
							<li>Integrations</li>
							<li>Command-Line</li>
						</ul>
					</div>
					<div>
						<h4>Resources</h4>
						<ul>
							<li>Documentation</li>
							<li>Tutorials & Guides</li>
							<li>Blog</li>
							<li>Support Center</li>
							<li>Partners</li>
						</ul>
					</div>
					<div>
						<h4>Company</h4>
						<ul>
							<li>Home</li>
							<li>About us</li>
							<li>Company values</li>
							<li>Pricing</li>
							<li>Privacy Policy</li>
						</ul>
					</div>
					<div className='subscribe'>
						<h4>Subscribe</h4>
						<p>
							Get the latest news and articles to your inbox every
							month.
						</p>
						<div className='email-input'>
							<input type='email' placeholder='Your email' />
						</div>
					</div>
				</div>
			</div>

			<div className='footer-bottom'>
				<p>
					Made by <span> Cruip</span>. All rights reserved.
				</p>
				<div className='social-icons'>
					<img src='./images/git.png' alt='' />
				</div>
			</div>
		</footer>
	);
};

export default Footer;

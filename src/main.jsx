import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Cards from './assets/card/Card';
import Footer from './assets/footer/footer';
import FreeTrial from './assets/inputPage/InputPage';
import './index.css';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<Cards />
		<FreeTrial />
		<Footer />
	</StrictMode>
);

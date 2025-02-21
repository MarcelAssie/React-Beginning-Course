import { useState } from 'react';
import '../styles/Footer.css';
import Events from './Events'; // Assurez-vous d'importer le module Events

function Footer() {
	const [inputValue, setInputValue] = useState('');

	return (
		<footer className='lmj-footer'>
			<div className='lmj-footer-elem'>
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
			<div className='lmj-footer-elem'>Laissez-nous votre mail :</div>
			<div>
				<input
					type="email"
					placeholder="Entrez votre email"
					value={inputValue}
					onChange={(e) => setInputValue(e.target.value)}
					onBlur={() => Events.handleBlur(inputValue)}
				/>
			</div>
		</footer>
	);
}

export default Footer;
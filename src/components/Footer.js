import { useState } from 'react'
import '../styles/Footer.css'
// import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';

function Footer() {
	let [inputValue, setInputValue] = useState('')

	// code pour taper un texte
	function handleInput(e) {
		setInputValue(e.target.value)
	}

	// code pour cree conditon quand il y a @ ou pas 
	function handleBlur() {
		if (!inputValue.includes('@')) {
			alert("Attention, il n'y a pas d'@, ceci n'est pas une adresse valide 😥")
		} else {
			alert("Message Envoyer 😀")
		}
	}

	return (
		<footer className='lmj-footer'>
			<div className='lmj-footer-elem'>
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
			<div className='lmj-footer-elem'>Laissez-nous votre mail :</div>
			<div className='container'>
				<Stack gap={4} className="col-md-3 mx-auto email">
					<Form>
						<Form.Group controlId="inputEmail">
							<Form.Control onChange={handleInput} value={inputValue} onBlur={handleBlur} type="email" placeholder="Entre votre mail" />
						</Form.Group>
					</Form>
					{/* <Button variant="success">Envoi</Button> */}
				</Stack>
			</div>
		</footer>
	)
}

export default Footer



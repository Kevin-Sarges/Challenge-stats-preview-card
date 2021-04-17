import React from 'react';

import { Container, DivDescription, Image } from './styles';
import ImageDesktop from '../../assets/image-header-desktop.jpg';
import Description from '../Description';

function Card() {
	return (
		<Container>
			<DivDescription>
				<Description />
			</DivDescription>

			<Image>
				<img src={ ImageDesktop } />
			</Image>
		</Container>
	);
}

export default Card;
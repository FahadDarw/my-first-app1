import styles from './Card.module.css'
import ReactCardFlip from 'react-card-flip'
import React, { useState } from 'react'
import CardHeader from './CardHeader'

const Card = props => {
	const [isFlipped, setIsFlipped] = useState(false)

	const handleClick = () => {
		setIsFlipped(!isFlipped)

		console.log('clicked')
	}

	const myStyle = {
		width: '50%',
		minHeight: '200px',
		display: 'block',
		margin: '0 auto',
	}

	return (
		<ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
			<div className={styles.card}>
				<div className={styles.cardInner}>
					<CardHeader player={props.player} />
					<div style={{ height: '250px' }}>
						<img style={myStyle} src={props.player.url} alt="Italian Trulli" />
					</div>
					<button style={{ margin: '10px 0px' }} onClick={handleClick}>
						Click to flip
					</button>
				</div>
			</div>

			<div className={styles.card}>
				<div className={styles.cardInner}>
				<div style={{ height: '250px', alignItems: 'center', display: 'flex', justifyContent: 'center'}}>
					<h1>Back compnent F*** liverpool</h1>
					</div>
				</div>
				<button onClick={handleClick}>Click to flip</button>
			</div>
		</ReactCardFlip>
	)
}

export default Card

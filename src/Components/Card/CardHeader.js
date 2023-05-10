const CardHeader = props => {
	return (
		<div
			style={{
				height: '95px',
				padding: '10px',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<h1>{props.player.name}</h1>
		</div>
	)
}

export default CardHeader

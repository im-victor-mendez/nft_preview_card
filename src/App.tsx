import { useEffect, useState } from 'react'
import { Nft, Owner } from './types'
import nftData from './data/nft'

function App() {
	const [nft, setNft] = useState<Nft>()

	useEffect(() => {
		setNft(nftData)
	}, [])

	if (!nft) return null

	const owner: Owner = nft.owner
	const ownerMessage = owner.author ? 'Creation of' : 'Property of'

	return (
		<>
			<section className="card">
				<img src={nft.image} alt={`${nft.title} image`} />
				<article className="content">
					<h1 className="title">{nft.title}</h1>
					<p className="description">{nft.description}</p>
					<div className="information"></div>
					<div className="divider"></div>
					<div className="information owner">
						<img src={owner.image} alt={owner.name} />
						<p>
							{ownerMessage} <span className="important">{owner.name}</span>
						</p>
					</div>
				</article>
			</section>
		</>
	)
}

export default App

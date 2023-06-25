import EquilibriumImage from '@/assets/images/image-equilibrium.jpg'
import AvatarImage from '@/assets/images/image-avatar.png'
import { Coins, Nft } from '@/types.d'

interface Props {
	daysToAdd: number
}

function calculateCloseDate({ daysToAdd }: Props) {
	const currentDate = new Date()
	currentDate.setDate(currentDate.getDate() + daysToAdd)
	return currentDate
}

const nftData = {
	closeDate: calculateCloseDate({ daysToAdd: 3 }),
	coin: Coins.ETHEREUM,
	description: 'Our Equilibrium collection promotes balance and calm',
	image: EquilibriumImage,
	owner: { author: true, image: AvatarImage, name: 'Jules Wyvern' },
	price: 0.041,
	title: 'Equilibrium #3429',
} as Nft

export default nftData

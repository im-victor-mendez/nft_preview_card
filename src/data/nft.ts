import EquilibriumImage from '@/assets/images/image-equilibrium.jpg'
import AvatarImage from '@/assets/images/image-avatar.png'
import { Coins, ImageCoins, Nft } from '@/types.d'

const nftData = {
	coin: Coins.ETHEREUM,
	daysLeft: 3,
	description: 'Our Equilibrium collection promotes balance and calm',
	image: EquilibriumImage,
	imageCoin: ImageCoins.ETHEREUM,
	owner: { author: true, image: AvatarImage, name: 'Jules Wyvern' },
	price: 0.041,
	title: 'Equilibrium #3429',
} as Nft

export default nftData

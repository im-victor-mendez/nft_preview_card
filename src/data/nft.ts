import EquilibriumImage from '@/assets/images/image-equilibrium.jpg'
import AvatarImage from '@/assets/images/image-avatar.png'
import { Coins, Nft } from '@/types.d'
import { ReactComponent as EthereumIcon } from '@/assets/svg/icon-ethereum.svg'

const nftData = {
	coin: Coins.ETHEREUM,
	daysLeft: 3,
	description: 'Our Equilibrium collection promotes balance and calm',
	image: EquilibriumImage,
	imageCoin: EthereumIcon,
	owner: { author: true, image: AvatarImage, name: 'Jules Wyvern' },
	price: 0.041,
	title: 'Equilibrium #3429',
} as Nft

export default nftData

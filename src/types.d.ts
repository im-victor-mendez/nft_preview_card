import EquilibriumImage from '@/assets/images/image-equilibrium.jpg'
import AvatarImage from '@/assets/images/image-avatar.png'

export enum Coins {
	ETHEREUM = 'ETH',
}

export type Owner = {
	author: boolean
	image: typeof AvatarImage
	name: string
}

export type Nft = {
	daysLeft: int
	coin: Coins
	description: string
	image: typeof EquilibriumImage
	imageCoin: ImageCoins
	owner: Owner
	price: number
	title: string
}

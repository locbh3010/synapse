import { ROUTES } from '@/utils/routes'
import {
	IconBrandFacebook,
	IconBrandInstagram,
	IconBrandTwitter,
	IconBrandYoutube
} from '@tabler/icons-react'

export const MENU_LIST = [
	{
		label: 'Membership',
		path: ROUTES.MEMBERSHIP
	},
	{
		label: 'Contact',
		path: ROUTES.CONTACT
	},
	{
		label: 'Tags',
		path: ROUTES.TAGS
	},
	{
		label: 'Authors',
		path: ROUTES.AUTHORS
	}
]

export const FOOTER_LINKS = [
	{
		title: 'About',
		children: [
			{
				label: 'Styles Guide',
				path: '/'
			},
			{
				label: 'Features',
				path: '/'
			},
			{
				label: 'Contacts',
				path: '/'
			},
			{
				label: 'Buy Theme',
				path: '/'
			}
		]
	},
	{
		title: 'Features',
		children: [
			{
				label: 'Account',
				path: '/'
			},
			{
				label: 'Membership',
				path: '/'
			},
			{
				label: 'Tags',
				path: '/'
			},
			{
				label: 'Authors',
				path: '/'
			}
		]
	},
	{
		title: 'Follow Us',
		children: [
			{
				label: 'Facebook',
				path: '/',
				icon: <IconBrandFacebook size="1em" />
			},
			{
				label: 'Twitter',
				path: '/',
				icon: <IconBrandTwitter size="1em" />
			},
			{
				label: 'Instagram',
				path: '/',
				icon: <IconBrandInstagram size="1em" />
			},
			{
				label: 'YouTube',
				path: '/',
				icon: <IconBrandYoutube size="1em" />
			}
		]
	}
]

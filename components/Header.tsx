import Link from 'next/link'
import React from 'react'

function MicIcon(props: any) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
			<path d="M19 10v2a7 7 0 0 1-14 0v-2" />
			<line x1="12" x2="12" y1="19" y2="22" />
		</svg>
	)
}

const Header = () => {
	return (
		<header className="px-4 lg:px-6 h-14 flex items-center">
			<Link href="/" className="flex items-center justify-center" prefetch={false}>
				<MicIcon className="h-6 w-6" />
				<span className="sr-only">Speaker Detection App</span>
			</Link>
			<nav className="ml-auto flex gap-4 sm:gap-6">
				<Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
					Features
				</Link>
				<Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
					Pricing
				</Link>
				<Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
					About
				</Link>
				<Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
					Contact
				</Link>
			</nav>
		</header>
	)
}

export default Header

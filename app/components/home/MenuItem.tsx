import Link from 'next/link';

interface MenuItemProps {
    name: string;
    location: string;
    className: string;
}

export default function MenuItem({ name, location, className }: MenuItemProps) {
    return (
        <Link href={location}>
            <li className={`text-white px-4 py-4 lg:py-6 text-sm lg:text-lg font-semibold rounded-xl bg-menu-item bg-cover bg-center ${className} hover:opacity-80 transition shadow-lg`}>{name}</li>
        </Link>
    )
}

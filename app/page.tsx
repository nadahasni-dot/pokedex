import SearchBar from './components/home/SearchBar'
import MenuItem from './components/home/MenuItem'
import Link from 'next/link'
import NewsList from './components/home/NewsList'

export default function Home() {
  return (
    <div className='container px-4 py-10 mx-auto'>
      {/* top section */}
      <main className="flex flex-col">
        <h1 className='mb-6 text-2xl font-bold md:text-4xl'>What Pokémon are you looking for?</h1>
        {/* search */}
        <SearchBar />
        {/* Menu List */}
        <ul className='grid grid-cols-2 gap-4 mt-8 lg:grid-cols-3'>
          <MenuItem name='Pokédex' location='/pokedex' className='bg-green-500 shadow-green-200' />
          <MenuItem name='Moves' location='/moves' className='bg-rose-500 shadow-rose-200' />
          <MenuItem name='Abilities' location='/abilities' className='bg-blue-500 shadow-blue-200' />
          <MenuItem name='Items' location='/items' className='bg-yellow-500 shadow-yellow-200' />
          <MenuItem name='Locations' location='/locations' className='bg-purple-500 shadow-purple-200' />
          <MenuItem name='Type Charts' location='/types' className='bg-amber-500 shadow-amber-200' />
        </ul>
      </main>
      {/* news section */}
      <div className='flex items-center justify-between mt-8 mb-6'>
        <h2 className='text-xl font-bold md:text-2xl'>Pokémon News</h2>
        <Link href="/news" className='px-4 py-2 text-sm text-blue-500 transition md:text-base hover:bg-blue-100 rounded-xl'>View All</Link>
      </div>
      <NewsList />
    </div>
  )
}

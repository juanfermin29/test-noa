import Link from "next/link"
import { Categories } from "./Categories"
import { FavoritesDropdown } from "./FavoritesDropdown"
import { UsersDropdown } from "./UserDropdown"

export default function Navbar() {
  return (
    <div className="w-full">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link className="text-green-700 text-2xl font-bold" href="/products">CoursesApp</Link>
        <div className="flex flex-row ">
          <FavoritesDropdown />
          <UsersDropdown />
        </div>
      </div>
      <Categories />
    </div>
  )
}

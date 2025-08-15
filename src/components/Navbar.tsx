import { ModeToggle } from "@/components/mode-toggle"

export function Navbar() {
  return (
    <nav className="flex justify-between p-4 border-b">
      <h1 className="font-bold">My Blog</h1>
      <ModeToggle />
    </nav>
  )
}

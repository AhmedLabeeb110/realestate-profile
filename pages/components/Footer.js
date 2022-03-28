import Link from "next/dist/client/link"

export default function Footer() {
  return (
    <footer>
      <p>Copyright &copy; <i>0</i>mah</p>
      <p>
        <Link href='/about'>About This Project</Link>
      </p>
    </footer>
  )
}
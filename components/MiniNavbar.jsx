import Link from "next/link";

export default function MiniNavbar() {
  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-white/40 dark:bg-gray-950/40 backdrop-blur-md shadow-md">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-center">
        <Link href="/" className="text-2xl font-bold">
          <span className="text-blue-600">Script</span>
          <span className="text-purple-500">IQ</span>
        </Link>
      </nav>
    </header>
  );
}

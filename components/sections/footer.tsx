import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full border-t border-zinc-200 bg-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-6 text-center">
          <div className="flex items-center gap-3">
            <Image
              src="/code-collective-logo.png"
              alt="Code Collective"
              width={32}
              height={32}
              className="rounded-lg"
            />
            <span className="text-xl font-semibold tracking-tight text-zinc-900">
              Code Collective
            </span>
          </div>
          <p className="text-zinc-600 max-w-md">
            Enterprise web development solutions that scale with your
            business. Led by Lacy Morrow.
          </p>
        </div>
        <div className="mt-8 border-t border-zinc-200 pt-6 text-center text-sm text-zinc-500">
          &copy; {new Date().getFullYear()} Code Collective. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
} 
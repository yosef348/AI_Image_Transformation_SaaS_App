"use client"

import Link from "next/link"
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import Image from "next/image"

const Topbar = () => {
  return (
    <div className="sticky top-0 z-30 mb-6 hidden w-full items-center justify-end lg:flex">
      <div className="flex items-center gap-3">
        <SignedIn>
          <Link href="/credits" className="hidden md:flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm text-gray-600 hover:text-gray-900 transition-colors" style={{borderColor:"#e5e7eb"}}>
            <Image src="/assets/icons/coins.svg" alt="credits" width={16} height={16} />
            <span>Credits</span>
          </Link>
        </SignedIn>

        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
        <SignedOut>
          <Link href="/sign-in" className="button">Sign in</Link>
        </SignedOut>
      </div>
    </div>
  )
}

export default Topbar

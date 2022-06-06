import React, { useEffect } from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'
import Image from 'next/image'
import { useRouter } from 'next/router'

const Username = () => {
  const { data: session } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (!session) {
      router.push(`/`)
    }
  }, [session])

  return (
    <>
      {session && (
        <div className="min-h-screen grid place-items-center">
          <div className="space-y-5">
            <div className="text-3xl flex items-center gap-4">
              <span>Hello</span>
              <div className="relative w-10 h-10 rounded-full overflow-hidden">
                <Image
                  src={session.user!.image!}
                  objectFit="cover"
                  layout="fill"
                />
              </div>
              <span className="font-bold text-sky-500">
                {session.user!.name}
              </span>
            </div>
            <button
              onClick={() => signOut()}
              className="px-4 py-2 rounded bg-pink-500 text-white font-semibold">
              Log out
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default Username

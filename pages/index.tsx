import type { NextPage } from 'next'
import { useSession, signIn, signOut } from 'next-auth/react'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const Home: NextPage = () => {
  const { data: session } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (session) {
      const username = session!.user!.email!.split('@')[0]
      router.push(`/${username}`)
    }
  }, [session])

  return (
    <>
      {session === null && (
        <div className="min-h-screen grid place-items-center">
          <button
            onClick={() => signIn('google')}
            className="px-4 py-2 rounded bg-blue-500 text-white font-semibold">
            Please Login Google
          </button>
        </div>
      )}
    </>
  )
}

export default Home

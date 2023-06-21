import TallieTokes from '@/app/components/tallieTokes'
import UpdateTallieTokes from '@/app/components/updateTallieTokes'

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <TallieTokes />
    </main>
  )
}

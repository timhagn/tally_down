export default function Header() {
  const today = new Date().toLocaleDateString('en', { dateStyle: 'long' })
  return (
    <header>
      <h1 className="text-2xl font-bold text-center">
        Tell me how much you puffed on:
        <br />
        {today}
      </h1>
    </header>
  )
}

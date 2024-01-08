import { useDark } from '~/hooks'

export default function Footer() {
  const { isDark, toggleDark } = useDark()
  return (
    <nav className="text-xl mt-6 inline-flex gap-2">
      <button className="icon-btn !outline-none" onClick={() => { toggleDark(); }}>
        {isDark ? <div className="i-carbon-moon" /> : <div className="i-carbon-sun" />}
      </button>

      <a
        className="icon-btn i-carbon-logo-github"
        href="https://github.com/antfu/vitesse-lite"
        rel="noreferrer"
        target="_blank"
        title="GitHub"
      />
    </nav>

  )
}

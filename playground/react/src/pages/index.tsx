export default function Index() {
  const name = useRef<HTMLInputElement>(null)

  const navigate = useNavigate()
  const go = () => {
    if (name.current)
      navigate(`/hi/${encodeURIComponent(name.current.value)}`)
  }

  return (
    <div>
      <div className="i-carbon-campsite text-4xl inline-block" />
      <p>
        <a href="https://github.com/antfu/vitesse-lite" rel="noreferrer" target="_blank">
        Vitesse Lite
        </a>
      </p>
      <p>
        <em className="text-sm op75">Opinionated Vite Starter Template</em>
      </p>

      <div className="py-4" />

      <input
        className="px-4 py-2 w-250px text-center bg-transparent outline-none outline-active:none border border-rounded border-gray-200 border-dark:gray-700"
        id="input"
        onKeyDown={({ key }) => { key === 'Enter' && go(); }}
        placeholder="What's your name?"
        ref={name}
        type="text"
      />

      <div>
        <button
          className="m-3 text-sm btn"
          disabled={!name}
          onClick={() => { go(); } }
        >
        Go
        </button>
      </div>
    </div>
  )
}

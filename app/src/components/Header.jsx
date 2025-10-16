import './Header.css'

export default function Header() {
    return (
        <header id='home'>
            <div className="content">
                <h2>{"<JavaScript />"}</h2>
                <div className="loops">
                    {[1, 0.5, 0.25, 0.1].map(loop => (
                        <h1 style={{ opacity: loop, }}>Loops & Functions</h1>
                    ))}
                </div>
                <button onClick={() => document.querySelector("#about").scrollIntoView({ behavior: 'smooth' })}>Learn</button>
            </div>
        </header>
    )
}
import './Navbar.css';


const links = [
    {
        text: "Home", 
        link: '#home'
    },
    {
        text: "About",
        link: "#about"
    },
    {
        text: "Learn",
        link: "#learn"
    }
]

export default function Navbar() {
    const handleScroll = (e, link) => {
        e.preventDefault();
        const section = document.querySelector(link);
        section.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <nav>
            <a href={""} onClick={(e) => handleScroll(e, "#home")} className="logo">JS</a>
            <div className="links">
                {links.map((item, index) => (
                    <a key={index} href={""} onClick={(e) => handleScroll(e, item.link)}>
                        {item.text}
                        <div className="bar" />
                    </a>
                ))}
            </div>
            <a className='contactBtn' href='#contact'>Contact</a>
        </nav>
    )
}
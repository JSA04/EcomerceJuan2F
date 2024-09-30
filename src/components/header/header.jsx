import style from "./header.module.css"

function Header(){
    return(
        <header className={style.cabecalho}>
            <h1 className={style.title}>Exclusive</h1>
            <nav className={style.links}>
                <p className={style.element}>Home</p>
                <p className={style.element}>Contact</p>
                <p className={style.element}>About</p>
                <p className={style.element}>Sign Up</p>
            </nav>
                <div className={style.inputWrapper}>
                <input type="text" className={style.input} placeholder="What are you looking for?" itemScope/>
                <span>
                    {/* <Search size={20} /> */}
                </span>
                </div>
        </header>
    )
}

export default Header;
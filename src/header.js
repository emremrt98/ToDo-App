
function Header({inputValue}) {
    return (
        <header className="header">
            <h1>todos</h1>
            <form>
            <input className="new-todo" value={inputValue} onChange={()=>{}} placeholder="What needs to be done?" autoFocus />
            </form>
        </header>
    )
}

export default Header;
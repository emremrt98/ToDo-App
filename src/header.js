

function Header({ inputValue, setInputValue, array, setArray }) {

    const toDo = () => {
        
        setArray([...array, inputValue]);
        console.log(array);
    }
    return (
        <header className="header">
            <h1>todos</h1>
            <form onSubmit={(e)=>{
                e.preventDefault();
                toDo()
            } }>
                <input
                    className="new-todo"
                    value={inputValue}

                    onChange={(event) => {
                      
                        setInputValue(event.target.value)

                    }}
                    placeholder="What needs to be done?"
                    autoFocus />
            </form>
        </header>
    )
}

export default Header;


import './navbar_style.css'
function Navbar(){
    return(
        <div className="container">
            <nav className='Navbar'>
                <p>Logo</p>
                <ul className="list_menu">
                    <li className='list_item'>Home</li>
                    <li className='list_item'>Project</li>
                    <li className='list_item'>Contacts</li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
import "./header.css"
function Header(){
    return(
        <div className="header-container">
            <div className="header-info">
                <h1>Hi, my name is <span>Daniel</span></h1>
                <p>a frontend developer</p>
                <p>with passion for learning and creating</p>
                <button className="DownBtn">Download Cv</button>
            </div>
        </div>
    )
}

export default Header
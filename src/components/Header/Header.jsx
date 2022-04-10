const logo = require("./logo.png");
const Header = () => {
    return (
        <header class="nav-header">
            <div class="container">
                <nav>
                    <div class="logo">
                        <img src={logo} alt="logo" />
                    </div>
                </nav>
            </div>
        </header>
    );
};
export default Header;

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="footer-flex">
                    <div className="footer--text">
                        <p>
                            &copy; 2022. Designed and Developed with &hearts; by
                            <a
                                href="https://abdullahwebdev.netlify.app/"
                                className="footer-link"
                            >
                                Abdullah Sajjad
                            </a>
                        </p>
                    </div>
                    <div className="footer--social-links">
                        <a href="https://www.facebook.com/profile.php?id=100047766791619">
                            <ion-icon name="logo-facebook"></ion-icon>
                        </a>
                        <a href="https://github.com/Abdullah-Sajjad026/">
                            <ion-icon name="logo-github"></ion-icon>
                        </a>
                        <a href="https://twitter.com/Abdullah_webdev">
                            <ion-icon name="logo-twitter"></ion-icon>
                        </a>
                    </div>
                </div>
                {/* <div className="footer--text footer-desc">
                <p>
                    I collected all these resources form reading many articles
                    and visiting many sites. I hope that you guys liked it and
                    this website will help you.
                </p>
            </div> */}
            </div>
        </footer>
    );
};
export default Footer;

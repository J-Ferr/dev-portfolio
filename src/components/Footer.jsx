import './Footer.css';

function Footer() {
    return(
        <footer className="footer">
            <p>© {new Date().getFullYear()}.
                Jose Armando Arellano Ferrara. Built with React.
            </p>
        </footer>
    );
}

export default Footer;
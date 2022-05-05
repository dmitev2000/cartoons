import './FooterComponent.css';

function Footer() {

    const date = new Date();

    return (
        <footer className='footer-table'>
            <p>Copyright &copy; FINKI - {date.getFullYear()}, Skopje</p>
        </footer>
    );
}

export default Footer;
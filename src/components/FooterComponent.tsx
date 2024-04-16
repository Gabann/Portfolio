import '../styles/footer.css';

export function FooterComponent() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="d-flex align-items-center">
            <div className="col-4 h-100 d-flex align-items-center">
                <a className="image-container" href="https://github.com/Gabann">
                    <img alt="github profile logo" src="https://avatars.githubusercontent.com/u/40118785?v=4" />
                </a>
            </div>

            <div className="col-4 h-100 d-flex flex-wrap align-items-center justify-content-center">
            <span className="w-100 text-center">
                <a href="https://github.com/Gabann/Portfolio.git">Source code</a>
            </span>

                <span className="w-100 text-center">
                © {currentYear} |
                <a href="https://github.com/Gabann/Portfolio/blob/main/LICENSE">MIT License</a>
            </span>
            </div>

            <div className="col-4 h-100 d-flex align-items-center justify-content-end">
            </div>
        </footer>
    );
}

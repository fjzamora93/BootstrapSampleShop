const Header = ({ showAllProducts }) => (
    <header className="bg-light border-bottom shadow-sm py-3 mb-4" onClick={showAllProducts}>
        <div className="container text-center">
            <h1 className="display-4 text-dark fw-bold">Im-personal Store</h1>
            <p className="lead text-muted">Productos impersonales para gente sin personalidad</p>
        </div>
    </header>
);

export default Header;
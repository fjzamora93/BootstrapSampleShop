const Confirmation = ({ seguirComprando }) => (
    <div className="container text-center py-5">
        <h3 className="display-4 text-success mb-4">Gracias por tu compra</h3>
        <p className="lead">Tu pedido ha sido procesado con éxito. Esperamos verte de nuevo pronto.</p>
        <button className="btn btn-primary btn-lg mt-3" onClick={seguirComprando}>Seguir comprando</button>
    </div>
);

export default Confirmation;
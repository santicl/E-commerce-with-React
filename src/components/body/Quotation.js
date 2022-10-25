function Quotation() {
    return (
        <div className="Quotation">
            <div className="Quotation_description">
                <h2>¿No encuentras tu Tour?</h2>
                <p>Dinos tu Tour personalizado y nosotros encontraremos la mejor opcion para ti o la crearemos para ti</p>
            </div>
            <form>
                <div className="Container-quotation">
                    <div className="Quotation_info">
                        <div>
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" id="name" placeholder="Nombre" required/>
                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" placeholder="Email" required/>
                        </div>
                    </div>
                    <div className="Quotation_next">
                        <div className="Next">
                            <label htmlFor="cel">Cel</label>
                            <input type="text" name="cel" id="cel" placeholder="Cel" required/>
                        </div>
                        <div className="Next">
                            <label htmlFor="date">Fecha</label>
                            <input type="date" name="date" id="date" placeholder="Fecha Tour" required/>
                        </div>
                    </div>
                    <div className="Quotation_messaje">
                        <div className="Messaje">
                            <label htmlFor="persons">Numero de Personas</label>
                            <input type="number" name="persons" id="persons" placeholder="Numero Personas" required/>
                        </div>
                        <div className="Messaje">
                            <textarea placeholder="Dinos toda la informacion del Tour que deseas" required>
                            </textarea>
                        </div>
                    </div>
                    <div className="Quotation_button">
                        <button>Pedir cotizacion</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Quotation;
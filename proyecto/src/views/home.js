import React, { useContext } from "react";
import '../App.css';
import { Context } from "../store/appContext";


const Chocolate = props => {
    const { store, actions } = useContext(Context);

    return (

        <div className="card mr-3 col-md-3 col-sm-5 mb-3 ">
            <div className="card-header">
                Chocolate amargo
            </div>
            <div className="card-body">
                $ 3.990 x unidad
            </div>

            <div className="justify content-between">
                {/* boton para actival del Modal */}
                <button
                    type="button"
                    class="mb-3 mr-4 ml-4 btn btn-secondary"
                    data-toggle="modal"
                    data-target="#exampleModal"
                >
                    Ver detalles
                </button>

                <button
                    type="button"
                    className="mb-3 btn btn-primary "
                    name="ChocolateAmargo"
                    id="ChocolateAmargo"
                    onClick={(e) => { actions.cambiarCheckbox(e) }}
                    value={"ChocolateAmargo"}
                >
                    Agregar
                </button>
            </div>

            {/* Modal */}
            <div
                class="modal fade"
                id="exampleModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5
                                class="modal-title"
                                id="exampleModalLabel">
                                Chocolate Amargo
                            </h5>
                            <button
                                type="button"
                                class="close"
                                data-dismiss="modal"
                                aria-label="Close"
                            >
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <p><strong>Descripción del producto:</strong>
                            Barra de chocolate amargo de 300 grs con 72% de cacao</p>

                            <p><strong>Valor:</strong>
                            $ 3.990 x unidad</p>

                            <img
                                className="card card-img"
                                id="card-hoteles2"
                                src="/img/chocolate.jpg"
                                alt="imagen chocolate amargo" />

                            <small>Tip: El chocolate amargo disminuye el riesgo cardiovascular</small>
                        </div>
                        <div class="modal-footer">
                            <button
                                type="button"
                                className="mb-3 btn btn-primary "
                                name="Chocolate"
                                id="Chocolate"
                                onClick={(e) => { actions.cambiarCheckbox(e) }}
                                value={"Chocolate"}
                            >
                                Agregar
                            </button>
                        </div>
                    </div>
                </div>
            </div>





        </div>
    )
}

const Manzana = props => {
    const { store, actions } = useContext(Context);

    return (
        <div className="card mr-3 col-md-3 col-sm-5 mb-3">
            <div className="card-body">
                Manzana
    </div>
            <button
                type="button"
                className="mb-3 btn btn-primary custom-control-button"
                name="Manzana"
                id="Manzana"
                onClick={(e) => { actions.cambiarCheckbox(e) }}
                value={"Manzana"}
            >
                Agregar
    </button>
        </div>
    )
}

const Pera = props => {
    const { store, actions } = useContext(Context);

    return (
        <div className="card mr-3 col-md-3 col-sm-5 mb-3">
            <div className="card-body">
                Pera
    </div>
            <button
                type="button"
                className="mb-3 btn btn-primary custom-control-button"
                name="Pera"
                id="Pera"
                onClick={(e) => { actions.cambiarCheckbox(e) }}
                value={"Pera"}
            >
                Agregar
    </button>
        </div>
    )
}

const Home = props => {

    const { store, actions } = useContext(Context);

    return (
        <div className="container">
            <h1>Agrega lo que quieres comprar</h1>
            <div className="">
                <form>
                    <div className="row row-cols-1 row-cols-md-3">

                        <Chocolate />
                        <Manzana />
                        <Pera />

                    </div>
                </form>
            </div>

            <hr />

            <div className="inferior">
                <h1>Lo que compraste</h1>
                <div
                    className="card"
                    id="selection">
                    {
                        store.product.Manzana !== "Manzana" &&
                            store.product.Pera !== "Pera" &&
                            store.product.Chocolate !== "Chocolate"
                            ?
                            <alert id="alert" className="alert alert-danger" role="alert"
                            >No haz elegido nada</alert>
                            :
                            <div id="add">
                                <ul>
                                    <ol>
                                        {store.product.Chocolate}
                                    </ol>
                                    <ol>
                                        {store.product.Manzana}
                                    </ol>
                                    <ol>
                                        {store.product.Pera}
                                    </ol>
                                </ul>
                            </div>
                    }

                </div> {/* fin renderizado */}
            </div>
        </div>
    )
}

export default Home;
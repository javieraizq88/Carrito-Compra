import React, { useContext } from "react";
import { Context } from "./store/appContext";
import './App.css';


const Chocolate = props => {
    const { store, actions } = useContext(Context);

    return (

        <div className="card mr-3 col-md-3 col-sm-5 mb-3 ">
            <div className="card-body">
                Chocolate
    </div>
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
            <h1>falta modal con precio por producto</h1>
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
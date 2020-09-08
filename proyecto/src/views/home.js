import React, { useContext, useEffect } from "react";
import '../App.css';
import { Context } from "../store/appContext";
import data from "../data.js";



const Home = props => {

    const { store, actions } = useContext(Context);

    useEffect(() => {
        fetch('./db.json')
            .then(response => response.json())
            .then(data => this.setState({ data: data }));
    }, [])

    return (
        <div className="container">
            <div className="card-group">
                <div className="col-md-9">
                    <h2>Agrega lo que quieres comprar</h2>
                    <form>
                        <div className="row row-cols-1 row-cols-md-3">
                            {data.map(product => {
                                return (
                                    <div className="card mr-3 col-md-5 col-sm-5 mb-3 ">
                                        <div className="card-header">
                                            {product.product_name}
                                        </div>
                                        <div className="card-body">
                                            <div id="descripcion">
                                                <p><strong>Descripción del producto:</strong> <br />
                                                    {product.description}</p>
                                            </div>
                                            <div id="valor">
                                                <p><strong>Valor:</strong> <br />
                                                    {product.valor}</p>
                                            </div>

                                            <img
                                                className="card card-img"
                                                src={product.imagen}
                                                alt="imagen" />
                                        </div>

                                        <div className="justify content-between">
                                            <button
                                                type="button"
                                                className="mb-3 btn btn-primary "
                                                name={product.product_value}
                                                id={product.product_value}
                                                onClick={(e) => { actions.cambiarCheckbox(e) }}
                                                value={product.product_value}
                                            >
                                                Agregar
                                        </button>
                                        </div>
                                    </div>
                                )
                            })
                            }

                        </div>
                    </form>
                </div>

                <hr />

                <div className="col-md-3 " id="compras">
                    <h3>Tu compra</h3>
                    <div
                        className="card"
                        id="selection">
                        {
                            store.product.Manzana !== "Manzana" &&
                                store.product.Pera !== "Pera" &&
                                store.product.Chocolate !== "Chocolate" &&
                                store.product.Porsche !== "Porsche" &&
                                store.product.IPhone !== "IPhone"
                                ?
                                <alert id="alert" className="alert alert-danger" role="alert"
                                >No haz elegido ningun producto</alert>
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
                                        <ol>
                                            {store.product.Porsche}
                                        </ol>
                                        <ol>
                                            {store.product.IPhone}
                                        </ol>
                                    </ul>
                                    <button
                                        type="button"
                                        id="pagar"
                                        className="btn btn-danger "
                                        src="#"
                                    >
                                        Pagar
                                        </button>
                                </div>
                        }

                    </div> {/* fin renderizado */}
                </div>
            </div >
        </div>
    )
}

export default Home;
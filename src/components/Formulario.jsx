import React, { Fragment } from 'react'
import './css/Formulario.css'

const Formulario = () => {

    const cursos = []
    const clubes = []
    return (
        <Fragment>
            <form action='http://www.google.com.pe' method="GET" className="mb-5">
                <div className="form-group">
                    <label>Nombre <span className="required">*</span></label>
                    <input type="text" name="nombre" id="nombre" className="form-control" />
                </div>
                <div className="form-group">
                    <label>Apellido <span className="required">*</span></label>
                    <input type="text" name="apellido" id="apellido" className="form-control" />
                </div>
                <div className="form-group">
                    <label>Número de celular <span className="required">*</span></label>
                    <input type="number" name="celular" id="celular" className="form-control" />
                </div>
                <div className="form-group">
                    <label>Email <span className="required">*</span></label>
                    <input type="email" name="email" id="email" className="form-control" />
                </div>
                <div className="form-group">
                    <label>Área de interés <span className="required">*</span></label>
                    <select name="curso" id="curso" className="form-control">
                        <option key="null" disabled selected></option>
                        {
                            cursos.map((curso, _id) => {
                                <li key={_id}>{curso}</li>
                            })
                        }
                    </select>
                    <small>Solo 20 socios por área de interés</small>
                </div>
                <div className="form-group">
                    <label>Tipo de Membresía <span className="required">*</span></label>
                    <select name="tipoMembresia" id="tipoMembresia" className="form-control">
                        <option key="null" selected disabled></option>
                        <option key="Rotario">Rotario</option>
                        <option key="Rotaractiano">Rotaractiano</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Nombre del Club Rotario <span className="required">*</span></label>
                    <select name="club" id="club" className="form-control">
                    <option key="null" disabled selected></option>
                        {
                            clubes.map((club, _id) => {
                                <li key={_id}>{club}</li>
                            })
                        }
                    </select>
                </div>
                <div className="form-group">
                    <label>Cargo <span className="required">*</span></label>
                    <select name="cargo" id="cargo" className="form-control">
                        <option key="Ninguno">Ninguno</option>
                        <option key="Presidente">Presidente</option>
                        <option key="Presidente electo">Presidente electo</option>
                        <option key="Presidente Comité Proyectos 2020-2021">Presidente Comité Proyectos 2020-2021</option>
                        <option key="Presidente Comité Proyectos 2021-2022">Presidente Comité Proyectos 2021-2022</option>
                    </select>
                </div>
            </form>
        </Fragment>
    )
}

export default Formulario;
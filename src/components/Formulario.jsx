import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios'
import './css/Formulario.css'


const Formulario = () => {
    const urlBase = 'http://localhost:8000'

    const [clubes, setClubes] = useState([]) //Clubes
    const [cursos, setCursos] = useState([]) //Cursos
    const [inscripcionValues, setInscripcionValues] = useState({})

    useEffect(() => {
        obtenerClubes()
        obtenerCursos()

    }, [])

    const obtenerClubes = async () => {
        const data = await fetch(`${urlBase}/getClubes`)
            .then(console.log("Peticion correcta"))
            .catch(console.log("Error"))

        const clubes = await data.json()
        setClubes(clubes.clubes)
    }

    const obtenerCursos = async () => {
        const data = await fetch(`${urlBase}/getCursos`)
            .then(console.log("Peticion correcta"))
            .catch(console.log("Error"))

        const cursos = await data.json()
        setCursos(cursos.cursos)
    }

    const enviarFormulario = (event) => {
        event.preventDefault()
        guardarFormulario()
    }

    const guardarFormulario = async () => {
        console.log(inscripcionValues)
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(inscripcionValues)
        }

        const response = await fetch(`${urlBase}/setInscripcion`, requestOptions)
        const respuesta = response.json()
        console.log(respuesta)
        //Verificar datos correctos
    }

    const handleChange = (event) => {

        setInscripcionValues({
            ...inscripcionValues,
            [event.target.name]: event.target.value
        })
        console.log(inscripcionValues)
    }

    const handleChangeSelect = (event) => {
        const selectedIndex = event.target.selectedIndex
            setInscripcionValues({
                ...inscripcionValues,
                [event.target.name]: event.target.value
            })
        console.log(inscripcionValues)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        guardarFormulario()
    }

    return (
        <Fragment>
            <form onSubmit={enviarFormulario} className="mb-5">
                <div className="form-group">
                    <label>Nombre <span className="required">*</span></label>
                    <input type="text" name="nombre" id="nombre" className="form-control" onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Apellido <span className="required">*</span></label>
                    <input type="text" name="apellido" id="apellido" className="form-control" onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Número de celular <span className="required">*</span></label>
                    <input type="number" name="celular" id="celular" className="form-control" onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Email <span className="required">*</span></label>
                    <input type="email" name="email" id="email" className="form-control" onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Área de interés <span className="required">*</span></label>
                    <select name="curso" id="curso" className="form-control" onChange={handleChangeSelect}>
                        {
                            cursos.map(item => (
                                <option key={item._id} value={item._id}>{item.curso}</option>
                            ))
                        }

                    </select>
                    <small>Solo 20 socios por área de interés</small>
                </div>
                <div className="form-group">
                    <label>Tipo de Membresía <span className="required">*</span></label>
                    <select name="tipoMembresia" id="tipoMembresia" className="form-control" onChange={handleChangeSelect}>
                        <option key="Rotario" value="Rotario">Rotario</option>
                        <option key="Rotaractiano" value="Rotaractiano">Rotaractiano</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Nombre del Club Rotario <span className="required">*</span></label>
                    <select name="club" id="club" className="form-control" onChange={handleChangeSelect}>
                        {
                            clubes.map(item => (
                                <option key={item._id} value={item._id}>{item.zona} - {item.club}</option>
                            ))
                        }
                    </select>

                </div>
                <div className="form-group">
                    <label>Cargo <span className="required">*</span></label>
                    <select name="cargo" id="cargo" className="form-control" onChange={handleChangeSelect}>
                        <option key="Ninguno" value="Ninguno">Ninguno</option>
                        <option key="Presidente" value="Presidente">Presidente</option>
                        <option key="Presidente electo" value="Presidente electo">Presidente electo</option>
                        <option key="Presidente Comité Proyectos 2020-2021" value="Presidente Comité Proyectos 2020-2021">Presidente Comité Proyectos 2020-2021</option>
                        <option key="Presidente Comité Proyectos 2021-2022" value="Presidente Comité Proyectos 2021-2022">Presidente Comité Proyectos 2021-2022</option>
                    </select>
                </div>
                <div className="row">
                    <div className="col-12 mt-4">
                        <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Registrarse</button>
                    </div>
                </div>
            </form>
        </Fragment>
    )
}

export default Formulario;
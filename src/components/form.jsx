import { useParams, NavLink } from 'react-router-dom';
import swal from 'sweetalert';
import { useState } from 'react';
import '../styles/form.scss'

function Formulario() {
    let params = useParams();
    const [values, setValues] = useState({})
    const [error, setErrors] = useState({})

    function validate(input) {
        let errors = {};
        if (!/^[a-zA-Z ']+$/.test(input.name)) {
            errors.name = 'nombre no valido'
        }
        if (!/^\s*[0-9]{1,10}\s*$/.test(input.celular)) {
            errors.celular = "celular invalido"
        }
        if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(input.email)) {
            errors.correo = 'correo invalido'
        }
        if (input.edad < 18 || input.edad > 100) {
            errors.edad = 'edad no valida'
        }
        return errors
    }
    function onChange(e) {
        setValues({ ...values, [e.target.name]: e.target.value })
        setErrors(validate({ ...values, [e.target.name]: e.target.value }))

    }
    const onConfirm = (r) => { console.log('limpiar') }
    function submit(e) {
        e.preventDefault()
        if (Object.keys(values).length !== 0 && Object.keys(error).length === 0) {
            console.log(values)
            setValues({})
            swal({
                text: "Tu información fue enviada con éxito, estaremos en contacto contigo",
                icon: "success",
                timer:5000,
                button:false,
            }).then(()=>{
                document.getElementsByName('name')[0].value='';
                document.getElementsByName('email')[0].value='';
                document.getElementsByName('celular')[0].value='';
                document.getElementsByName('edad')[0].value='';
            });

        } else {
            swal({
                title: "ERROR!",
                text: "verifica los campos.",
                icon: "warning",
                dangerMode: true,
            });
        }

    }
    return (
        <div className='login-box'>
            <NavLink to={'/'} className='link'>↤ atras</NavLink>
            <h2>Ud ha decidido viajar en {params.name}</h2>
            <form onSubmit={submit}>
                <div className='user-box'>
                    <input type="text" name="name" onChange={onChange} />
                    <label>Nombre Completo:</label>
                </div>
                <div className='user-box'>
                    <input type='text' name='email' onChange={onChange} />
                    <label>Email:</label>
                </div>
                <div className='user-box'>
                    <input type='number' name='celular' maxLength="" onChange={onChange} />
                    <label>Celular:</label>
                </div>
                <div className='user-box'>
                    <input type='number' name='edad' onChange={onChange} value={values['edad']} />
                    <label>Edad:</label>
                </div>
                <button className='btn' type='submit' >ENVIAR</button>
            </form>
        </div>
    )
}
export default Formulario;
import React, { useEffect, useState } from 'react';
import { Grid, Button, TextField } from '@material-ui/core/';

const Contatos = () => {

    const url = 'http://localhost:5000/message'

    const [message, setMessage] = useState([])
    const [email, setEmail] = useState('')
    const [content, setContent] = useState('')
    const [validator, setValidator] = useState(false)
    const [render, setRender] = useState(false)
    const [sucess, setSucess] = useState(false)

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async () => {
      const response = await fetch(url)
      const data = await response.json()
      setMessage(data)
    }, [render])

    const sendMessage = () => {
        setValidator(false)
        if(email.length <= 0 || content.length <= 0){
            return setValidator(!validator)
        }

        const bodyData = {
            email: email,
            message: content
        }

        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(bodyData)
        })
        .then((response) => response.json())
        .then((data) => {
            if(data.id) {
                setRender(true)
                setSucess(true)
                setTimeout(() => {
                    setSucess(false)
                }, 5000)
            }
        })

        setEmail('')
        setContent('')
    }
    return(
        <>
            <Grid container direction="row" xs={12}>
                <TextField id="name" label="E-mail" value={email} onChange={(event) => {setEmail(event.target.value)}} fullWidth/>
                <TextField id="message" label="Mensagem" value={content} onChange={(event) => {setContent(event.target.value)}} fullWidth/>
            </Grid>
            <Button className='mt-2' variant="contained" color="primary" onClick={sendMessage}>
                Enviar
            </Button>

            {validator && 
                <div className="mt-2 alert alert-warning alert-dismissible fade show" role="alert">
                    <strong>Erro!</strong> Por favor, preencha todos os campos.
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            }

            {sucess && 
                <div className="mt-2 alert alert-success alert-dismissible fade show" role="alert">
                    <strong>Pronto!</strong> Sua mensagem foi enviada.
                </div>
            }


            {message.map((content) => {
                return(
                <div className="card mt-2" key={content.id}>
                    <div className="card-body">
                        <h5 className="card-title">{content.email}</h5>
                        <p className="card-text">{content.message}</p>
                        <p className="card-text"><small className="text-muted">{content.created_at}</small></p>
                    </div>
                </div>
                )
            })}
        </>
    )
}

export default Contatos;

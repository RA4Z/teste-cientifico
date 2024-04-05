import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import './styles.css'
import { TransitionProps } from '@mui/material/transitions';
import BotaoHover from 'components/BotaoHover';
import { loginIndicadores } from 'services/indicadores';

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function Login() {
    const [open, setOpen] = React.useState(false);
    const [dados, setDados] = React.useState({ email: '', senha: '' })

    const handleClickOpen = () => {
        setDados({ email: '', senha: '' })
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    async function logar() {
        if (dados.email === '' || dados.senha === '') return alert('E-mail ou senha estão em branco!')
        const response = await loginIndicadores(dados.email, dados.senha)
        if (response === 'success') {
            alert('Logado com sucesso!')
            window.location.reload()
        } else {
            alert('E-mail ou senha inválidos!')
        }
    }

    return (
        <>
            <BotaoHover text='Fazer Login' onClick={handleClickOpen} />
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description">
                <div className="screen">
                    <div className="screen__content">
                        <div className="login">
                            <div className="login__field">
                                <i className="login__icon fas fa-user"></i>
                                <input type="text" className="login__input" placeholder="E-mail"
                                    value={dados.email} onChange={e => setDados({ ...dados, email: e.target.value })} />
                            </div>
                            <div className="login__field">
                                <i className="login__icon fas fa-lock"></i>
                                <input type="password" className="login__input" placeholder="Senha"
                                    value={dados.senha} onChange={e => setDados({ ...dados, senha: e.target.value })} />
                            </div>
                            <button className="button login__submit" onClick={() => logar()}>
                                <span className="button__text">Fazer Login</span>
                                <i className="button__icon fas fa-chevron-right"></i>
                            </button>
                        </div>
                    </div>
                    <div className="screen__background">
                        <span className="screen__background__shape screen__background__shape4"></span>
                        <span className="screen__background__shape screen__background__shape3"></span>
                        <span className="screen__background__shape screen__background__shape2"></span>
                        <span className="screen__background__shape screen__background__shape1"></span>
                    </div>
                </div>
            </Dialog>
        </>
    );
}
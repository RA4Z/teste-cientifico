import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import styles from './InfoIndicador.module.scss'
import { TransitionProps } from '@mui/material/transitions';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface Props {
  fileName: string,
  description: string,
  criado_por: string,
  criado_em: string
  databases: string[],
  atualizacao: string,
  usabilidade: string
  link_groups: string,
  link_web: string,
}

export default function InfoIndicador(props: Props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <button className={styles.button_access} onClick={handleClickOpen}>Saber mais</button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description">
        <DialogTitle>{`Informações sobre o indicador "${props.fileName}"`}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {props.description} criado por {props.criado_por} em {props.criado_em},
            sua atualização ocorre em {props.atualizacao} sendo utilizado em {props.usabilidade}
          </DialogContentText>
          {props.link_web !== '' && <a href={props.link_web}>Acessar Indicador</a>}
          {props.link_groups !== '' && <p> Caminho Groups: {props.link_groups}</p>}

          {/* Bases de dados utilizadas */}
          {props.databases.length > 0 &&
            <><h4>Bases de dados utilizadas pelo Indicador:</h4>
              {props.databases.map((data, index) => (
                <p key={index} className={styles.paragraph}>{data}</p>
              ))}</>}

        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
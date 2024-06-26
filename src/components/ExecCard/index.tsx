import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Auto from 'assets/exec_auto.png';
import { Timestamp } from '@firebase/firestore-types';

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

interface Props {
    id: string,
    data_desenvolvimento: Timestamp,
    nome: string,
    desenvolvedor: string,
    solicitante: string,
    descricao: string,
    imagem: string
}

export default function ExecCard(props: Props) {
    const navigate = useNavigate()
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card sx={{ width: 345, bgcolor: '#D9D9D9' }}>
            <CardHeader 
                avatar={
                    <Avatar aria-label="recipe">
                        <img src={props.imagem ? props.imagem : Auto} style={{ height: '100%' }} alt='imagem' />
                    </Avatar>
                }
                title={
                    <div style={{
                        display: '-webkit-box',
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        WebkitLineClamp: 1, // Define o número máximo de linhas a serem exibidas
                    }}>
                        {props.nome}
                    </div>
                }
                subheader={`${props.solicitante}`}
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary" style={{
                    display: '-webkit-box',
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    WebkitLineClamp: 3,
                }}>
                    Software solicitado por {props.solicitante} e desenvolvido por {props.desenvolvedor}, projeto finalizado no dia {props.data_desenvolvimento.toDate().toLocaleDateString()}
                </Typography>
            </CardContent>
            {props.descricao !== '' && <>
                <CardActions disableSpacing>
                    <Button onClick={() => navigate(`/Automatization/${props.id}`)} variant="outlined" size="medium">
                        Ver mais
                    </Button>
                    <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography paragraph style={{ wordWrap: 'break-word' }}>
                            {props.descricao}
                        </Typography>
                    </CardContent>
                </Collapse>
            </>}
        </Card>
    );
}
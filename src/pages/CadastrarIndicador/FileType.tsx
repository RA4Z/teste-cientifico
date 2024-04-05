import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import styles from './CadastrarIndicador.module.scss'
import classNames from "classnames";

interface Props {
    dados: any,
    setDados: any
}

export default function FileType(props: Props) {
    return (
        <FormControl>
            <InputLabel id="demo-simple-select-label" style={{ color: '#4ba3eb' }}>Tipo de Arquivo</InputLabel>
            <Select
                id="demo-simple-select"
                value={props.dados.FILE_TYPE}
                className={classNames(
                    styles.status_projeto,
                    styles[`status_projeto--${props.dados.FILE_TYPE.replace(' ', '_').toLowerCase()}`]
                )}
                onChange={e => props.setDados({ ...props.dados, FILE_TYPE: e.target.value })}>
                <MenuItem value={'Excel'} style={{ color: '#1e6f42', fontWeight: 'bold' }}>Excel</MenuItem>
                <MenuItem value={'Power BI'} style={{ color: '#e8b613', fontWeight: 'bold' }}>Power BI</MenuItem>
                <MenuItem value={'Power Apps'} style={{ color: '#912c88', fontWeight: 'bold' }}>Power Apps</MenuItem>
                <MenuItem value={'Outros'} style={{ color: 'black', fontWeight: 'bold' }}>Outros</MenuItem>
            </Select>
        </FormControl>
    )
}
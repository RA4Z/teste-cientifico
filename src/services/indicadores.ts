import { supabase } from "config/supabase";
import { IndicadoresType } from "types/automation";

export async function getIndicadores(setDados: any, setBackup: any) {
    try {
        let { data: indicadores, error } = await supabase
            .from('indicadores')
            .select('*')
        if (error) {
            throw error;
        }
        setDados(indicadores)
        setBackup(indicadores)
        return indicadores;
    } catch (error: any) {
        console.error('Erro ao buscar indicadores:', error.message);
        setDados([])
        return null;
    }
}

export async function insertIndicadores(indicador: IndicadoresType) {
    try {
        const { error } = await supabase
            .from('indicadores')
            .insert([
                {
                    NOME: indicador.NOME, DESCRIÇÃO: indicador.DESCRIÇÃO, CRIADO_POR: indicador.CRIADO_POR,
                    CRIADO_EM: indicador.CRIADO_EM, DATABASES: indicador.DATABASES, ATUALIZACAO: indicador.ATUALIZACAO,
                    FILE_TYPE: indicador.FILE_TYPE, USABILIDADE: indicador.USABILIDADE, LINK_GROUPS: indicador.LINK_GROUPS,
                    LINK_WEB: indicador.LINK_WEB
                },
            ])
            .select()
        if (error) return error
        return 'success'
    }
    catch (error: any) {
        console.error('Erro ao buscar indicadores:', error.message);
        return null;
    }
}

export async function loginIndicadores(email: string, password: string) {
    const { error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
    })
    if (error) return error
    return 'success'
}

export async function logoffIndicadores() {
    const { error } = await supabase.auth.signOut()
    if (error) return error
    return 'success'
}

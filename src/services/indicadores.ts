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
        const { data, error } = await supabase
            .from('indicadores')
            .insert([
                { NOME: indicador.NOME, DESCRIÇÃO: indicador.DESCRIÇÃO },
            ])
            .select()
        if (error) return error
        return data
    }
    catch (error: any) {
        console.error('Erro ao buscar indicadores:', error.message);
        return null;
    }
}

export async function loginIndicadores(email: string, password: string) {
    console.log(email, password)
    const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
    })
    if (error) return error
    return data
}

import { supabase } from "config/supabase";

export async function getIndicadores(setDados: any, setBackup:any) {
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

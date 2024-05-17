import { Backdrop, CircularProgress } from "@mui/material";

interface Props {
    open: any
}

export default function Loading({ open }: Props) {
    return (
        <>
            {open === true && <Backdrop
                sx={{
                    color: '#fff',
                    zIndex: (theme) => theme.zIndex.drawer + 1000,
                    position: 'absolute', // Make the backdrop relative to its parent
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                }}
                open={open}
            >
                <CircularProgress color="inherit" />
            </Backdrop>}
        </>
    )
}
import Link from 'next/link'

export default function Inicio() {
    return (
        <>
            <h1>Início!</h1>
            <Link href='/estiloso'>
                Estiloso
            </Link>
        </>
    )
}
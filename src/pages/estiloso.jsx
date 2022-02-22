import styles from '../styles/Estiloso.module.css'
import Link from 'next/link'
import Layout from '../components/Layout'

export default function Estiloso() {
    return (
        <Layout titulo='Estilo modularizado'>
            <div className={styles.roxo}>
                <h1>Estilo usando Módulos</h1>
            </div>
        </Layout>
        
    )
}
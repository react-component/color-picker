import Link from 'next/link'
import { readdir } from 'fs/promises'
import { basename, extname, resolve } from 'path'

const MainPage = (props) => {
    const { examples } = props
    return (
        <>
            <h1>Examples</h1>
            <ul>
                {examples.map(example => (
                    <li key={example}>
                        <Link href={`./${example}`}>{example}</Link>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default MainPage

export const getStaticProps = async () => {
    const pagesPath = resolve('pages')
    return ({
        props: {
            examples: (await readdir(pagesPath))
                .map(p => basename(p, extname(p)))
                .filter(p => !['index', '_app'].includes(p))
        }
    })
}
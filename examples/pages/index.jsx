import Link from 'next/link'
import { readdir } from 'fs/promises'
import { basename, extname, resolve } from 'path'

const MainPage = (props) => {
    const { examples, normalLinks } = props
    return (
        <>
            <h1>Examples</h1>
            <ul>
                {examples.map(example => (
                    <li key={example}>
                        {normalLinks
                            ? <a href={`./${example}`}>{example}</a>
                            : <Link href={`./${example}`}>{example}</Link>}
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
                .filter(p => !['index', '_app'].includes(p)),
            normalLinks: process.env.NODE_ENV === 'production'
        }
    })
}
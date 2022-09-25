import About from './components/About'
import Meta from './components/Meta'
import Hero from './components/Hero'
import {metaData} from './data'

export default function Home() {
    const title = metaData['title'];
    const description = metaData['description'];

    return (
        <div>
        <Meta title={title} description={description} />
        <Hero />
        <About />
        </div>
    )
}
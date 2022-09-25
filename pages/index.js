import About from './components/About'
import Education from './components/Education'
import Hero from './components/Hero'
import Meta from './components/Meta'
import {metaData} from './data'

export default function Home() {
    const title = metaData['title'];
    const description = metaData['description'];

    return (
        <div class="container">
        <Meta title={title} description={description} />
        <Hero />
        <About />
        <Education />
        </div>
    )
}
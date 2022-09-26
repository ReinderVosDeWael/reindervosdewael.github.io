import { useRef } from 'react';

import About from './components/About'
import Experience from './components/Experience'
import Hero from './components/Hero'
import Meta from './components/Meta'
import { metaData } from './data'

export default function Home() {
    const title = metaData['title'];
    const description = metaData['description'];

    const references = {
        'hero': useRef(null),
        'about': useRef(null),
        'experience': useRef(null)
    }
    return (
        <div class="container">
            <Meta title={title} description={description} />
            <Hero references={references['about']} />
            <About references={references['about']} />
            <Experience />
        </div>
    )
}
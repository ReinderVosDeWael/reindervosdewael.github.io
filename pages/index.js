import { useRef } from 'react';
import { createRef } from 'react';

import About from './components/About'
import Experience from './components/Experience'
import Hero from './components/Hero'
import Meta from './components/Meta'
import { metaData } from './data'

export default function Home() {
    const title = metaData['title'];
    const description = metaData['description'];
    const about_ref = createRef();

    return (
        <div class="container">
            <Meta title={title} description={description} />
            <Hero ref={about_ref}/>
            <About ref={about_ref}/>
            <Experience />
        </div>
    )
}
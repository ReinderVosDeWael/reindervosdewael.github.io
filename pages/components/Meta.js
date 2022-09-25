import Head from 'next/head'
import {useRouter} from 'next/router';


export default function Meta(...props) {
    //TODO: What is pathname?
    const {asPath: pathname} = useRouter();
    return (
    <Head>
        <title>{props['title']}</title>
        <meta name="description" content={props['description']} />
        <link rel="icon" href="/favicon.ico" />

        {/* Twitter: https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup */}
        <meta content={props['title']} name="twitter:title" />
        <meta content={props['description']} name="twitter:description" />
    </Head>
    )
}
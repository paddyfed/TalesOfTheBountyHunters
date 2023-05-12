import '../styles/global.css';
import Script from 'next/script';


export default function App({ Component, pageProps }) {
    return (
        <>
            <Component {...pageProps} />;
            <Script id="stat-counter">
                {`var sc_project=12880292; 
        var sc_invisible=1; 
        var sc_security="c0fd9579";` }
            </Script>
            <Script src="https://www.statcounter.com/counter/counter.js" />
        </>
    );
}
"use client"
import { useEffect, useRef } from 'react'
export default function Banner(): JSX.Element {
    const banner = useRef<HTMLDivElement>(null)

    const atOptions = {
        key: '78d46c6dd1955f7c7c4420f77b922c83',
        format: 'iframe',
        height : 90,
		width : 728,
        params: {},
    }
    useEffect(() => {
    if (banner.current && !banner.current.firstChild) {
        const conf = document.createElement('script')
        const script = document.createElement('script')
        script.type = 'text/javascript'
        script.src = `//strewviolently.com/78d46c6dd1955f7c7c4420f77b922c83/invoke.js`
        conf.innerHTML = `atOptions = ${JSON.stringify(atOptions)}`

        banner.current.append(conf)
        banner.current.append(script)
    }
}, [banner])

    return <div className="grid justify-center">
        <div className="my-20 " ref={banner}></div>
    </div>
}


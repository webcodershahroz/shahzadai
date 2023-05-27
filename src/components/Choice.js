import React from 'react'
import { Link } from 'react-router-dom'

export default function Choice() {
    return (
        <>
            <div id="chatai">
            <div className="d-flex justify-content-center align-items-center" style={{ 'height': '100vh' }}>
                <div className="choices d-flex flex-column h-25">
                    <Link role={'button'} to="/chatai" className="my-3 px-4 py-2 bg-transparent text-light fw-bold border chat">Chat With AI</Link>
                    <Link role={'button'} className="my-3 px-4 py-2 bg-transparent text-light fw-bold border image">Create image</Link>
                    <Link role={'button'} className="my-3 px-4 py-2 bg-transparent text-light fw-bold border spell-checker">Spell Checker</Link>
                </div>
            </div>
            </div>
        </>
    )
}

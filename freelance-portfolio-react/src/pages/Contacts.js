import React from 'react'

const Contacts = () => {
  return (
    <main className="section">
        <div className="container">
                <h1 className="title-1">Contacts</h1>

                <ul className="content-list">
                    <li className="content-list__item">
                        <h2 className="title-2">Location</h2>
                        <p>Prague, Czech Republic</p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Telegram / WhatsApp</h2>
                        <p><a href="tel:+420(775)323682">@ks7sancho / +420 (775) 323-682</a></p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Email</h2>
                        <p><a href="mailto:progersanzhar@icloud.com">progersanzhar@icloud.com</a></p>
                    </li>
                </ul>

        </div>
    </main>
  )
}

export default Contacts
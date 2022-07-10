import { motion } from 'framer-motion'

export function Contact() {
    return (
        <motion.section className="contact-main" initial={{ x: window.innerWidth }}
            animate={{ x: 0 }}
            exit={{ x: -window.innerWidth, transition: { duration: 0.2 } }}>
            <div className="contact-form">
                <div className="header">
                    <p>Let’s make something special</p>
                    <h1>Contact</h1>
                    <div className="block"></div>
                    <p>Feel free to Contact me by submitting the form below and I will get back to you as soon as possible.</p>
                </div>
                <form action="https://formsubmit.co/isabelmavd2@gmail.com" method="POST">
                    <label htmlFor="exampleRecipientInput">Name</label>
                    <input name="name" className="u-full-width" type="text" required />
                    <label htmlFor="exampleEmailInput">Email</label>
                    <input name="email" className="u-full-width" type="email" required />
                    <label htmlFor="exampleMessage">Message</label>
                    <textarea name="message" rows="10" required>
                    </textarea>
                    <button className="submit-btn" type="submit" value="Submit">
                        <div className="eff-2"></div>
                        <a>Submit</a>
                    </button>
                </form>
            </div>
        </motion.section>
    )
}

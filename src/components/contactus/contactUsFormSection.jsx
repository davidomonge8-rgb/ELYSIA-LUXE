import { useState } from 'react'
import '../../componentsCss/contactus/contactUsFormSection.css'

function ContactUsFormSection(){
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        subject: 'General Inquiry',
        desiredDate: '',
        message: '',
    })

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        confirm("Confirm send your inquiry")
    }

    return(
        <section className="formSection">
            <div className="formSectionText">
                <h3>1248 Avenue of Excellence, Belgravia, London SW1X 7XL</h3>

                <div className="formSectionBlock">
                    <p>Inquiries</p>
                    <a href="mailto:concierge@elysialuxe.com">concierge@elysialuxe.com</a>
                    <a href="#">+44 (0) 20 7123 4567</a>
                </div>

                <div className="formSectionBlock">
                    <p>Press & Media</p>
                    <a href="mailto:media@elysialuxe.com">media@elysialuxe.com</a>
                </div>

                <div className="formSectionDivider" />

                <div className="formSectionIcons">
                    <a href="#" aria-label="Website">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <circle cx="12" cy="12" r="9" />
                            <path d="M3 12h18M12 3c2.5 2.8 4 6.1 4 9s-1.5 6.2-4 9M12 3c-2.5 2.8-4 6.1-4 9s1.5 6.2 4 9" />
                        </svg>
                    </a>
                    <a href="#" aria-label="Share">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <circle cx="6" cy="12" r="2" />
                            <circle cx="18" cy="6" r="2" />
                            <circle cx="18" cy="18" r="2" />
                            <path d="M8 11l8-4M8 13l8 4" />
                        </svg>
                    </a>
                    <a href="mailto:concierge@elysialuxe.com" aria-label="Email">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <rect x="3" y="5" width="18" height="14" rx="1" />
                            <path d="M3 7l9 6 9-6" />
                        </svg>
                    </a>
                </div>
            </div>

            <div className="formFill">
                <form className="contactForm" onSubmit={handleSubmit}>
                    <div className="formRow">
                        <div className="formField">
                            <label htmlFor="fullName">Full Name</label>
                            <input
                                type="text"
                                id="fullName"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                placeholder="Jonathan Doe"
                                required
                            />
                        </div>

                        <div className="formField">
                            <label htmlFor="email">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="j.doe@example.com"
                                required
                            />
                        </div>
                    </div>

                    <div className="formRow">
                        <div className="formField">
                            <label htmlFor="subject">Subject</label>
                            <div className="selectWrapper">
                                <select
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="General Inquiry">General Inquiry</option>
                                    <option value="Reservation">Reservation</option>
                                    <option value="Event Planning">Event Planning</option>
                                    <option value="Press & Media">Press & Media</option>
                                </select>
                            </div>
                        </div>

                        <div className="formField">
                            <label htmlFor="desiredDate">Desired Date</label>
                            <input
                                type="date"
                                id="desiredDate"
                                name="desiredDate"
                                value={formData.desiredDate}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="formField formFieldFull">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Tell us about your requirements..."
                            rows={4}
                            required
                        />
                    </div>

                    <button type="submit" className="formSubmit">
                        Send Inquiry <span aria-hidden="true">→</span>
                    </button>
                </form>
            </div>
        </section>
    )
}

export default ContactUsFormSection

"use client";

import { useState, type FormEvent, type ChangeEvent } from "react";
import Link from "next/link";
import "./Contact.css";

type ContactForm = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const initialForm: ContactForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const contactDetails = [
  {
    icon: "pin",
    label: "OUR LOCATION",
    lines: ["123 Luxury Avenue", "New York, NY 10001, USA"],
  },
  {
    icon: "phone",
    label: "PHONE",
    lines: ["+1 (555) 123-4567"],
  },
  {
    icon: "mail",
    label: "EMAIL",
    lines: ["hello@aurel.com"],
  },
  {
    icon: "clock",
    label: "BUSINESS HOURS",
    lines: ["Mon – Fri: 9:00 AM – 6:00 PM", "Sat – Sun: 10:00 AM – 4:00 PM"],
  },
];

function ContactIcon({ name }: { name: string }) {
  const common = {
    width: 20,
    height: 20,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.45,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
  };

  switch (name) {
    case "pin":
      return (
        <svg {...common}>
          <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
          <circle cx="12" cy="10" r="2.5" />
        </svg>
      );

    case "phone":
      return (
        <svg {...common}>
          <path d="M21 16.5v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 1.1 3.7 2 2 0 0 1 3.1 1.5h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L7 9.4a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.8 2.2Z" />
        </svg>
      );

    case "mail":
      return (
        <svg {...common}>
          <rect x="2" y="4" width="20" height="16" rx="1" />
          <path d="m3 6 9 7 9-7" />
        </svg>
      );

    default:
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3.5 2" />
        </svg>
      );
  }
}

function HeaderIcon({ type }: { type: "search" | "user" | "bag" }) {
  const common = {
    width: 21,
    height: 21,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.4,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
  };

  if (type === "search") {
    return (
      <svg {...common}>
        <circle cx="10.8" cy="10.8" r="6.8" />
        <path d="m16 16 5 5" />
      </svg>
    );
  }

  if (type === "user") {
    return (
      <svg {...common}>
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21a8 8 0 0 1 16 0" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <path d="M5 8h14l1 13H4L5 8Z" />
      <path d="M9 8V6a3 3 0 0 1 6 0v2" />
    </svg>
  );
}

export default function Contact() {
  const [form, setForm] = useState<ContactForm>(initialForm);
  const [status, setStatus] = useState("");

  const updateField = (
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({ ...form, [event.target.name]: event.target.value });
    setStatus("");
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Connect this handler to your API/email service to deliver messages.
    setStatus("Thank you. Your message is ready to be connected to our team.");
  };

  return (
    <main className="aurel-contact">
      <div className="contact-shade" aria-hidden="true" />

      <header className="site-header">
        <Link className="wordmark" href="/" aria-label="Aurel home">
          AUREL
        </Link>

        <nav className="main-nav" aria-label="Main navigation">
          <Link href="/">HOME</Link>
          <Link href="/shop">SHOP</Link>
          <Link href="/about">ABOUT</Link>
          <Link className="active" href="/contact">
            CONTACT
          </Link>
        </nav>

        <div className="header-actions">
          <button type="button" aria-label="Search">
            <HeaderIcon type="search" />
          </button>
          <button type="button" aria-label="Account">
            <HeaderIcon type="user" />
          </button>
          <button type="button" aria-label="Shopping bag">
            <HeaderIcon type="bag" />
          </button>
        </div>
      </header>

      <section className="contact-layout">
        <div className="contact-copy">
          <p className="eyebrow">
            <span>GET IN TOUCH</span>
          </p>

          <h1>
            CONTACT
            <br />
            US
          </h1>

          <p className="intro">
            We are here to help. Whether you have a question about our collections,
            need assistance with your order, or simply want to get in touch, our team
            is always ready to assist you.
          </p>

          <div className="contact-details">
            {contactDetails.map((item) => (
              <div className="detail-row" key={item.label}>
                <span className="detail-icon">
                  <ContactIcon name={item.icon} />
                </span>

                <div>
                  <h2>{item.label}</h2>
                  {item.lines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="social-links" aria-label="Social links">
            <a
              href="https://instagram.com"
              aria-label="Instagram"
              target="_blank"
              rel="noreferrer"
            >
              ig
            </a>
            <a
              href="https://pinterest.com"
              aria-label="Pinterest"
              target="_blank"
              rel="noreferrer"
            >
              p
            </a>
            <a
              href="https://facebook.com"
              aria-label="Facebook"
              target="_blank"
              rel="noreferrer"
            >
              f
            </a>
            <a
              href="https://x.com"
              aria-label="X"
              target="_blank"
              rel="noreferrer"
            >
              𝕏
            </a>
          </div>
        </div>

        <div className="form-panel">
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">NAME</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your name"
              value={form.name}
              onChange={updateField}
              autoComplete="name"
              required
            />

            <label htmlFor="email">EMAIL</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Your email address"
              value={form.email}
              onChange={updateField}
              autoComplete="email"
              required
            />

            <label htmlFor="subject">SUBJECT</label>
            <div className="select-wrap">
              <select
                id="subject"
                name="subject"
                value={form.subject}
                onChange={updateField}
                required
              >
                <option value="" disabled>
                  Select a subject
                </option>
                <option value="orders">Orders &amp; Shipping</option>
                <option value="products">Product Information</option>
                <option value="returns">Returns &amp; Exchanges</option>
                <option value="partnerships">Partnerships</option>
                <option value="other">Other</option>
              </select>

              <span aria-hidden="true">⌄</span>
            </div>

            <label htmlFor="message">MESSAGE</label>
            <textarea
              id="message"
              name="message"
              placeholder="Your message..."
              value={form.message}
              onChange={updateField}
              rows={5}
              required
            />

            <button className="submit-button" type="submit">
              <span>SEND MESSAGE</span>
              <span className="arrow" aria-hidden="true">
                ⟶
              </span>
            </button>

            {status && (
              <p className="form-status" role="status">
                {status}
              </p>
            )}
          </form>
        </div>
      </section>

      <div className="bottom-glow" aria-hidden="true" />
    </main>
  );
}
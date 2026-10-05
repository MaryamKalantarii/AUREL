'use client';

import { FormEvent, useState } from 'react';
import Link from 'next/link';

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <>
      <style jsx global>{`
        * {
          box-sizing: border-box;
        }

        html,
        body {
          margin: 0;
          padding: 0;
          background: #080706;
          overflow-x: hidden;
        }

        .signup-page {
          position: relative;
          width: 100vw;
          min-height: 100vh;
          overflow: hidden;
          color: #f5f1e9;
          font-family: Arial, Helvetica, sans-serif;
          background: #080706;
        }

        /* ================= BACKGROUND ================= */

        .background {
          position: absolute;
          inset: 0;
          z-index: 0;
          background-image: url('/images/aurel-signup.jpg');
          background-size: 1000px auto;
          background-position: right 4% center;
          background-repeat: no-repeat;
        }

        .overlay {
          position: absolute;
          inset: 0;
          z-index: 1;
          background: linear-gradient(
            90deg,
            rgba(8, 7, 6, 0.98) 0%,
            rgba(8, 7, 6, 0.92) 35%,
            rgba(8, 7, 6, 0.65) 60%,
            rgba(8, 7, 6, 0.25) 85%,
            rgba(8, 7, 6, 0.1) 100%
          );
        }

        /* ================= HEADER ================= */

        .header {
          position: relative;
          z-index: 5;
          width: 100%;
          padding: 38px 52px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          display: inline-flex;
          align-items: center;
          gap: 11px;
          color: #f5f1e9;
          text-decoration: none;
          font-family: Georgia, 'Times New Roman', serif;
          font-size: 19px;
          font-weight: 400;
          letter-spacing: 6px;
        }

        .logo-star {
          font-size: 17px;
          line-height: 1;
        }

        .tagline {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          font-size: 8.5px;
          font-weight: 500;
          letter-spacing: 5px;
          color: rgba(255, 255, 255, 0.8);
          white-space: nowrap;
        }

        .back-link {
          display: flex;
          align-items: center;
          gap: 9px;
          color: rgba(255, 255, 255, 0.85);
          text-decoration: none;
          font-size: 9px;
          letter-spacing: 3px;
          transition: 0.3s ease;
        }

        .back-link:hover {
          opacity: 0.6;
          transform: translateX(3px);
        }

        .back-arrow {
          font-size: 14px;
        }

        /* ================= CONTENT ================= */

        .content {
          position: relative;
          z-index: 5;
          width: 390px;
          margin-left: 6vw;
          margin-top: 4vh;
          padding-bottom: 50px;
        }

        .welcome {
          margin-bottom: 12px;
          font-size: 9px;
          font-weight: 500;
          letter-spacing: 4px;
          color: rgba(255, 255, 255, 0.75);
        }

        .content h1 {
          margin: 0;
          color: #f6f2eb;
          font-family: Georgia, 'Times New Roman', serif;
          font-size: 32px;
          font-weight: 400;
          line-height: 1.2;
          letter-spacing: 0.8px;
        }

        .subtitle {
          margin: 12px 0 0;
          color: rgba(255, 255, 255, 0.65);
          font-family: Georgia, 'Times New Roman', serif;
          font-size: 13.5px;
          line-height: 1.4;
        }

        /* ================= FORM ================= */

        .form {
          width: 100%;
          margin-top: 24px;
        }

        .field {
          width: 100%;
          margin-bottom: 18px;
        }

        .field label {
          display: block;
          margin-bottom: 6px;
          color: rgba(255, 255, 255, 0.75);
          font-size: 8.5px;
          font-weight: 500;
          letter-spacing: 3.5px;
        }

        .field input {
          width: 100%;
          height: 30px;
          padding: 0 0 4px;
          border: none;
          border-bottom: 1px solid rgba(255, 255, 255, 0.35);
          outline: none;
          background: transparent;
          color: white;
          font-size: 14px;
          transition: 0.3s ease;
        }

        .field input:focus {
          border-bottom-color: rgba(255, 255, 255, 0.9);
        }

        /* ================= PASSWORD ================= */

        .password-wrapper {
          position: relative;
        }

        .password-wrapper input {
          padding-right: 35px;
        }

        .eye-button {
          position: absolute;
          right: 0;
          bottom: 4px;
          border: none;
          background: transparent;
          color: rgba(255, 255, 255, 0.6);
          font-size: 15px;
          cursor: pointer;
          padding: 0;
        }

        .eye-button:hover {
          color: white;
        }

        /* ================= BUTTON ================= */

        .sign-in-button {
          width: 100%;
          height: 42px;
          margin-top: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          border: 1px solid rgba(255, 255, 255, 0.35);
          background: rgba(255, 255, 255, 0.02);
          color: rgba(255, 255, 255, 0.9);
          cursor: pointer;
          font-size: 9px;
          font-weight: 500;
          letter-spacing: 3.5px;
          backdrop-filter: blur(2px);
          transition: 0.35s ease;
        }

        .sign-in-button:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(255, 255, 255, 0.7);
        }

        .sign-in-arrow {
          font-size: 14px;
        }

        /* ================= LOGIN LINK ================= */

        .create-account {
          margin-top: 24px;
          display: flex;
          flex-direction: column;
          gap: 7px;
        }

        .create-account-label {
          color: rgba(255, 255, 255, 0.5);
          font-size: 8px;
          font-weight: 500;
          letter-spacing: 3px;
        }

        .create-account a {
          display: flex;
          align-items: center;
          gap: 8px;
          width: fit-content;
          color: rgba(255, 255, 255, 0.9);
          text-decoration: none;
          font-size: 9px;
          font-weight: 500;
          letter-spacing: 3px;
          transition: 0.25s ease;
        }

        .create-account a:hover {
          opacity: 0.6;
          transform: translateX(3px);
        }

        .create-arrow {
          font-size: 14px;
        }

        /* ================= RESPONSIVE ================= */

        @media (max-width: 900px) {
          .background {
            background-size: 850px auto;
          }
          .header {
            padding: 30px 32px;
          }
          .tagline {
            display: none;
          }
          .content {
            width: 340px;
            margin-left: 6vw;
          }
        }

        @media (max-width: 700px) {
          .background {
            background-size: cover;
            background-position: 65% center;
          }
          .header {
            padding: 24px 22px;
          }
          .content {
            width: auto;
            margin: 4vh 24px 0;
          }
          .content h1 {
            font-size: 28px;
          }
        }
      `}</style>

      <main className="signup-page">
        <div className="background" />
        <div className="overlay" />

        {/* HEADER */}
        <header className="header">
          <Link href="/" className="logo">
            <span className="logo-star">✦</span>
            <span>AUREL</span>
          </Link>

          <div className="tagline">
            OBJECTS OF LIGHT.
          </div>

          <Link href="/" className="back-link">
            BACK TO SITE
            <span className="back-arrow">→</span>
          </Link>
        </header>

        {/* SIGN UP CONTENT */}
        <section className="content">
          <div className="welcome">
            BECOME A MEMBER
          </div>

          <h1>
            CREATE YOUR
            <br />
            AUREL ACCOUNT.
          </h1>

          <p className="subtitle">
            Join us to experience exclusive collections.
          </p>

          <form className="form" onSubmit={handleSubmit}>
            <div className="field">
              <label htmlFor="fullname">FULL NAME</label>
              <input id="fullname" type="text" required />
            </div>

            <div className="field">
              <label htmlFor="email">EMAIL</label>
              <input id="email" type="email" required />
            </div>

           <div className="field">
              <label htmlFor="password">PASSWORD</label>
              <div className="password-wrapper">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  required
                />
                <button
                  type="button"
                  className="eye-button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? '◉' : '◌'}
                </button>
              </div>
            </div>

            <div className="field">
              <label htmlFor="confirmPassword">CONFIRM PASSWORD</label>
              <div className="password-wrapper">
                <input
                  id="confirmPassword"
                  type={showConfirmPassword ? 'text' : 'password'}
                  required
                />
                <button
                  type="button"
                  className="eye-button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? '◉' : '◌'}
                </button>
              </div>
            </div>

            <button type="submit" className="sign-in-button">
              <span>CREATE ACCOUNT</span>
              <span className="sign-in-arrow">→</span>
            </button>
          </form>

          <div className="create-account">
            <span className="create-account-label">
              ALREADY HAVE AN ACCOUNT?
            </span>

            <Link href="/login">
              SIGN IN
              <span className="create-arrow">→</span>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
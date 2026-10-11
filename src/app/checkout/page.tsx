
'use client';

import { useMemo, useState, type FormEvent } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import {
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronDown,
  CreditCard,
  LockKeyhole,
  MapPin,
  PackageCheck,
  ShieldCheck,
  Truck,
  Wallet,
  Sparkles,
} from 'lucide-react';

type PaymentMethod = 'card' | 'paypal' | 'cod';
type ShippingMethod = 'standard' | 'express';

type CheckoutItem = {
  id: number;
  name: string;
  variant: string;
  price: number;
  image: string;
  quantity: number;
};

const checkoutItems: CheckoutItem[] = [
  {
    id: 1,
    name: 'AUREL Classic Watch',
    variant: 'GOLD / BLACK',
    price: 299,
    image: '/images/earrings.jpg',
    quantity: 1,
  },
  {
    id: 2,
    name: 'AUREL Leather Bag',
    variant: 'BLACK',
    price: 189,
    image: '/images/product-detail-2.jpg',
    quantity: 1,
  },
  {
    id: 3,
    name: 'AUREL Perfume',
    variant: '100 ML',
    price: 129,
    image: '/images/bracelet.jpg',
    quantity: 1,
  },
];

const money = (amount: number) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);

const inputClass =
  'mt-2 w-full rounded-lg border border-[#b6a27b]/15 bg-[#100e0b] px-4 py-3.5 text-sm text-[#eee9df] outline-none transition placeholder:text-white/20 hover:border-[#c9b58c]/30 focus:border-[#c9b58c]/60 focus:ring-1 focus:ring-[#c9b58c]/10';

const labelClass =
  'text-[10px] font-medium uppercase tracking-[0.17em] text-white/55';

export default function CheckoutPage() {
  const [payment, setPayment] = useState<PaymentMethod>('card');
  const [shippingMethod, setShippingMethod] =
    useState<ShippingMethod>('standard');
  const [sameAddress, setSameAddress] = useState(true);
  const [discountCode, setDiscountCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [discountMessage, setDiscountMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [formMessage, setFormMessage] = useState('');

  const subtotal = useMemo(
    () =>
      checkoutItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      ),
    []
  );

  const shipping = subtotal === 0
    ? 0
    : shippingMethod === 'express'
      ? 25
      : subtotal >= 100
        ? 0
        : 12;

  const tax = subtotal * 0.1;
  const total = Math.max(0, subtotal + shipping + tax - discount);

  function applyDiscount() {
    const code = discountCode.trim().toUpperCase();

    if (code === 'AUREL10') {
      setDiscount(subtotal * 0.1);
      setDiscountMessage('Your 10% discount has been applied.');
    } else {
      setDiscount(0);
      setDiscountMessage(
        code ? 'This promotional code is not valid.' : 'Please enter a code.'
      );
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setFormMessage('');

    // Front-end demonstration only.
    // Connect a secure checkout API/payment provider before accepting orders.
    window.setTimeout(() => {
      setSubmitting(false);
      setFormMessage(
        'Your details are ready. Connect your payment provider to complete this order.'
      );
    }, 500);
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#090806] text-[#eee9df]">
      <Header />

      {/* EDITORIAL HERO */}
      <section className="checkout-hero relative isolate flex min-h-[300px] items-center justify-center overflow-hidden border-b border-[#b6a27b]/10 px-5 py-16 text-center sm:min-h-[350px] lg:min-h-[380px]">
        <div className="pointer-events-none absolute inset-0 -z-30 bg-[#090806]" />

        <div className="checkout-glow pointer-events-none absolute left-1/2 top-1/2 -z-20 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full" />

        <div className="checkout-ribbon checkout-ribbon-one pointer-events-none absolute -left-[20%] top-[10%] -z-10 h-[190px] w-[85%] rounded-[50%]" />
        <div className="checkout-ribbon checkout-ribbon-two pointer-events-none absolute -right-[25%] top-[35%] -z-10 h-[220px] w-[90%] rounded-[50%]" />
        <div className="checkout-ribbon checkout-ribbon-three pointer-events-none absolute -left-[15%] top-[65%] -z-10 h-[130px] w-[75%] rounded-[50%]" />

        <div className="relative z-10 flex w-full flex-col items-center">
          <div className="mb-5 flex items-center gap-4 font-sans text-[10px] font-light uppercase tracking-[0.4em] text-[#c0b294]">
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#c0b294]/70" />
            THE FINAL TOUCH
            <span className="h-px w-10 bg-gradient-to-l from-transparent to-[#c0b294]/70" />
          </div>

          <div className="relative">
            <h1 className="checkout-wordmark bg-gradient-to-b from-[#f0e8d9] via-[#d8c9ae] to-[#8c7c60] bg-clip-text font-serif text-[20vw] font-extralight uppercase leading-[0.95] tracking-[0.06em] text-transparent sm:text-[17vw] lg:text-[170px]">
              AUREL
            </h1>
            <div className="checkout-streak pointer-events-none absolute inset-0 flex items-center justify-center">
              <div className="h-px w-[125%] -rotate-[16deg] bg-gradient-to-r from-transparent via-[#e2d5bd]/50 to-transparent shadow-[0_0_16px_rgba(210,190,150,0.2)]" />
            </div>
          </div>

          <p className="mt-5 text-[9px] font-light uppercase tracking-[0.42em] text-[#c0b49c] sm:text-[10px] sm:tracking-[0.55em]">
            A MOMENT OF YOUR OWN
          </p>

          <div className="mt-8 flex items-center gap-3 text-[9px] uppercase tracking-[0.15em] text-white/35">
            <Link href="/collection" className="transition hover:text-[#e0d0b1]">
              Collection
            </Link>
            <span>/</span>
            <Link href="/cart" className="transition hover:text-[#e0d0b1]">
              Cart
            </Link>
            <span>/</span>
            <span className="text-[#cbb996]">Checkout</span>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </section>

      {/* CHECKOUT CONTENT */}
      <section className="mx-auto max-w-[1320px] px-5 py-10 sm:px-8 md:py-14 lg:px-10 lg:py-16">
        <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="mb-3 text-[9px] uppercase tracking-[0.32em] text-[#c1ad87]">
              A Thoughtful Experience
            </p>
            <h2 className="font-serif text-3xl font-light sm:text-4xl">
              Complete your order<span className="text-[#c6b28c]">.</span>
            </h2>
            <p className="mt-3 max-w-md text-sm leading-6 text-white/40">
              Your chosen pieces are almost yours. Please enter your details
              to continue.
            </p>
          </div>

          <div className="flex items-center gap-3 self-start rounded-full border border-[#b6a27b]/15 px-4 py-2.5 sm:self-auto">
            <LockKeyhole size={13} className="text-[#c9b58c]" strokeWidth={1.4} />
            <span className="text-[9px] uppercase tracking-[0.16em] text-white/50">
              Private & Secure
            </span>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="grid items-start gap-8 lg:grid-cols-[1.5fr_0.85fr] lg:gap-12"
        >
          {/* LEFT: CHECKOUT FORM */}
          <div className="space-y-6">
            {/* Contact */}
            <section className="checkout-panel">
              <div className="checkout-section-heading">
                <span className="checkout-number">01</span>
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl">
                    Contact information
                  </h3>
                  <p className="mt-1 text-xs text-white/35">
                    Where we can reach you about your order.
                  </p>
                </div>
              </div>

              <div className="mt-7 grid gap-5 sm:grid-cols-2">
                <label className="sm:col-span-2">
                  <span className={labelClass}>Email address *</span>
                  <input
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    placeholder="you@example.com"
                    className={inputClass}
                  />
                </label>

                <label>
                  <span className={labelClass}>First name *</span>
                  <input
                    name="firstName"
                    autoComplete="given-name"
                    required
                    placeholder="First name"
                    className={inputClass}
                  />
                </label>

                <label>
                  <span className={labelClass}>Last name *</span>
                  <input
                    name="lastName"
                    autoComplete="family-name"
                    required
                    placeholder="Last name"
                    className={inputClass}
                  />
                </label>

                <label className="sm:col-span-2">
                  <span className={labelClass}>Phone number *</span>
                  <input
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    required
                    placeholder="+1 000 000 0000"
                    className={inputClass}
                  />
                </label>
              </div>
            </section>

            {/* Shipping address */}
            <section className="checkout-panel">
              <div className="checkout-section-heading">
                <span className="checkout-number">02</span>
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl">
                    Shipping address
                  </h3>
                  <p className="mt-1 text-xs text-white/35">
                    A little closer to arriving at your door.
                  </p>
                </div>
                <MapPin
                  size={19}
                  strokeWidth={1.2}
                  className="ml-auto text-[#c1ad87]/70"
                />
              </div>

              <div className="mt-7 grid gap-5 sm:grid-cols-2">
                <label className="sm:col-span-2">
                  <span className={labelClass}>Country / Region *</span>
                  <div className="relative">
                    <select
                      name="country"
                      autoComplete="country-name"
                      required
                      defaultValue=""
                      className={`${inputClass} appearance-none pr-10`}
                    >
                      <option value="" disabled>
                        Select your country
                      </option>
                      <option value="US">United States</option>
                      <option value="GB">United Kingdom</option>
                      <option value="CA">Canada</option>
                      <option value="AE">United Arab Emirates</option>
                      <option value="TR">Türkiye</option>
                      <option value="AZ">Azerbaijan</option>
                      <option value="IR">Iran</option>
                      <option value="OTHER">Other</option>
                    </select>
                    <ChevronDown
                      size={15}
                      className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white/40"
                    />
                  </div>
                </label>

                <label>
                  <span className={labelClass}>City *</span>
                  <input
                    name="city"
                    autoComplete="address-level2"
                    required
                    placeholder="Your city"
                    className={inputClass}
                  />
                </label>

                <label>
                  <span className={labelClass}>State / Province</span>
                  <input
                    name="province"
                    autoComplete="address-level1"
                    placeholder="State or province"
                    className={inputClass}
                  />
                </label>

                <label className="sm:col-span-2">
                  <span className={labelClass}>Street address *</span>
                  <input
                    name="address"
                    autoComplete="street-address"
                    required
                    placeholder="Street, building and apartment"
                    className={inputClass}
                  />
                </label>

                <label>
                  <span className={labelClass}>Postal code *</span>
                  <input
                    name="postalCode"
                    autoComplete="postal-code"
                    required
                    placeholder="Postal code"
                    className={inputClass}
                  />
                </label>

                <label>
                  <span className={labelClass}>Order note</span>
                  <input
                    name="orderNote"
                    placeholder="Optional"
                    className={inputClass}
                  />
                </label>
              </div>

              <p className="mt-5 flex items-start gap-2 text-[11px] leading-5 text-white/40">
                <ShieldCheck
                  size={14}
                  className="mt-0.5 shrink-0 text-[#c1ad87]"
                />
                Your personal information is used to prepare and deliver your
                order.
              </p>
            </section>

            {/* Shipping method */}
            <section className="checkout-panel">
              <div className="checkout-section-heading">
                <span className="checkout-number">03</span>
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl">
                    Delivery method
                  </h3>
                  <p className="mt-1 text-xs text-white/35">
                    Choose how your order arrives.
                  </p>
                </div>
              </div>

              <div className="mt-7 space-y-3">
                <label
                  className={`checkout-option ${
                    shippingMethod === 'standard' ? 'checkout-option-active' : ''
                  }`}
                >
                  <input
                    type="radio"
                    name="shipping"
                    value="standard"
                    checked={shippingMethod === 'standard'}
                    onChange={() => setShippingMethod('standard')}
                    className="checkout-radio"
                  />
                  <Truck size={20} strokeWidth={1.3} className="text-[#c1ad87]" />
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm">Standard delivery</span>
                    <span className="mt-1 block text-[11px] text-white/40">
                      Estimated 5–7 business days
                    </span>
                  </span>
                  <span className="text-xs text-[#ded1b7]">
                    {subtotal >= 100 ? 'Complimentary' : money(12)}
                  </span>
                </label>

                <label
                  className={`checkout-option ${
                    shippingMethod === 'express' ? 'checkout-option-active' : ''
                  }`}
                >
                  <input
                    type="radio"
                    name="shipping"
                    value="express"
                    checked={shippingMethod === 'express'}
                    onChange={() => setShippingMethod('express')}
                    className="checkout-radio"
                  />
                  <PackageCheck
                    size={20}
                    strokeWidth={1.3}
                    className="text-[#c1ad87]"
                  />
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm">Express delivery</span>
                    <span className="mt-1 block text-[11px] text-white/40">
                      Estimated 2–3 business days
                    </span>
                  </span>
                  <span className="text-xs text-[#ded1b7]">{money(25)}</span>
                </label>
              </div>
            </section>

            {/* Payment */}
            <section className="checkout-panel">
              <div className="checkout-section-heading">
                <span className="checkout-number">04</span>
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl">
                    Payment method
                  </h3>
                  <p className="mt-1 text-xs text-white/35">
                    Select your preferred payment option.
                  </p>
                </div>
              </div>

              <div className="mt-7 space-y-3">
                <label
                  className={`checkout-option ${
                    payment === 'card' ? 'checkout-option-active' : ''
                  }`}
                >
                  <input
                    type="radio"
                    name="payment"
                    value="card"
                    checked={payment === 'card'}
                    onChange={() => setPayment('card')}
                    className="checkout-radio"
                  />
                  <CreditCard
                    size={20}
                    strokeWidth={1.3}
                    className="text-[#c1ad87]"
                  />
                  <span className="flex-1">
                    <span className="block text-sm">Credit / Debit card</span>
                    <span className="mt-1 block text-[11px] text-white/40">
                      Visa, Mastercard and more
                    </span>
                  </span>
                  <LockKeyhole size={14} className="text-white/30" />
                </label>

                {payment === 'card' && (
                  <div className="payment-details">
                    <p className="text-xs leading-6 text-white/45">
                      Your card details will be collected securely through the
                      payment provider at the next step.
                    </p>
                  </div>
                )}

                <label
                  className={`checkout-option ${
                    payment === 'paypal' ? 'checkout-option-active' : ''
                  }`}
                >
                  <input
                    type="radio"
                    name="payment"
                    value="paypal"
                    checked={payment === 'paypal'}
                    onChange={() => setPayment('paypal')}
                    className="checkout-radio"
                  />
                  <Wallet
                    size={20}
                    strokeWidth={1.3}
                    className="text-[#c1ad87]"
                  />
                  <span className="flex-1">
                    <span className="block text-sm">PayPal</span>
                    <span className="mt-1 block text-[11px] text-white/40">
                      Continue with your PayPal account
                    </span>
                  </span>
                </label>

                <label
                  className={`checkout-option ${
                    payment === 'cod' ? 'checkout-option-active' : ''
                  }`}
                >
                  <input
                    type="radio"
                    name="payment"
                    value="cod"
                    checked={payment === 'cod'}
                    onChange={() => setPayment('cod')}
                    className="checkout-radio"
                  />
                  <PackageCheck
                    size={20}
                    strokeWidth={1.3}
                    className="text-[#c1ad87]"
                  />
                  <span className="flex-1">
                    <span className="block text-sm">Cash on delivery</span>
                    <span className="mt-1 block text-[11px] text-white/40">
                      Subject to availability in your region
                    </span>
                  </span>
                </label>

                <p className="flex items-start gap-2 pt-2 text-[10px] leading-5 text-white/35">
                  <ShieldCheck
                    size={14}
                    className="mt-0.5 shrink-0 text-[#c1ad87]"
                  />
                  Available payment methods must be confirmed by your store
                  configuration and payment provider.
                </p>
              </div>
            </section>

            {/* Billing address */}
            <section className="checkout-panel">
              <label className="flex cursor-pointer items-start gap-3">
                <input
                  type="checkbox"
                  checked={sameAddress}
                  onChange={(event) => setSameAddress(event.target.checked)}
                  className="mt-1 accent-[#c1ad87]"
                />
                <span>
                  <span className="block text-sm">
                    Billing address is the same as shipping
                  </span>
                  <span className="mt-1 block text-xs leading-5 text-white/40">
                    Use the delivery address for your billing details.
                  </span>
                </span>
              </label>

              {!sameAddress && (
                <p className="mt-4 border-t border-[#b6a27b]/10 pt-4 text-xs leading-6 text-white/45">
                  A separate billing address is selected. Add the billing
                  address fields here when connecting your checkout API.
                </p>
              )}
            </section>

            {/* Submit feedback */}
            {formMessage && (
              <div
                role="status"
                className="rounded-lg border border-[#b6a27b]/20 bg-[#b6a27b]/[0.05] p-4 text-xs leading-6 text-[#d9c9aa]"
              >
                {formMessage}
              </div>
            )}

            <button
              type="submit"
              disabled={submitting || checkoutItems.length === 0}
              className="group flex min-h-[58px] w-full items-center justify-center gap-3 rounded-full bg-[#d7cbb3] px-6 py-4 text-[10px] font-medium uppercase tracking-[0.19em] text-[#17140f] transition duration-300 hover:bg-[#eee3cd] disabled:cursor-not-allowed disabled:opacity-50 sm:text-xs"
            >
              {submitting ? 'Preparing your order...' : 'Continue to secure payment'}
              {!submitting && (
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              )}
            </button>

            <p className="text-center text-[10px] leading-5 text-white/30">
              By continuing, you agree to our terms of service and privacy policy.
            </p>
          </div>

          {/* RIGHT: ORDER SUMMARY */}
          <aside className="h-fit lg:sticky lg:top-24">
            <div className="overflow-hidden rounded-xl border border-[#b6a27b]/15 bg-[#0d0b08]">
              <div className="border-b border-[#b6a27b]/10 px-5 py-6 sm:px-7">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-2xl">Your selection</h3>
                  <span className="text-[9px] tracking-[0.15em] text-white/40">
                    {checkoutItems.reduce((n, item) => n + item.quantity, 0)} ITEMS
                  </span>
                </div>
                <p className="mt-2 text-xs text-white/40">
                  Carefully selected. Beautifully yours.
                </p>
              </div>

              <div className="space-y-0 px-5 sm:px-7">
                {checkoutItems.map((item) => (
                  <article
                    key={item.id}
                    className="flex gap-4 border-b border-[#b6a27b]/10 py-5 last:border-b-0"
                  >
                    <div className="relative h-[88px] w-[76px] shrink-0 overflow-hidden rounded-md border border-[#b6a27b]/10 bg-[#11100d]">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="76px"
                        className="object-cover"
                      />
                      <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full border border-[#0d0b08] bg-[#d7cbb3] px-1 text-[9px] font-medium text-[#17140f]">
                        {item.quantity}
                      </span>
                    </div>

                    <div className="flex min-w-0 flex-1 flex-col justify-center">
                      <h4 className="font-serif text-[15px] leading-6">
                        {item.name}
                      </h4>
                      <p className="mt-1 text-[9px] tracking-[0.15em] text-white/40">
                        {item.variant}
                      </p>
                      <p className="mt-3 text-xs text-[#ded1b7]">
                        {money(item.price * item.quantity)}
                      </p>
                    </div>
                  </article>
                ))}
              </div>

              {/* Promo code */}
              <div className="border-y border-[#b6a27b]/10 px-5 py-5 sm:px-7">
                <label className={labelClass} htmlFor="discountCode">
                  Gift or promotional code
                </label>
                <div className="mt-3 flex gap-2">
                  <input
                    id="discountCode"
                    value={discountCode}
                    onChange={(event) => {
                      setDiscountCode(event.target.value);
                      setDiscountMessage('');
                    }}
                    placeholder="Enter code"
                    className="min-w-0 flex-1 rounded-lg border border-[#b6a27b]/15 bg-[#100e0b] px-3 py-3 text-xs text-white outline-none transition placeholder:text-white/25 focus:border-[#c9b58c]/50"
                  />
                  <button
                    type="button"
                    onClick={applyDiscount}
                    className="rounded-lg border border-[#b6a27b]/30 px-4 text-[9px] uppercase tracking-[0.12em] text-[#d7c7a8] transition hover:bg-[#b6a27b]/10"
                  >
                    Apply
                  </button>
                </div>

                {discountMessage && (
                  <p
                    role="status"
                    className={`mt-3 text-[10px] leading-5 ${
                      discount > 0 ? 'text-[#c7b58e]' : 'text-white/45'
                    }`}
                  >
                    {discountMessage}
                  </p>
                )}
              </div>

              {/* Totals */}
              <div className="px-5 py-6 sm:px-7">
                <div className="space-y-4 text-xs">
                  <div className="flex items-center justify-between text-white/50">
                    <span>Subtotal</span>
                    <span className="text-white/80">{money(subtotal)}</span>
                  </div>

                  <div className="flex items-center justify-between text-white/50">
                    <span>Shipping</span>
                    <span className="text-white/80">
                      {shipping === 0 ? 'Complimentary' : money(shipping)}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-white/50">
                    <span>Estimated tax</span>
                    <span className="text-white/80">{money(tax)}</span>
                  </div>

                  {discount > 0 && (
                    <div className="flex items-center justify-between text-[#cbb996]">
                      <span>Discount</span>
                      <span>-{money(discount)}</span>
                    </div>
                  )}
                </div>

                <div className="my-6 h-px bg-gradient-to-r from-transparent via-[#b6a27b]/25 to-transparent" />

                <div className="flex items-end justify-between gap-3">
                  <div>
                    <p className="font-serif text-xl">Total</p>
                    <p className="mt-2 text-[9px] uppercase tracking-[0.12em] text-white/35">
                      USD · All applicable charges
                    </p>
                  </div>
                  <span className="font-serif text-3xl font-light tracking-tight text-[#e8decb] sm:text-4xl">
                    {money(total)}
                  </span>
                </div>

                <div className="mt-6 flex items-start gap-3 rounded-lg border border-[#b6a27b]/10 bg-white/[0.015] p-4">
                  <Sparkles
                    size={17}
                    strokeWidth={1.2}
                    className="mt-0.5 shrink-0 text-[#c1ad87]"
                  />
                  <p className="text-[10px] leading-5 text-white/45">
                    Every AUREL piece is chosen to become part of your story.
                    Thank you for choosing timeless design.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="flex items-center gap-2 rounded-lg border border-[#b6a27b]/10 px-3 py-4">
                <ShieldCheck
                  size={17}
                  strokeWidth={1.2}
                  className="shrink-0 text-[#c1ad87]"
                />
                <span className="text-[9px] leading-4 text-white/45">
                  Protected checkout
                </span>
              </div>
              <div className="flex items-center gap-2 rounded-lg border border-[#b6a27b]/10 px-3 py-4">
                <PackageCheck
                  size={17}
                  strokeWidth={1.2}
                  className="shrink-0 text-[#c1ad87]"
                />
                <span className="text-[9px] leading-4 text-white/45">
                  Thoughtful packaging
                </span>
              </div>
            </div>

            <Link
              href="/cart"
              className="mt-6 inline-flex items-center gap-3 text-xs text-[#c7b99c] transition hover:text-white"
            >
              <ArrowLeft size={15} strokeWidth={1.3} />
              Return to your cart
            </Link>
          </aside>
        </form>
      </section>

      {/* BRAND FOOTER STRIP */}
      <section className="border-y border-[#b6a27b]/10">
        <div className="mx-auto flex max-w-[1320px] flex-col items-center justify-center gap-3 px-5 py-10 text-center">
          <div className="flex items-center gap-3 text-[#c1ad87]">
            <span className="h-px w-8 bg-[#b6a27b]/30" />
            <Check size={13} strokeWidth={1.3} />
            <span className="h-px w-8 bg-[#b6a27b]/30" />
          </div>
          <p className="font-serif text-lg tracking-wide">
            The art of choosing well.
          </p>
          <p className="text-[9px] uppercase tracking-[0.35em] text-white/35">
            AUREL — Objects of Light
          </p>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        .checkout-hero {
          background:
            radial-gradient(
              ellipse at 50% 48%,
              rgba(190, 168, 126, 0.055),
              transparent 45%
            ),
            linear-gradient(115deg, #090806 0%, #100e0a 48%, #080705 100%);
        }

        .checkout-glow {
          background: radial-gradient(
            circle,
            rgba(190, 166, 121, 0.075) 0%,
            rgba(177, 151, 106, 0.025) 38%,
            transparent 70%
          );
          filter: blur(65px);
          animation: checkout-glow 7s ease-in-out infinite alternate;
        }

        .checkout-ribbon {
          border-top: 1px solid rgba(194, 171, 128, 0.13);
          border-bottom: 1px solid rgba(255, 255, 255, 0.025);
          background: linear-gradient(
            165deg,
            transparent 32%,
            rgba(190, 166, 122, 0.035) 42%,
            rgba(255, 255, 255, 0.022) 46%,
            transparent 60%
          );
          box-shadow: inset 0 9px 18px rgba(255, 255, 255, 0.012);
          filter: blur(1.5px);
          transform: rotate(-17deg);
        }

        .checkout-ribbon-one {
          animation: checkout-drift 14s ease-in-out infinite alternate;
        }

        .checkout-ribbon-two {
          transform: rotate(-25deg);
          border-top-color: rgba(194, 166, 119, 0.14);
          animation: checkout-drift 18s ease-in-out infinite alternate-reverse;
        }

        .checkout-ribbon-three {
          transform: rotate(12deg);
          border-top-color: rgba(255, 255, 255, 0.07);
        }

        .checkout-wordmark {
          filter: drop-shadow(0 20px 40px rgba(0, 0, 0, 0.55));
        }

        .checkout-streak {
          opacity: 0.65;
          mix-blend-mode: screen;
          animation: checkout-streak 9s ease-in-out infinite;
        }

        .checkout-panel {
          border: 1px solid rgba(182, 162, 123, 0.13);
          border-radius: 12px;
          background: linear-gradient(
            145deg,
            rgba(17, 14, 10, 0.96),
            rgba(12, 10, 8, 0.98)
          );
          padding: 24px;
          transition: border-color 300ms ease;
        }

        .checkout-panel:hover {
          border-color: rgba(182, 162, 123, 0.2);
        }

        .checkout-section-heading {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .checkout-number {
          display: flex;
          height: 37px;
          width: 37px;
          flex-shrink: 0;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(182, 162, 123, 0.22);
          border-radius: 50%;
          color: #c1ad87;
          font-family: Georgia, serif;
          font-size: 13px;
          font-weight: 300;
        }

        .checkout-option {
          display: flex;
          min-height: 76px;
          align-items: center;
          gap: 14px;
          border: 1px solid rgba(182, 162, 123, 0.13);
          border-radius: 9px;
          padding: 15px;
          cursor: pointer;
          transition:
            border-color 250ms ease,
            background 250ms ease;
        }

        .checkout-option:hover {
          border-color: rgba(182, 162, 123, 0.32);
          background: rgba(182, 162, 123, 0.025);
        }

        .checkout-option-active {
          border-color: rgba(193, 173, 135, 0.48);
          background: rgba(182, 162, 123, 0.045);
        }

        .checkout-radio {
          width: 14px;
          height: 14px;
          flex-shrink: 0;
          accent-color: #c1ad87;
        }

        .payment-details {
          margin: -2px 0 12px;
          border-left: 1px solid rgba(182, 162, 123, 0.35);
          padding: 12px 14px;
        }

        @keyframes checkout-glow {
          from {
            opacity: 0.55;
            transform: translate(-50%, -50%) scale(0.94);
          }
          to {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1.06);
          }
        }

        @keyframes checkout-drift {
          from {
            translate: 0 0;
          }
          to {
            translate: 0 -10px;
          }
        }

        @keyframes checkout-streak {
          0%, 100% {
            opacity: 0.3;
            transform: translateX(-3%);
          }
          50% {
            opacity: 0.75;
            transform: translateX(3%);
          }
        }

        @media (min-width: 640px) {
          .checkout-panel {
            padding: 30px;
          }
        }

        @media (max-width: 420px) {
          .checkout-panel {
            padding: 18px;
          }

          .checkout-option {
            gap: 10px;
            padding: 12px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .checkout-glow,
          .checkout-ribbon-one,
          .checkout-ribbon-two,
          .checkout-streak {
            animation: none;
          }
        }
      `}</style>
    </main>
  );
}

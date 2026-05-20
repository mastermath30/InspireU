"use client";

import { FormEvent, useState } from "react";
import CTAButton from "./CTAButton";

interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

const EMPTY: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  message: "",
};

export default function ContactForm() {
  const [values, setValues] = useState<FormState>(EMPTY);
  const [toast, setToast] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("ContactForm submission", values);
    setToast("Thanks, we'll be in touch.");
    setValues(EMPTY);
    setTimeout(() => setToast(null), 4000);
  };

  const update =
    (key: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setValues((v) => ({ ...v, [key]: e.target.value }));

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-6"
      noValidate
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Field
          id="firstName"
          label="First Name"
          required
          value={values.firstName}
          onChange={update("firstName")}
        />
        <Field
          id="lastName"
          label="Last Name"
          required
          value={values.lastName}
          onChange={update("lastName")}
        />
      </div>
      <Field
        id="email"
        type="email"
        label="Email"
        required
        value={values.email}
        onChange={update("email")}
      />
      <TextArea
        id="message"
        label="Message"
        required
        value={values.message}
        onChange={update("message")}
      />
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-2">
        <CTAButton type="submit" variant="white">
          Submit Form
        </CTAButton>
        {toast && (
          <p
            className="font-sans text-sm text-gold animate-fade-in"
            role="status"
            aria-live="polite"
          >
            {toast}
          </p>
        )}
      </div>
    </form>
  );
}

interface FieldProps {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function Field({ id, label, type = "text", required, value, onChange }: FieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={id}
        className="font-display text-xs uppercase tracking-[0.2em] text-gold"
      >
        {label}
        {required && <span className="ml-1 text-gold/70">*</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        className="bg-elevated border border-gold-subtle rounded-xl px-5 py-4 font-sans text-base text-primary placeholder:text-muted focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
      />
    </div>
  );
}

interface TextAreaProps {
  id: string;
  label: string;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

function TextArea({ id, label, required, value, onChange }: TextAreaProps) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={id}
        className="font-display text-xs uppercase tracking-[0.2em] text-gold"
      >
        {label}
        {required && <span className="ml-1 text-gold/70">*</span>}
      </label>
      <textarea
        id={id}
        name={id}
        required={required}
        value={value}
        onChange={onChange}
        rows={6}
        className="bg-elevated border border-gold-subtle rounded-xl px-5 py-4 font-sans text-base text-primary placeholder:text-muted focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors resize-y min-h-[140px]"
      />
    </div>
  );
}

import { useState } from 'react';
import { CheckCircle2, AlertCircle, Loader2, Send } from 'lucide-react';
import { contact } from '../../content/site';

const fields = [
  { name: 'name', label: 'Full name', type: 'text', autoComplete: 'name', required: true },
  { name: 'company', label: 'Company / organisation', type: 'text', autoComplete: 'organization' },
  { name: 'email', label: 'Email address', type: 'email', autoComplete: 'email', required: true },
  { name: 'phone', label: 'Phone number', type: 'tel', autoComplete: 'tel' },
  { name: 'subject', label: 'Subject', type: 'text', required: true, full: true },
];

const empty = { name: '', company: '', email: '', phone: '', subject: '', message: '' };

function validate(v) {
  const e = {};
  if (!v.name.trim()) e.name = 'Enter your name.';
  if (!v.email.trim()) e.email = 'Enter your email address.';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email)) e.email = 'Enter an email address in the format name@example.com.';
  if (v.phone?.trim() && !/^[+\d][\d\s()-]{6,}$/.test(v.phone.trim())) e.phone = 'Enter a phone number using digits, spaces or +.';
  if (!v.subject.trim()) e.subject = 'Enter a subject for your enquiry.';
  if (v.message.trim().length < 10) e.message = 'Enter a message of at least 10 characters.';
  return e;
}

/**
 * Enquiry form. Posts JSON to `contact.formEndpoint` when one is set;
 * otherwise opens the visitor's email app with the enquiry pre-filled.
 */
export default function ContactForm({ defaultSubject = '' }) {
  const [values, setValues] = useState({ ...empty, subject: defaultSubject });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | sent | mailto | error

  const update = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length) {
      document.getElementById(`f-${Object.keys(found)[0]}`)?.focus();
      return;
    }

    if (!contact.formEndpoint) {
      const body = [
        values.message,
        '',
        `Name: ${values.name}`,
        values.company?.trim() && `Company: ${values.company.trim()}`,
        `Email: ${values.email}`,
        values.phone?.trim() && `Phone: ${values.phone.trim()}`,
      ]
        .filter(Boolean)
        .join('\n');
      window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(values.subject)}&body=${encodeURIComponent(body)}`;
      setStatus('mailto');
      return;
    }

    setStatus('sending');
    try {
      const res = await fetch(contact.formEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus('sent');
      setValues(empty);
    } catch {
      setStatus('error');
    }
  };

  if (status === 'sent' || status === 'mailto') {
    return (
      <div role="status" className="rounded-[1.75rem] border border-line bg-mist p-8 sm:p-10">
        <CheckCircle2 className="text-violet-600" size={40} aria-hidden="true" />
        <h3 className="mt-5 text-2xl">{status === 'sent' ? 'Enquiry sent' : 'Your email is ready to send'}</h3>
        <p className="mt-3 text-ink">
          {status === 'sent'
            ? 'Thank you for contacting Efyion Dx. We will reply to the email address you provided.'
            : `We opened your email app with your enquiry filled in. Send it from there to reach ${contact.email}. If nothing opened, email us directly at that address.`}
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-6 min-h-[44px] font-bold text-azure-600 underline-offset-4 hover:underline"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  const inputCls = (name) =>
    `mt-2 block w-full rounded-2xl border bg-white px-4 py-3.5 text-base text-navy-900 placeholder:text-ink/50 transition-colors focus:outline-none focus:ring-2 focus:ring-azure-500/30 ${
      errors[name] ? 'border-red-500 focus:border-red-500' : 'border-line focus:border-azure-500'
    }`;

  return (
    <form noValidate onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2" aria-describedby="form-note">
      {status === 'error' && (
        <div role="alert" className="flex gap-3 rounded-2xl border border-red-200 bg-red-50 p-4 text-red-800 sm:col-span-2">
          <AlertCircle className="mt-0.5 shrink-0" size={20} aria-hidden="true" />
          <p>
            Your enquiry was not sent because the connection failed. Try again, or email us at{' '}
            <a className="font-bold underline" href={`mailto:${contact.email}`}>{contact.email}</a>.
          </p>
        </div>
      )}

      {fields.map((f) => (
        <div key={f.name} className={f.full ? 'sm:col-span-2' : ''}>
          <label htmlFor={`f-${f.name}`} className="text-sm font-bold text-navy-900">
            {f.label}
            {f.required ? <span className="text-violet-600"> *</span> : <span className="font-medium text-ink"> (optional)</span>}
          </label>
          <input
            id={`f-${f.name}`}
            name={f.name}
            type={f.type}
            autoComplete={f.autoComplete}
            value={values[f.name]}
            onChange={update}
            required={f.required}
            aria-invalid={Boolean(errors[f.name])}
            aria-describedby={errors[f.name] ? `e-${f.name}` : undefined}
            className={inputCls(f.name)}
          />
          {errors[f.name] && <p id={`e-${f.name}`} className="mt-2 text-sm font-semibold text-red-600">{errors[f.name]}</p>}
        </div>
      ))}

      <div className="sm:col-span-2">
        <label htmlFor="f-message" className="text-sm font-bold text-navy-900">
          Message<span className="text-violet-600"> *</span>
        </label>
        <textarea
          id="f-message"
          name="message"
          rows={6}
          value={values.message}
          onChange={update}
          required
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? 'e-message' : undefined}
          placeholder="Tell us about your setting and what you're looking for."
          className={`${inputCls('message')} resize-y`}
        />
        {errors.message && <p id="e-message" className="mt-2 text-sm font-semibold text-red-600">{errors.message}</p>}
      </div>

      <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <p id="form-note" className="text-sm text-ink">Fields marked * are required.</p>
        <button
          type="submit"
          disabled={status === 'sending'}
          className="inline-flex min-h-[52px] items-center justify-center gap-3 rounded-full bg-navy-900 px-7 font-bold text-white transition-all hover:bg-navy-800 hover:shadow-lift active:scale-[.98] disabled:cursor-wait disabled:opacity-70"
        >
          {status === 'sending' ? <Loader2 size={18} className="animate-spin" aria-hidden="true" /> : <Send size={18} aria-hidden="true" />}
          {status === 'sending' ? 'Sending enquiry…' : 'Send enquiry'}
        </button>
      </div>
    </form>
  );
}

"use client";

import { useState } from "react";
import Banner, { BannerData } from "./Banner";
import { sendContactEmail } from "@/service/contact";

type Form = {
  from: string;
  subject: string;
  message: string;
};

const DEFAULT_DATA = {
  from: "",
  subject: "",
  message: "",
};

export default function ContactForm() {
  const [banner, setBanner] = useState<BannerData | null>(null);
  const [form, setForm] = useState<Form>(DEFAULT_DATA);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("form >> ", form);

    sendContactEmail(form)
      .then(() => {
        setBanner({ message: "Success!!", state: "success" });
        setForm(DEFAULT_DATA);
      })
      .catch((err) => {
        setBanner({ message: "Fail!!", state: "error" });
      })
      .finally(() => {
        setTimeout(() => {
          setBanner(null);
        }, 2000);
      });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setForm((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <section className="w-full max-w-md">
      {banner && <Banner banner={banner} />}
      <h2 className="text-3xl font-bold my-2">Contact Me</h2>
      <p>crayonzgrim@gmail.com</p>
      <form
        onSubmit={handleSubmit}
        className="w-full flex flex-col gap-2 my-4 p-4 bg-slate-700 rounded-xl"
      >
        <label htmlFor="from" className="font-semibold">
          Your Email
        </label>
        <input
          type="email"
          id="from"
          name="from"
          required
          autoFocus
          value={form.from}
          onChange={handleChange}
        />
        <label htmlFor="subject" className="font-semibold">
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          required
          value={form.subject}
          onChange={handleChange}
        />
        <label htmlFor="message" className="font-semibold">
          Message
        </label>
        <textarea
          rows={10}
          id="message"
          name="message"
          required
          value={form.message}
          onChange={handleChange}
          className="text-black"
        />
        <button className="bg-yellow-300 text-black font-bold hover:bg-yellow-400">
          Submit
        </button>
      </form>
    </section>
  );
}

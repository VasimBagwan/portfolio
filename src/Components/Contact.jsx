// Contact.jsx
import React, { useState, useRef, useEffect } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaSpinner,
  FaCheckCircle,
  FaTimesCircle,
} from "react-icons/fa";

const ACCESS_KEY = "9c908cab-d0af-442b-8d21-c2ce0927f8a2";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState(null);
  const [statusMessage, setStatusMessage] = useState("");

  const formRef = useRef(null);

  const validate = () => {
    const e = {};

    if (!form.name.trim()) {
      e.name = "Please enter your full name.";
    }

    if (!form.email.trim()) {
      e.email = "Please enter your email address.";
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      e.email = "Enter a valid email.";
    }

    if (!form.message.trim() || form.message.trim().length < 10) {
      e.message = "Message must be at least 10 characters.";
    }

    return e;
  };

  useEffect(() => {
    if (status) {
      const t = setTimeout(() => {
        setStatus(null);
        setStatusMessage("");
      }, 5000);

      return () => clearTimeout(t);
    }
  }, [status]);

  async function handleSubmit(e) {
    e.preventDefault();

    setStatus(null);
    setStatusMessage("");

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      const first = Object.keys(validationErrors)[0];
      const el = formRef.current?.querySelector(`[name="${first}"]`);
      el?.focus();
      return;
    }

    setSending(true);

    try {
      const payload = {
        access_key: ACCESS_KEY,
        name: form.name,
        email: form.email,
        message: form.message,
        subject: `Portfolio Contact Message from ${form.name}`,
      };

      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setStatusMessage(
          "Message sent successfully! I will contact you soon."
        );

        setForm({
          name: "",
          email: "",
          message: "",
        });
      } else {
        setStatus("error");
        setStatusMessage("Failed to send message.");
      }
    } catch (error) {
      console.error(error);

      setStatus("error");
      setStatusMessage(
        "Network error. Please try again later."
      );
    } finally {
      setSending(false);
    }
  }

  return (
    <section
      id="contact"
      className="relative w-full min-h-screen flex items-center py-24"
      style={{
        backgroundImage: "url('/contact.jpg')",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

          {/* LEFT SIDE */}
          <div className="card bg-base-100 text-base-content shadow-2xl rounded-2xl p-6 sm:p-8">

            <h2 className="text-4xl font-extrabold mb-3">
              CONTACT ME
            </h2>

            <p className="text-base-content/70 mb-6">
              Have a project, a question or want to collaborate?
              Send me a message — I usually reply quickly.
            </p>

            {/* STATUS */}
            {status === "success" && (
              <div className="alert alert-success mb-4">
                <FaCheckCircle />
                <span>{statusMessage}</span>
              </div>
            )}

            {status === "error" && (
              <div className="alert alert-error mb-4">
                <FaTimesCircle />
                <span>{statusMessage}</span>
              </div>
            )}

            {/* FORM */}
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="space-y-5"
            >

              {/* NAME */}
              <div>
                <label className="label">
                  <span className="label-text">
                    Full Name
                  </span>
                </label>

                <input
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  value={form.name}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      name: e.target.value,
                    })
                  }
                  className={`input input-bordered w-full ${
                    errors.name ? "input-error" : ""
                  }`}
                />

                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.name}
                  </p>
                )}
              </div>

              {/* EMAIL */}
              <div>
                <label className="label">
                  <span className="label-text">
                    Email Address
                  </span>
                </label>

                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={form.email}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      email: e.target.value,
                    })
                  }
                  className={`input input-bordered w-full ${
                    errors.email ? "input-error" : ""
                  }`}
                />

                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* MESSAGE */}
              <div>
                <label className="label">
                  <span className="label-text">
                    Message
                  </span>
                </label>

                <textarea
                  rows="6"
                  name="message"
                  placeholder="Write your message..."
                  value={form.message}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      message: e.target.value,
                    })
                  }
                  className={`textarea textarea-bordered w-full ${
                    errors.message ? "textarea-error" : ""
                  }`}
                />

                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.message}
                  </p>
                )}
              </div>

              {/* BUTTONS */}
              <div className="flex flex-col sm:flex-row gap-3">

                <button
                  type="submit"
                  disabled={sending}
                  className="btn btn-primary flex items-center gap-2"
                >
                  {sending ? (
                    <>
                      <FaSpinner className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setForm({
                      name: "",
                      email: "",
                      message: "",
                    });

                    setErrors({});
                  }}
                  className="btn btn-outline"
                >
                  Reset
                </button>
              </div>
            </form>
          </div>

          {/* RIGHT SIDE */}
          <div className="card bg-base-100 text-base-content shadow-2xl rounded-2xl p-8">

            <h3 className="text-3xl font-bold mb-6">
              Contact Info
            </h3>

            <div className="space-y-6">

              {/* EMAIL */}
              <div className="flex items-start gap-4">
                <FaEnvelope className="text-2xl text-cyan-400 mt-1" />

                <div>
                  <h4 className="font-semibold">
                    Email
                  </h4>

                  <p className="text-base-content/70">
                    vbagwan415@gmail.com
                  </p>
                </div>
              </div>

              {/* PHONE */}
              <div className="flex items-start gap-4">
                <FaPhone className="text-2xl text-cyan-400 mt-1" />

                <div>
                  <h4 className="font-semibold">
                    Phone
                  </h4>

                  <p className="text-base-content/70">
                    +91 8485856475
                  </p>
                </div>
              </div>

              {/* LOCATION */}
              <div className="flex items-start gap-4">
                <FaMapMarkerAlt className="text-2xl text-cyan-400 mt-1" />

                <div>
                  <h4 className="font-semibold">
                    Location
                  </h4>

                  <p className="text-base-content/70">
                    Damani Nagar, Behind Pavan Ganpati,
                    Solapur
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
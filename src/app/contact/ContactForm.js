"use client";
import { CheckCircle, Mail, MessageCircleWarning, Phone, Send, SubscriptIcon, User, Verified } from "lucide-react";
import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    if (!name || !email || !message) {
      setError("Veuillez remplir tous les champs obligatoires.");
      setIsSubmitting(false);
      return;
    }
    try {
      fetch("/api/send-contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, phone: tel, message }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            setSuccess("Message envoyé avec succès !");
            setIsSubmitting(false);
            setName("");
            setEmail("");
            setTel("");
            setMessage("");
          } else {
            setError("Erreur lors de l'envoi du message.");
          }
        })
        .catch((error) => {
          console.error("Erreur:", error);
          setError("Erreur réseau. Veuillez réessayer.");
        });
    } catch (error) {
      console.error("Erreur:", error);
      setError("Erreur lors de l'envoi du message.");
    }
  };
  return (
    <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-10">
      <div className="mb-8">
        {success && (
          <div className="flex items-center gap-2 bg-green-100 text-green-700 px-4 py-3 rounded-lg mb-4">
            <Verified  className="w-5 h-5" />
            {success}
          </div>
        )}
        {error && (
          <div className="flex items-center gap-2 bg-red-100 text-red-700 px-4 py-3 rounded-lg mb-4">
            <MessageCircleWarning className="w-5 h-5" />
            {error}
          </div>
        )}
        <h2 className="text-2xl font-bold text-charcoal mb-2">
          Envoyez-nous un message
        </h2>
        <p className="text-gray-600">
          Remplissez le formulaire ci-dessous et nous vous répondrons dans les
          plus brefs délais.
        </p>
      </div>

      <form className="space-y-6">
        {/* Nom */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
            <User className="w-4 h-4 text-primary" />
            Nom complet *
          </label>
          <input
            type="text"
            placeholder="Jean Dupont"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        {/* Email et Téléphone */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
              <Mail className="w-4 h-4 text-primary" />
              Email *
            </label>
            <input
              type="email"
              placeholder="jean@email.com"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
              <Phone className="w-4 h-4 text-primary" />
              Téléphone
            </label>
            <input
              type="tel"
              placeholder="+212 6XX XXX XXX"
              value={tel}
              onChange={(e) => setTel(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors"
            />
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
            <Send className="w-4 h-4 text-primary" />
            Message *
          </label>
          <textarea
            rows={5}
            placeholder="Décrivez votre demande..."
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors resize-none"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>

        {/* Bouton d'envoi */}
        <button
          onClick={(e) => handleSubmit(e)}
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group"
        >
          <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
        </button>
      </form>
    </div>
  );
}

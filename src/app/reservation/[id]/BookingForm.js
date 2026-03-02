"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  Clock,
  Users,
  Mail,
  Phone,
  MessageSquare,
  CheckCircle,
  AlertCircle,
  CreditCard,
  Shield,
  Gift,
  ChevronRight,
  Sparkles,
  Sun,
  Moon,
  Verified,
} from "lucide-react";

function formatPrice(row) {
  const cur = row.currency || "EUR";
  try {
    return new Intl.NumberFormat("fr-FR", {
      style: "currency",
      currency: cur,
    }).format(row.price);
  } catch {
    return `${row.price} ${cur}`;
  }
}

export default function BookingForm({ prestation }) {
  const [step, setStep] = useState(1);
  const [activityIndex, setActivityIndex] = useState(0);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [participants, setParticipants] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [newsletter, setNewsletter] = useState(false);
  const [terms, setTerms] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const activities = useMemo(() => prestation.pricing ?? [], [prestation]);
  const selectedActivity = activities[activityIndex];

  // Calcul du prix total
  const totalPrice = selectedActivity
    ? selectedActivity.price * participants
    : 0;
  const formattedTotal = selectedActivity
    ? formatPrice({
        ...selectedActivity,
        price: totalPrice,
      })
    : "0 €";

  // Dates disponibles (simulation)
  const availableDates = [
    "2024-04-15",
    "2024-04-16",
    "2024-04-17",
    "2024-04-18",
    "2024-04-19",
  ];

  const times = [
    {
      value: "09:00",
      label: "9h00 - Matin",
      icon: <Sun className="w-4 h-4" />,
    },
    {
      value: "12:00",
      label: "12h00 - Midi",
      icon: <Sun className="w-4 h-4" />,
    },
    {
      value: "15:00",
      label: "15h00 - Après-midi",
      icon: <Sun className="w-4 h-4" />,
    },
    {
      value: "18:00",
      label: "18h00 - Coucher soleil",
      icon: <Moon className="w-4 h-4" />,
    },
  ];

  function nextStep() {
    if (step === 1 && !date) {
      setError("Veuillez sélectionner une date.");
      return;
    }
    setError(null);
    if (step === 2 && (!name || !email || !phone)) {
      setError("Veuillez remplir tous les champs obligatoires.");
      return;
    }
    setError(null);
    setStep(step + 1);
  }

  function prevStep() {
    setStep(step - 1);
  }

  async function onSubmit(e) {
    e.preventDefault();
    if (!name || !email) return;
    setLoading(true);
    try {
      const res = await fetch("/api/send-booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          activity: selectedActivity?.activity,
          date,
          name,
          email,
          phone,
          total: formattedTotal,
          message,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setLoading(false);
        setSubmitted(true);
      } else {
        setError("Erreur lors de l'envoi. Veuillez réessayer.");
      }
    } catch (err) {
      setError("Erreur serveur.");
    }
  }

  if (submitted) {
    return (
      <div className="bg-white rounded-3xl shadow-2xl p-8 text-center">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-green-500" />
        </div>

        <h2 className="text-2xl font-bold text-charcoal mb-2">
          Réservation confirmée ! 🎉
        </h2>

        <p className="text-zinc-600 mb-6">
          Merci {name} ! Nous avons bien reçu votre demande de réservation.
        </p>

        <div className="bg-light rounded-xl p-6 mb-6 text-left">
          <h3 className="font-semibold text-charcoal mb-3">Récapitulatif</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-zinc-600">Activité:</span>
              <span className="font-medium">{selectedActivity?.activity}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-zinc-600">Date:</span>
              <span className="font-medium">
                {new Date(date).toLocaleDateString("fr-FR")}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-zinc-600">Participants:</span>
              <span className="font-medium">{participants} personne(s)</span>
            </div>
            <div className="flex justify-between pt-2 border-t">
              <span className="text-zinc-600">Total:</span>
              <span className="font-bold text-primary">{formattedTotal}</span>
            </div>
          </div>
        </div>

        <p className="text-sm text-zinc-500 mb-6">
          Un email de confirmation vous a été envoyé à <strong>{email}</strong>
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/reservation"
            className="px-6 py-3 bg-primary text-white rounded-xl hover:bg-primary-dark transition-colors"
          >
            Retour aux prestations
          </Link>
          <button
            onClick={() => window.print()}
            className="px-6 py-3 border border-zinc-300 rounded-xl hover:border-primary transition-colors"
          >
            Imprimer le récapitulatif
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
      {/* Header avec progression */}
      <div className="bg-gradient-to-r from-primary to-primary-dark px-6 py-4">
        <div className="flex items-center justify-between text-white">
          <div className="flex items-center gap-4">
            <span className="text-2xl font-bold">{step}/3</span>
            <span className="text-white/80">
              {step === 1 && "Choix de l'activité"}
              {step === 2 && "Vos coordonnées"}
              {step === 3 && "Confirmation"}
            </span>
          </div>
          <div className="flex gap-1">
            {[1, 2, 3].map((s) => (
              <div
                key={s}
                className={`w-2 h-2 rounded-full transition-all ${
                  s <= step ? "bg-white" : "bg-white/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <form className="p-6">
        {error && (
          <div className="flex items-center gap-2 bg-red-100 text-red-700 px-4 py-3 rounded-lg mb-4">
            <AlertCircle className="w-5 h-5" />
            {error}
          </div>
        )}
        {/* Étape 1: Choix de l'activité */}
        {step === 1 && (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-charcoal flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-primary" />
              Choisissez vos options
            </h3>

            {/* Sélection de l'activité */}
            {activities.length > 0 && (
              <div className="space-y-3">
                <label className="text-sm font-medium text-zinc-700">
                  Type d'activité *
                </label>
                <div className="grid gap-3">
                  {activities.map((row, idx) => (
                    <label
                      key={idx}
                      className={`flex cursor-pointer items-center justify-between gap-4 rounded-xl border-2 p-4 transition-all ${
                        activityIndex === idx
                          ? "border-primary bg-primary/5"
                          : "border-zinc-200 hover:border-primary/50"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="radio"
                          name="activity"
                          value={idx}
                          checked={activityIndex === idx}
                          onChange={() => setActivityIndex(idx)}
                          className="h-4 w-4 accent-primary"
                          required
                        />
                        <div>
                          <span className="font-medium text-charcoal">
                            {row.activity}
                          </span>
                          {row.description && (
                            <p className="text-xs text-zinc-500">
                              {row.description}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="text-right">
                        <span className="text-lg font-bold text-primary">
                          {formatPrice(row)}
                        </span>
                        <span className="text-xs text-zinc-500 block">
                          par personne
                        </span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {/* Date et heure */}
            <div className="grid sm:grid-cols-1 gap-4">
              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-1 flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  Date *
                </label>
                <input
                  type="date"
                  value={date}
                  className="w-full rounded-xl border border-zinc-300 px-4 py-3 focus:border-primary focus:outline-none"
                  onChange={(e) => setDate(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Résumé partiel */}
            {selectedActivity && (
              <div className="bg-light rounded-xl p-4">
                <div className="flex justify-between items-center">
                  <span className="text-zinc-600">Sous-total</span>
                  <span className="font-semibold">{formattedTotal}</span>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Étape 2: Coordonnées */}
        {step === 2 && (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-charcoal flex items-center gap-2">
              <Users className="w-5 h-5 text-primary" />
              Vos coordonnées
            </h3>

            <div className="grid gap-4">
              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-1 flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  Nom complet *
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-xl border border-zinc-300 px-4 py-3 focus:border-primary focus:outline-none"
                  placeholder="Jean Dupont"
                  required
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-zinc-700 mb-1 flex items-center gap-1">
                    <Mail className="w-4 h-4" />
                    Email *
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-xl border border-zinc-300 px-4 py-3 focus:border-primary focus:outline-none"
                    placeholder="jean@email.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-zinc-700 mb-1 flex items-center gap-1">
                    <Phone className="w-4 h-4" />
                    Téléphone *
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    className="w-full rounded-xl border border-zinc-300 px-4 py-3 focus:border-primary focus:outline-none"
                    placeholder="+212 6XX XXX XXX"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-1 flex items-center gap-1">
                  <MessageSquare className="w-4 h-4" />
                  Message (optionnel)
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={3}
                  className="w-full rounded-xl border border-zinc-300 px-4 py-3 focus:border-primary focus:outline-none"
                  placeholder="Informations complémentaires (allergies, demande spéciale...)"
                />
              </div>
            </div>
          </div>
        )}

        {/* Étape 3: Paiement */}
        {step === 3 && (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-charcoal flex items-center gap-2">
              <Verified className="w-5 h-5 text-primary" />
              Confirmation de votre réservation
            </h3>

            <div className="bg-light rounded-xl p-6">
              <h4 className="font-semibold text-charcoal mb-4">
                Récapitulatif de votre réservation
              </h4>

              <div className="space-y-3 text-sm mb-4">
                <div className="flex justify-between">
                  <span className="text-zinc-600">Activité:</span>
                  <span className="font-medium">
                    {selectedActivity?.activity}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-600">Date:</span>
                  <span className="font-medium">
                    {new Date(date).toLocaleDateString("fr-FR")}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-600">Heure:</span>
                  <span className="font-medium">{time}</span>
                </div>
                {/* <div className="flex justify-between">
                  <span className="text-zinc-600">Participants:</span>
                  <span className="font-medium">
                    {participants} personne(s)
                  </span>
                </div> */}
                <div className="flex justify-between">
                  <span className="text-zinc-600">Prix unitaire:</span>
                  <span className="font-medium">
                    {formatPrice(selectedActivity)}
                  </span>
                </div>
                <div className="flex justify-between pt-2 border-t font-bold">
                  <span className="text-charcoal">Total à payer:</span>
                  <span className="text-primary text-xl">{formattedTotal}</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Navigation buttons */}

        <div className="flex justify-between gap-3 mt-8 pt-6 border-t">
          {step > 1 ? (
            <button
              type="button"
              onClick={prevStep}
              className="px-6 py-3 border border-zinc-300 rounded-xl hover:border-primary transition-colors"
            >
              Retour
            </button>
          ) : (
            <Link
              href="/reservation"
              className="px-6 py-3 border border-zinc-300 rounded-xl hover:border-primary transition-colors"
            >
              Annuler
            </Link>
          )}

          {step < 3 ? (
            <button
              type="button"
              onClick={nextStep}
              className="flex-1 bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2"
            >
              Continuer
              <ChevronRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              type="button"
              onClick={(e) => {
                onSubmit(e);
              }}
              className="flex-1 bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2"
            >
              {loading
                ? "En cours de traitement..."
                : "Confirmer la réservation"}
              <CheckCircle className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Badges de confiance */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-6 text-xs text-zinc-500">
          <div className="flex items-center gap-1">
            <Shield className="w-3 h-3" />
            <span>Paiement sécurisé</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            <span>Annulation gratuite</span>
          </div>
          <div className="flex items-center gap-1">
            <Gift className="w-3 h-3" />
            <span>Meilleur prix garanti</span>
          </div>
        </div>
      </form>
    </div>
  );
}

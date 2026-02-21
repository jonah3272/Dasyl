import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Privacy() {
  const { t, language } = useLanguage();
  const isEs = language === "es";
  const privacyPath = isEs ? "/privacidad" : "/privacy";

  return (
    <main className="min-h-screen bg-gradient-to-br from-cozy-brown/5 via-warm-cream to-gentle-terracotta/10">
      <Helmet>
        <title>{t("privacy.title")} | Arturo Suman – Psilegconsultants</title>
        <meta name="description" content={`${t("privacy.intro")} ${t("privacy.contact")}: psic.suman@gmail.com, (507) 6550-9216.`} />
        <link rel="canonical" href={`https://arturosuman.com${privacyPath}/`} />
      </Helmet>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-28">
        <h1 className="text-3xl sm:text-4xl font-bold text-cozy-brown mb-2">
          {t("privacy.title")}
        </h1>
        <p className="text-sm text-cozy-brown/70 mb-8">
          {t("privacy.lastUpdate")}: 2025-02-10
        </p>

        <div className="space-y-6 text-cozy-brown/90">
          <p className="leading-relaxed">{t("privacy.intro")}</p>

          <section>
            <h2 className="text-xl font-semibold text-cozy-brown mb-2">{t("privacy.collect")}</h2>
            <p className="leading-relaxed">{t("privacy.collectText")}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-cozy-brown mb-2">{t("privacy.use")}</h2>
            <p className="leading-relaxed">{t("privacy.useText")}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-cozy-brown mb-2">{t("privacy.cookies")}</h2>
            <p className="leading-relaxed">{t("privacy.cookiesText")}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-cozy-brown mb-2">{t("privacy.contact")}</h2>
            <p className="leading-relaxed">{t("privacy.contactText")}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-cozy-brown mb-2">{t("privacy.rights")}</h2>
            <p className="leading-relaxed">{t("privacy.rightsText")}</p>
          </section>
        </div>

        <p className="mt-10">
          <Link to="/" className="text-gentle-terracotta font-medium hover:underline">
            ← {isEs ? "Volver al inicio" : "Back to home"}
          </Link>
        </p>
      </div>
    </main>
  );
}

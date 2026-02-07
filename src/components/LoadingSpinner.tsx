export default function LoadingSpinner() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-warm-cream via-natural-beige to-soft-sage/20">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-earth-clay mx-auto mb-4"></div>
        <p className="text-cozy-brown/70">Cargando...</p>
      </div>
    </div>
  );
}

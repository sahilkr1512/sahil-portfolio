export default function Loading() {
  return (
    <main className="loading-screen" role="status" aria-label="Loading portfolio">
      <div className="loading-core">
        <div className="loading-avatar"><span>SK</span></div>
        <p className="loading-title">Loading portfolio<span className="loading-dots">...</span></p>
        <p className="loading-subtitle">Preparing the experience</p>
        <div className="loading-track"><span /></div>
      </div>
    </main>
  );
}

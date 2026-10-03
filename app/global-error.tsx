"use client";

export default function GlobalError({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <html lang="en">
      <body>
        <main className="error-screen">
          <div className="error-card">
            <span className="error-code">500</span>
            <h1>Something broke in the matrix.</h1>
            <p>The portfolio hit an unexpected error. Try again or head back to the home page.</p>
            <div className="error-actions"><button onClick={() => reset()}>Try again</button><a href="/">Back home</a></div>
          </div>
        </main>
      </body>
    </html>
  );
}

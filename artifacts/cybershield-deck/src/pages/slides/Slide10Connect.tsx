export default function Slide10Connect() {
  return (
    <div
      className="w-screen h-screen overflow-hidden relative"
      style={{ backgroundColor: "#fafaf8", fontFamily: "'DM Sans', sans-serif", color: "#2d3748", display: "flex" }}
    >
      <div style={{ position: "absolute", top: "-15vh", right: "-5vw", width: "45vw", height: "45vw", backgroundColor: "#f4e8c1", borderRadius: "50%", zIndex: 0 }} />
      <div style={{ position: "absolute", bottom: "-10vh", left: "-10vw", width: "35vw", height: "35vw", backgroundColor: "#aed9e0", borderRadius: "50%", zIndex: 0 }} />
      <div style={{ position: "absolute", top: "20vh", left: "55vw", width: "8vw", height: "24vw", backgroundColor: "#ffbca6", borderRadius: "4vw", transform: "rotate(15deg)", zIndex: 1 }} />
      <div style={{ position: "absolute", bottom: "25vh", right: "20vw", width: "12vw", height: "12vw", backgroundColor: "#c8b6ff", borderRadius: "50% 50% 0 0", zIndex: 1 }} />
      <div style={{ position: "absolute", top: "40vh", right: "8vw", width: "4vw", height: "4vw", backgroundColor: "#aed9e0", borderRadius: "50%", zIndex: 1 }} />
      <div style={{ position: "absolute", bottom: "15vh", left: "45vw", width: "10vw", height: "2vw", background: "radial-gradient(circle, #2d3748 0.5vw, transparent 0.6vw)", backgroundSize: "2vw 2vw", zIndex: 1 }} />

      <div style={{ position: "relative", zIndex: 10, margin: "8vh 8vw", width: "calc(100vw - 16vw)", height: "calc(100vh - 16vh)", backgroundColor: "rgba(255,255,255,0.4)", backdropFilter: "blur(1vw)", WebkitBackdropFilter: "blur(1vw)", borderRadius: "2vw", display: "flex", flexDirection: "column", justifyContent: "space-between", boxSizing: "border-box", padding: "4vh 4vw" }}>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1vw" }}>
            <div style={{ width: "3vw", height: "3vw", backgroundColor: "#2d3748", borderRadius: "0.8vw", display: "flex", alignItems: "center", justifyContent: "center", color: "#ffffff", fontWeight: 800, fontSize: "1.5vw" }}>T</div>
            <div style={{ fontSize: "1.5vw", fontWeight: 700, color: "#2d3748" }}>Tekendra Bhandari</div>
          </div>
          <div style={{ backgroundColor: "#c8b6ff", padding: "0.8vh 1.5vw", borderRadius: "2vw", fontSize: "1vw", fontWeight: 700, color: "#2d3748" }}>Connect</div>
        </div>

        {/* Centered content */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center" }}>
          <div style={{ display: "inline-block", padding: "0.5vh 1.5vw", backgroundColor: "#2d3748", borderRadius: "2vw", fontSize: "1.2vw", fontWeight: 700, color: "#ffffff", marginBottom: "3vh", textTransform: "uppercase", letterSpacing: "0.1vw" }}>
            Open to collaborations &amp; internships
          </div>
          <h2 style={{ fontSize: "5.5vw", fontWeight: 800, color: "#1a202c", lineHeight: 1.1, margin: "0 0 2vh 0", letterSpacing: "-0.1vw", maxWidth: "60vw" } as React.CSSProperties}>
            Let's connect.
          </h2>
          <p style={{ fontSize: "2vw", color: "#4a5568", lineHeight: 1.4, margin: "0 0 5vh 0", maxWidth: "45vw" }}>
            Cybersecurity discussions, open-source projects, or just a good conversation about Linux.
          </p>

          <div style={{ display: "flex", gap: "3vw" }}>
            <div style={{ backgroundColor: "#ffffff", padding: "2.5vw 3vw", borderRadius: "1.5vw", boxShadow: "0 0.5vw 2vw rgba(0,0,0,0.06)", textAlign: "center", minWidth: "16vw" }}>
              <div style={{ width: "3vw", height: "3vw", backgroundColor: "#ffbca6", borderRadius: "50%", margin: "0 auto 1.5vh" }} />
              <div style={{ fontSize: "1.1vw", fontWeight: 700, color: "#718096", textTransform: "uppercase", letterSpacing: "0.08vw", marginBottom: "0.8vh" }}>Email</div>
              <div style={{ fontSize: "1.3vw", fontWeight: 500, color: "#2d3748" }}>er.tekendra.contact</div>
              <div style={{ fontSize: "1.3vw", fontWeight: 500, color: "#2d3748" }}>@gmail.com</div>
            </div>
            <div style={{ backgroundColor: "#2d3748", padding: "2.5vw 3vw", borderRadius: "1.5vw", boxShadow: "0 0.5vw 2vw rgba(0,0,0,0.1)", textAlign: "center", minWidth: "16vw" }}>
              <div style={{ width: "3vw", height: "3vw", backgroundColor: "#aed9e0", borderRadius: "50%", margin: "0 auto 1.5vh" }} />
              <div style={{ fontSize: "1.1vw", fontWeight: 700, color: "#aed9e0", textTransform: "uppercase", letterSpacing: "0.08vw", marginBottom: "0.8vh" }}>GitHub</div>
              <div style={{ fontSize: "1.3vw", fontWeight: 500, color: "#ffffff" }}>github.com/</div>
              <div style={{ fontSize: "1.3vw", fontWeight: 500, color: "#ffffff" }}>tekendraa7</div>
            </div>
            <div style={{ backgroundColor: "#ffffff", padding: "2.5vw 3vw", borderRadius: "1.5vw", boxShadow: "0 0.5vw 2vw rgba(0,0,0,0.06)", textAlign: "center", minWidth: "16vw" }}>
              <div style={{ width: "3vw", height: "3vw", backgroundColor: "#c8b6ff", borderRadius: "50%", margin: "0 auto 1.5vh" }} />
              <div style={{ fontSize: "1.1vw", fontWeight: 700, color: "#718096", textTransform: "uppercase", letterSpacing: "0.08vw", marginBottom: "0.8vh" }}>LinkedIn</div>
              <div style={{ fontSize: "1.3vw", fontWeight: 500, color: "#2d3748" }}>linkedin.com/in/</div>
              <div style={{ fontSize: "1.3vw", fontWeight: 500, color: "#2d3748" }}>tekendraa7</div>
            </div>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "3vh", borderTop: "0.2vw solid rgba(45,55,72,0.1)" }}>
          <div style={{ fontSize: "1.2vw", fontWeight: 500, color: "#718096" }}>Tekendra Bhandari · 2026</div>
          <div style={{ display: "flex", gap: "1vw" }}>
            <div style={{ width: "1vw", height: "1vw", borderRadius: "50%", backgroundColor: "#ffbca6" }} />
            <div style={{ width: "1vw", height: "1vw", borderRadius: "50%", backgroundColor: "#aed9e0" }} />
            <div style={{ width: "1vw", height: "1vw", borderRadius: "50%", backgroundColor: "#c8b6ff" }} />
          </div>
        </div>
      </div>
    </div>
  );
}

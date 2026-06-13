export default function Slide01Title() {
  return (
    <div
      className="w-screen h-screen overflow-hidden relative"
      style={{ backgroundColor: "#fafaf8", fontFamily: "'DM Sans', sans-serif", color: "#2d3748", display: "flex" }}
    >
      {/* Background blobs */}
      <div style={{ position: "absolute", top: "-15vh", right: "-5vw", width: "45vw", height: "45vw", backgroundColor: "#f4e8c1", borderRadius: "50%", zIndex: 0 }} />
      <div style={{ position: "absolute", bottom: "-10vh", left: "-10vw", width: "35vw", height: "35vw", backgroundColor: "#aed9e0", borderRadius: "50%", zIndex: 0 }} />
      <div style={{ position: "absolute", top: "20vh", left: "55vw", width: "8vw", height: "24vw", backgroundColor: "#ffbca6", borderRadius: "4vw", transform: "rotate(15deg)", zIndex: 1 }} />
      <div style={{ position: "absolute", bottom: "25vh", right: "20vw", width: "12vw", height: "12vw", backgroundColor: "#c8b6ff", borderRadius: "50% 50% 0 0", zIndex: 1 }} />
      <div style={{ position: "absolute", top: "40vh", right: "8vw", width: "4vw", height: "4vw", backgroundColor: "#aed9e0", borderRadius: "50%", zIndex: 1 }} />
      <div style={{ position: "absolute", bottom: "15vh", left: "45vw", width: "10vw", height: "2vw", background: "radial-gradient(circle, #2d3748 0.5vw, transparent 0.6vw)", backgroundSize: "2vw 2vw", zIndex: 1 }} />

      {/* Content card */}
      <div style={{ position: "relative", zIndex: 10, margin: "8vh 8vw", width: "calc(100vw - 16vw)", height: "calc(100vh - 16vh)", backgroundColor: "rgba(255,255,255,0.4)", backdropFilter: "blur(1vw)", WebkitBackdropFilter: "blur(1vw)", borderRadius: "2vw", display: "flex", flexDirection: "column", justifyContent: "space-between", boxSizing: "border-box" }}>

        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1vw" }}>
            <div style={{ width: "3vw", height: "3vw", backgroundColor: "#2d3748", borderRadius: "0.8vw", display: "flex", alignItems: "center", justifyContent: "center", color: "#ffffff", fontWeight: 800, fontSize: "1.5vw" }}>T</div>
            <div style={{ fontSize: "1.5vw", fontWeight: 700, color: "#2d3748" }}>Tekendra Bhandari</div>
          </div>
          <div style={{ backgroundColor: "#ffbca6", padding: "0.8vh 1.5vw", borderRadius: "2vw", fontSize: "1vw", fontWeight: 700, color: "#2d3748" }}>2026 Portfolio</div>
        </div>

        {/* Title content */}
        <div style={{ maxWidth: "52vw", marginBottom: "auto", marginTop: "10vh" }}>
          <div style={{ display: "inline-block", padding: "0.5vh 1vw", backgroundColor: "#e2e8f0", borderRadius: "0.5vw", fontSize: "1vw", fontWeight: 700, color: "#4a5568", marginBottom: "2vh", textTransform: "uppercase", letterSpacing: "0.1vw" }}>
            Computer Engineering Student
          </div>
          <h1 style={{ fontSize: "6.5vw", fontWeight: 800, lineHeight: 1.05, margin: 0, color: "#1a202c", letterSpacing: "-0.15vw", textWrap: "balance" } as React.CSSProperties}>
            Tekendra Bhandari
          </h1>
          <p style={{ fontSize: "2vw", fontWeight: 500, color: "#4a5568", marginTop: "2.5vh", lineHeight: 1.4, marginBottom: 0 }}>
            Cybersecurity Enthusiast · Builder · Learner
          </p>
          <p style={{ fontSize: "1.6vw", fontWeight: 400, color: "#718096", marginTop: "1vh", lineHeight: 1.4, marginBottom: 0 }}>
            Far Western University, Nepal
          </p>
        </div>

        {/* Footer */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "3vh", borderTop: "0.2vw solid rgba(45,55,72,0.1)" }}>
          <div style={{ fontSize: "1.2vw", fontWeight: 500, color: "#718096" }}>github.com/tekendraa7</div>
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

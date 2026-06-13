export default function Slide08Certificates() {
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
          <div style={{ backgroundColor: "#c8b6ff", padding: "0.8vh 1.5vw", borderRadius: "2vw", fontSize: "1vw", fontWeight: 700, color: "#2d3748" }}>Certificates</div>
        </div>

        <div style={{ flex: 1, display: "flex", flexDirection: "column", marginTop: "3vh" }}>
          <h2 style={{ fontSize: "3.5vw", fontWeight: 800, color: "#1a202c", lineHeight: 1.1, margin: "0 0 3.5vh 0", letterSpacing: "-0.05vw" }}>Certificates</h2>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "2.5vw", flex: 1 }}>

            <div style={{ backgroundColor: "#ffffff", padding: "3vw", borderRadius: "1.5vw", boxShadow: "0 0.5vw 2vw rgba(0,0,0,0.05)", display: "flex", flexDirection: "column", borderTop: "0.5vw solid #ffbca6" }}>
              <div style={{ fontSize: "1.1vw", fontWeight: 700, color: "#718096", textTransform: "uppercase", letterSpacing: "0.1vw", marginBottom: "2vh" }}>June 2026</div>
              <h3 style={{ fontSize: "1.8vw", fontWeight: 800, color: "#1a202c", margin: "0 0 1.5vh 0", lineHeight: 1.2 }}>Introduction to Bash</h3>
              <p style={{ fontSize: "1.3vw", color: "#4a5568", margin: "0 0 auto 0", lineHeight: 1.5 }}>Online Learning Platform</p>
              <div style={{ marginTop: "3vh", padding: "1vh 1.5vw", backgroundColor: "#f7f7f5", borderRadius: "0.8vw" }}>
                <span style={{ fontSize: "1.1vw", color: "#718096" }}>Credential #984317030</span>
              </div>
            </div>

            <div style={{ backgroundColor: "#2d3748", padding: "3vw", borderRadius: "1.5vw", boxShadow: "0 0.5vw 2vw rgba(0,0,0,0.1)", display: "flex", flexDirection: "column", borderTop: "0.5vw solid #aed9e0" }}>
              <div style={{ fontSize: "1.1vw", fontWeight: 700, color: "#aed9e0", textTransform: "uppercase", letterSpacing: "0.1vw", marginBottom: "2vh" }}>2026</div>
              <h3 style={{ fontSize: "1.8vw", fontWeight: 800, color: "#ffffff", margin: "0 0 1.5vh 0", lineHeight: 1.2 }}>Python for Cyber Security</h3>
              <p style={{ fontSize: "1.3vw", color: "#aed9e0", margin: "0 0 auto 0", lineHeight: 1.5 }}>Online Learning Platform</p>
              <div style={{ marginTop: "3vh", padding: "1vh 1.5vw", backgroundColor: "rgba(255,255,255,0.08)", borderRadius: "0.8vw" }}>
                <span style={{ fontSize: "1.1vw", color: "#718096" }}>In progress</span>
              </div>
            </div>

            <div style={{ backgroundColor: "#ffffff", padding: "3vw", borderRadius: "1.5vw", boxShadow: "0 0.5vw 2vw rgba(0,0,0,0.05)", display: "flex", flexDirection: "column", borderTop: "0.5vw solid #c8b6ff" }}>
              <div style={{ fontSize: "1.1vw", fontWeight: 700, color: "#718096", textTransform: "uppercase", letterSpacing: "0.1vw", marginBottom: "2vh" }}>January 2025</div>
              <h3 style={{ fontSize: "1.8vw", fontWeight: 800, color: "#1a202c", margin: "0 0 1.5vh 0", lineHeight: 1.2 }}>Introduction to Figma</h3>
              <p style={{ fontSize: "1.3vw", color: "#4a5568", margin: "0 0 auto 0", lineHeight: 1.5 }}>Design Course</p>
              <div style={{ marginTop: "3vh", padding: "1vh 1.5vw", backgroundColor: "#f7f7f5", borderRadius: "0.8vw" }}>
                <span style={{ fontSize: "1.1vw", color: "#718096" }}>Credential #7764775</span>
              </div>
            </div>

          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "2vh", borderTop: "0.2vw solid rgba(45,55,72,0.1)" }}>
          <div style={{ fontSize: "1.2vw", fontWeight: 500, color: "#718096" }}>Tekendra Bhandari</div>
          <div style={{ fontSize: "1.2vw", fontWeight: 700, color: "#2d3748" }}>08</div>
        </div>
      </div>
    </div>
  );
}

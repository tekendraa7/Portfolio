export default function Slide06Projects() {
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
          <div style={{ backgroundColor: "#aed9e0", padding: "0.8vh 1.5vw", borderRadius: "2vw", fontSize: "1vw", fontWeight: 700, color: "#2d3748" }}>Other Projects</div>
        </div>

        <div style={{ flex: 1, display: "flex", flexDirection: "column", marginTop: "3vh" }}>
          <h2 style={{ fontSize: "3.5vw", fontWeight: 800, color: "#1a202c", lineHeight: 1.1, margin: "0 0 3.5vh 0", letterSpacing: "-0.05vw" }}>Other Projects</h2>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "2.5vw", flex: 1 }}>

            <div style={{ backgroundColor: "#ffffff", padding: "2.5vw", borderRadius: "1.5vw", boxShadow: "0 0.5vw 2vw rgba(0,0,0,0.05)", display: "flex", flexDirection: "column" }}>
              <div style={{ width: "3.5vw", height: "3.5vw", backgroundColor: "#c8b6ff", borderRadius: "1vw", marginBottom: "2vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ width: "1.5vw", height: "1.5vw", backgroundColor: "#2d3748", borderRadius: "0.3vw" }} />
              </div>
              <h3 style={{ fontSize: "1.6vw", fontWeight: 700, margin: "0 0 1.5vh 0", color: "#1a202c" }}>CSC-FWU Website</h3>
              <p style={{ fontSize: "1.3vw", color: "#4a5568", margin: "0 0 2vh 0", lineHeight: 1.5, flex: 1 }}>Frontend for the official Cyber Security Club at Far Western University.</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5vw" }}>
                <span style={{ fontSize: "1.1vw", color: "#4a5568", backgroundColor: "#e2e8f0", padding: "0.3vh 0.8vw", borderRadius: "0.5vw" }}>HTML</span>
                <span style={{ fontSize: "1.1vw", color: "#4a5568", backgroundColor: "#e2e8f0", padding: "0.3vh 0.8vw", borderRadius: "0.5vw" }}>CSS</span>
                <span style={{ fontSize: "1.1vw", color: "#4a5568", backgroundColor: "#e2e8f0", padding: "0.3vh 0.8vw", borderRadius: "0.5vw" }}>React</span>
              </div>
            </div>

            <div style={{ backgroundColor: "#ffffff", padding: "2.5vw", borderRadius: "1.5vw", boxShadow: "0 0.5vw 2vw rgba(0,0,0,0.05)", display: "flex", flexDirection: "column" }}>
              <div style={{ width: "3.5vw", height: "3.5vw", backgroundColor: "#aed9e0", borderRadius: "1vw", marginBottom: "2vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ width: "0", height: "0", borderLeft: "0.8vw solid transparent", borderRight: "0.8vw solid transparent", borderBottom: "1.2vw solid #2d3748" }} />
              </div>
              <h3 style={{ fontSize: "1.6vw", fontWeight: 700, margin: "0 0 1.5vh 0", color: "#1a202c" }}>Network Traffic Analyzer</h3>
              <p style={{ fontSize: "1.3vw", color: "#4a5568", margin: "0 0 2vh 0", lineHeight: 1.5, flex: 1 }}>Python tool to capture and analyze packets, flagging potential security threats.</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5vw" }}>
                <span style={{ fontSize: "1.1vw", color: "#4a5568", backgroundColor: "#e2e8f0", padding: "0.3vh 0.8vw", borderRadius: "0.5vw" }}>Python</span>
                <span style={{ fontSize: "1.1vw", color: "#4a5568", backgroundColor: "#e2e8f0", padding: "0.3vh 0.8vw", borderRadius: "0.5vw" }}>Scapy</span>
              </div>
            </div>

            <div style={{ backgroundColor: "#2d3748", padding: "2.5vw", borderRadius: "1.5vw", boxShadow: "0 0.5vw 2vw rgba(0,0,0,0.1)", display: "flex", flexDirection: "column" }}>
              <div style={{ width: "3.5vw", height: "3.5vw", backgroundColor: "#ffbca6", borderRadius: "1vw", marginBottom: "2vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ width: "1.8vw", height: "1.8vw", backgroundColor: "#2d3748", borderRadius: "0.2vw" }} />
              </div>
              <h3 style={{ fontSize: "1.6vw", fontWeight: 700, margin: "0 0 1.5vh 0", color: "#ffffff" }}>Secure Encryption Utility</h3>
              <p style={{ fontSize: "1.3vw", color: "#aed9e0", margin: "0 0 2vh 0", lineHeight: 1.5, flex: 1 }}>CLI tool for AES-256 file encryption and decryption ensuring data confidentiality.</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5vw" }}>
                <span style={{ fontSize: "1.1vw", color: "#2d3748", backgroundColor: "#ffbca6", padding: "0.3vh 0.8vw", borderRadius: "0.5vw" }}>Python</span>
                <span style={{ fontSize: "1.1vw", color: "#2d3748", backgroundColor: "#aed9e0", padding: "0.3vh 0.8vw", borderRadius: "0.5vw" }}>AES-256</span>
              </div>
            </div>

          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "2vh", borderTop: "0.2vw solid rgba(45,55,72,0.1)" }}>
          <div style={{ fontSize: "1.2vw", fontWeight: 500, color: "#718096" }}>Tekendra Bhandari</div>
          <div style={{ fontSize: "1.2vw", fontWeight: 700, color: "#2d3748" }}>06</div>
        </div>
      </div>
    </div>
  );
}

export default function Slide05TechStack() {
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
          <div style={{ backgroundColor: "#f4e8c1", padding: "0.8vh 1.5vw", borderRadius: "2vw", fontSize: "1vw", fontWeight: 700, color: "#2d3748" }}>CyberShield</div>
        </div>

        <div style={{ flex: 1, display: "flex", flexDirection: "column", marginTop: "3vh" }}>
          <h2 style={{ fontSize: "3.5vw", fontWeight: 800, color: "#1a202c", lineHeight: 1.1, margin: "0 0 1vh 0", letterSpacing: "-0.05vw" }}>CyberShield: Tech Stack</h2>
          <p style={{ fontSize: "1.6vw", color: "#4a5568", margin: "0 0 3.5vh 0" }}>The tools and technologies powering the portfolio.</p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: "2vw", flex: 1 }}>

            <div style={{ backgroundColor: "#ffffff", padding: "2.5vw", borderRadius: "1.5vw", boxShadow: "0 0.5vw 2vw rgba(0,0,0,0.05)", display: "flex", flexDirection: "column" }}>
              <div style={{ width: "3vw", height: "3vw", backgroundColor: "#aed9e0", borderRadius: "50%", marginBottom: "2vh" }} />
              <h3 style={{ fontSize: "1.4vw", fontWeight: 700, margin: "0 0 1.5vh 0", color: "#2d3748" }}>Frontend</h3>
              <p style={{ fontSize: "1.2vw", color: "#718096", margin: 0, lineHeight: 1.7 }}>React + Vite</p>
              <p style={{ fontSize: "1.2vw", color: "#718096", margin: 0, lineHeight: 1.7 }}>TypeScript</p>
              <p style={{ fontSize: "1.2vw", color: "#718096", margin: 0, lineHeight: 1.7 }}>Tailwind CSS v4</p>
            </div>

            <div style={{ backgroundColor: "#ffffff", padding: "2.5vw", borderRadius: "1.5vw", boxShadow: "0 0.5vw 2vw rgba(0,0,0,0.05)", display: "flex", flexDirection: "column" }}>
              <div style={{ width: "3vw", height: "3vw", backgroundColor: "#f4e8c1", borderRadius: "50%", marginBottom: "2vh" }} />
              <h3 style={{ fontSize: "1.4vw", fontWeight: 700, margin: "0 0 1.5vh 0", color: "#2d3748" }}>Backend</h3>
              <p style={{ fontSize: "1.2vw", color: "#718096", margin: 0, lineHeight: 1.7 }}>Express 5</p>
              <p style={{ fontSize: "1.2vw", color: "#718096", margin: 0, lineHeight: 1.7 }}>Node.js 24</p>
              <p style={{ fontSize: "1.2vw", color: "#718096", margin: 0, lineHeight: 1.7 }}>TypeScript</p>
            </div>

            <div style={{ backgroundColor: "#2d3748", padding: "2.5vw", borderRadius: "1.5vw", boxShadow: "0 0.5vw 2vw rgba(0,0,0,0.1)", display: "flex", flexDirection: "column" }}>
              <div style={{ width: "3vw", height: "3vw", backgroundColor: "#ffbca6", borderRadius: "50%", marginBottom: "2vh" }} />
              <h3 style={{ fontSize: "1.4vw", fontWeight: 700, margin: "0 0 1.5vh 0", color: "#ffffff" }}>AI</h3>
              <p style={{ fontSize: "1.2vw", color: "#aed9e0", margin: 0, lineHeight: 1.7 }}>Gemini 2.0 Flash</p>
              <p style={{ fontSize: "1.2vw", color: "#aed9e0", margin: 0, lineHeight: 1.7 }}>Google Gen AI SDK</p>
              <p style={{ fontSize: "1.2vw", color: "#aed9e0", margin: 0, lineHeight: 1.7 }}>Contextual chat</p>
            </div>

            <div style={{ backgroundColor: "#ffffff", padding: "2.5vw", borderRadius: "1.5vw", boxShadow: "0 0.5vw 2vw rgba(0,0,0,0.05)", display: "flex", flexDirection: "column" }}>
              <div style={{ width: "3vw", height: "3vw", backgroundColor: "#c8b6ff", borderRadius: "50%", marginBottom: "2vh" }} />
              <h3 style={{ fontSize: "1.4vw", fontWeight: 700, margin: "0 0 1.5vh 0", color: "#2d3748" }}>Mobile</h3>
              <p style={{ fontSize: "1.2vw", color: "#718096", margin: 0, lineHeight: 1.7 }}>Expo React Native</p>
              <p style={{ fontSize: "1.2vw", color: "#718096", margin: 0, lineHeight: 1.7 }}>expo-router</p>
              <p style={{ fontSize: "1.2vw", color: "#718096", margin: 0, lineHeight: 1.7 }}>TypeScript</p>
            </div>

          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "2vh", borderTop: "0.2vw solid rgba(45,55,72,0.1)" }}>
          <div style={{ fontSize: "1.2vw", fontWeight: 500, color: "#718096" }}>Tekendra Bhandari</div>
          <div style={{ fontSize: "1.2vw", fontWeight: 700, color: "#2d3748" }}>05</div>
        </div>
      </div>
    </div>
  );
}

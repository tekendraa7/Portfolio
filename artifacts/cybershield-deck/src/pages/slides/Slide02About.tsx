export default function Slide02About() {
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
          <div style={{ backgroundColor: "#aed9e0", padding: "0.8vh 1.5vw", borderRadius: "2vw", fontSize: "1vw", fontWeight: 700, color: "#2d3748" }}>About Me</div>
        </div>

        <div style={{ display: "flex", flex: 1, marginTop: "4vh", gap: "4vw" }}>
          {/* Left */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <h2 style={{ fontSize: "4vw", fontWeight: 800, color: "#1a202c", lineHeight: 1.1, margin: "0 0 3vh 0", letterSpacing: "-0.05vw" }}>
              Passionate about security &amp; systems.
            </h2>
            <p style={{ fontSize: "1.8vw", color: "#4a5568", lineHeight: 1.5, margin: "0 0 3vh 0" }}>
              Currently in 3rd year of B.E. Computer Engineering at Far Western University, Nepal.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5vh" }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "1vw" }}>
                <div style={{ width: "1vw", height: "1vw", backgroundColor: "#ffbca6", borderRadius: "50%", marginTop: "0.4vh", flexShrink: 0 }} />
                <p style={{ fontSize: "1.6vw", color: "#4a5568", margin: 0, lineHeight: 1.4 }}>Focused on ethical hacking, secure software development, and system administration</p>
              </div>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "1vw" }}>
                <div style={{ width: "1vw", height: "1vw", backgroundColor: "#aed9e0", borderRadius: "50%", marginTop: "0.4vh", flexShrink: 0 }} />
                <p style={{ fontSize: "1.6vw", color: "#4a5568", margin: 0, lineHeight: 1.4 }}>Diving deep into cybersecurity, Linux internals, and networking</p>
              </div>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "1vw" }}>
                <div style={{ width: "1vw", height: "1vw", backgroundColor: "#c8b6ff", borderRadius: "50%", marginTop: "0.4vh", flexShrink: 0 }} />
                <p style={{ fontSize: "1.6vw", color: "#4a5568", margin: 0, lineHeight: 1.4 }}>Based in Dhangadhi, Kailali, Nepal</p>
              </div>
            </div>
          </div>

          {/* Right — decorative card */}
          <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ width: "26vw", height: "26vw", backgroundColor: "#f4e8c1", borderRadius: "2vw", transform: "rotate(-4deg)", position: "relative", boxShadow: "0 2vw 4vw rgba(0,0,0,0.08)" }}>
              <div style={{ position: "absolute", top: "2vw", left: "2vw", right: "2vw", bottom: "2vw", backgroundColor: "#ffffff", borderRadius: "1vw", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "1.5vw" }}>
                <div style={{ width: "6vw", height: "6vw", backgroundColor: "#2d3748", borderRadius: "1.2vw", display: "flex", alignItems: "center", justifyContent: "center", color: "#ffffff", fontWeight: 800, fontSize: "3vw" }}>T</div>
                <div style={{ fontSize: "1.6vw", fontWeight: 700, color: "#1a202c", textAlign: "center" }}>Computer Engineering</div>
                <div style={{ fontSize: "1.2vw", color: "#718096", textAlign: "center" }}>Far Western University</div>
              </div>
              <div style={{ position: "absolute", bottom: "-2vw", right: "-2vw", width: "8vw", height: "8vw", backgroundColor: "#ffbca6", borderRadius: "50%" }} />
            </div>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "2vh", borderTop: "0.2vw solid rgba(45,55,72,0.1)" }}>
          <div style={{ fontSize: "1.2vw", fontWeight: 500, color: "#718096" }}>Tekendra Bhandari</div>
          <div style={{ fontSize: "1.2vw", fontWeight: 700, color: "#2d3748" }}>02</div>
        </div>
      </div>
    </div>
  );
}

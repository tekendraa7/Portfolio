export default function Slide07Education() {
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
          <div style={{ backgroundColor: "#f4e8c1", padding: "0.8vh 1.5vw", borderRadius: "2vw", fontSize: "1vw", fontWeight: 700, color: "#2d3748" }}>Education</div>
        </div>

        <div style={{ flex: 1, display: "flex", gap: "5vw", marginTop: "4vh" }}>
          {/* Left: headline */}
          <div style={{ flex: "0 0 28vw", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <h2 style={{ fontSize: "4vw", fontWeight: 800, color: "#1a202c", lineHeight: 1.1, margin: "0 0 2.5vh 0", letterSpacing: "-0.05vw" }}>
              Education
            </h2>
            <p style={{ fontSize: "1.7vw", color: "#4a5568", lineHeight: 1.5, margin: 0 }}>
              Building a strong foundation in computer engineering and cybersecurity at Far Western University.
            </p>
          </div>

          {/* Right: timeline */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", gap: "3vh" }}>

            {/* Entry 1 — current */}
            <div style={{ display: "flex", gap: "2vw", alignItems: "flex-start" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
                <div style={{ width: "1.4vw", height: "1.4vw", backgroundColor: "#ffbca6", borderRadius: "50%", border: "0.3vw solid #2d3748" }} />
                <div style={{ width: "0.2vw", height: "6vh", backgroundColor: "#e2e8f0" }} />
              </div>
              <div style={{ backgroundColor: "#2d3748", padding: "2vw 2.5vw", borderRadius: "1.2vw", flex: 1, boxShadow: "0 0.5vw 2vw rgba(0,0,0,0.1)" }}>
                <div style={{ fontSize: "1.1vw", color: "#ffbca6", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1vw", marginBottom: "0.8vh" }}>2022 – Present</div>
                <div style={{ fontSize: "1.7vw", fontWeight: 700, color: "#ffffff", marginBottom: "0.5vh" }}>B.E. Computer Engineering</div>
                <div style={{ fontSize: "1.3vw", color: "#aed9e0" }}>Far Western University, School of Engineering, Mahendranagar</div>
              </div>
            </div>

            {/* Entry 2 */}
            <div style={{ display: "flex", gap: "2vw", alignItems: "flex-start" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
                <div style={{ width: "1.4vw", height: "1.4vw", backgroundColor: "#aed9e0", borderRadius: "50%", border: "0.3vw solid #4a5568" }} />
                <div style={{ width: "0.2vw", height: "6vh", backgroundColor: "#e2e8f0" }} />
              </div>
              <div style={{ backgroundColor: "#ffffff", padding: "2vw 2.5vw", borderRadius: "1.2vw", flex: 1, boxShadow: "0 0.5vw 1.5vw rgba(0,0,0,0.05)" }}>
                <div style={{ fontSize: "1.1vw", color: "#718096", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1vw", marginBottom: "0.8vh" }}>2019 – 2021</div>
                <div style={{ fontSize: "1.7vw", fontWeight: 700, color: "#1a202c", marginBottom: "0.5vh" }}>Higher Secondary (SLC)</div>
                <div style={{ fontSize: "1.3vw", color: "#4a5568" }}>Kailali Multiple Campus, Dhangadhi</div>
              </div>
            </div>

            {/* Entry 3 */}
            <div style={{ display: "flex", gap: "2vw", alignItems: "flex-start" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
                <div style={{ width: "1.4vw", height: "1.4vw", backgroundColor: "#c8b6ff", borderRadius: "50%", border: "0.3vw solid #4a5568" }} />
              </div>
              <div style={{ backgroundColor: "#ffffff", padding: "2vw 2.5vw", borderRadius: "1.2vw", flex: 1, boxShadow: "0 0.5vw 1.5vw rgba(0,0,0,0.05)" }}>
                <div style={{ fontSize: "1.1vw", color: "#718096", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1vw", marginBottom: "0.8vh" }}>Before 2019</div>
                <div style={{ fontSize: "1.7vw", fontWeight: 700, color: "#1a202c", marginBottom: "0.5vh" }}>Secondary Level Certificate</div>
                <div style={{ fontSize: "1.3vw", color: "#4a5568" }}>Shree Siddhanath Secondary School, Dhangadhi</div>
              </div>
            </div>

          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "2vh", borderTop: "0.2vw solid rgba(45,55,72,0.1)" }}>
          <div style={{ fontSize: "1.2vw", fontWeight: 500, color: "#718096" }}>Tekendra Bhandari</div>
          <div style={{ fontSize: "1.2vw", fontWeight: 700, color: "#2d3748" }}>07</div>
        </div>
      </div>
    </div>
  );
}

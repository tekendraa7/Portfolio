export default function Slide09Roadmap() {
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
          <div style={{ backgroundColor: "#ffbca6", padding: "0.8vh 1.5vw", borderRadius: "2vw", fontSize: "1vw", fontWeight: 700, color: "#2d3748" }}>Learning Roadmap</div>
        </div>

        <div style={{ flex: 1, display: "flex", flexDirection: "column", marginTop: "3vh" }}>
          <h2 style={{ fontSize: "3.2vw", fontWeight: 800, color: "#1a202c", lineHeight: 1.1, margin: "0 0 3vh 0", letterSpacing: "-0.05vw" }}>Learning Roadmap</h2>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2vw", flex: 1 }}>

            {/* Column 1 */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.8vh" }}>

              <div style={{ backgroundColor: "#2d3748", padding: "1.8vw 2vw", borderRadius: "1.2vw", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <div style={{ fontSize: "1vw", color: "#aed9e0", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08vw", marginBottom: "0.5vh" }}>Phase 1</div>
                  <div style={{ fontSize: "1.6vw", fontWeight: 700, color: "#ffffff" }}>Foundations</div>
                  <div style={{ fontSize: "1.1vw", color: "#718096", marginTop: "0.3vh" }}>Networking, Linux, Security concepts</div>
                </div>
                <div style={{ padding: "0.5vh 1.2vw", backgroundColor: "#aed9e0", borderRadius: "2vw", fontSize: "1vw", fontWeight: 700, color: "#1a202c", flexShrink: 0 }}>Completed</div>
              </div>

              <div style={{ backgroundColor: "#ffffff", padding: "1.8vw 2vw", borderRadius: "1.2vw", display: "flex", justifyContent: "space-between", alignItems: "center", boxShadow: "0 0.5vw 1.5vw rgba(0,0,0,0.05)" }}>
                <div>
                  <div style={{ fontSize: "1vw", color: "#718096", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08vw", marginBottom: "0.5vh" }}>Phase 2</div>
                  <div style={{ fontSize: "1.6vw", fontWeight: 700, color: "#1a202c" }}>Networking &amp; Core Security</div>
                  <div style={{ fontSize: "1.1vw", color: "#718096", marginTop: "0.3vh" }}>Firewalls, VPNs, SIEM, Vulnerabilities</div>
                </div>
                <div style={{ padding: "0.5vh 1.2vw", backgroundColor: "#ffbca6", borderRadius: "2vw", fontSize: "1vw", fontWeight: 700, color: "#1a202c", flexShrink: 0 }}>In Progress</div>
              </div>

              <div style={{ backgroundColor: "#ffffff", padding: "1.8vw 2vw", borderRadius: "1.2vw", display: "flex", justifyContent: "space-between", alignItems: "center", boxShadow: "0 0.5vw 1.5vw rgba(0,0,0,0.05)" }}>
                <div>
                  <div style={{ fontSize: "1vw", color: "#718096", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08vw", marginBottom: "0.5vh" }}>Phase 3</div>
                  <div style={{ fontSize: "1.6vw", fontWeight: 700, color: "#1a202c" }}>OS Deep Dive</div>
                  <div style={{ fontSize: "1.1vw", color: "#718096", marginTop: "0.3vh" }}>Linux internals, Windows security</div>
                </div>
                <div style={{ padding: "0.5vh 1.2vw", backgroundColor: "#e2e8f0", borderRadius: "2vw", fontSize: "1vw", fontWeight: 700, color: "#718096", flexShrink: 0 }}>Upcoming</div>
              </div>

            </div>

            {/* Column 2 */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.8vh" }}>

              <div style={{ backgroundColor: "#ffffff", padding: "1.8vw 2vw", borderRadius: "1.2vw", display: "flex", justifyContent: "space-between", alignItems: "center", boxShadow: "0 0.5vw 1.5vw rgba(0,0,0,0.05)" }}>
                <div>
                  <div style={{ fontSize: "1vw", color: "#718096", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08vw", marginBottom: "0.5vh" }}>Phase 4</div>
                  <div style={{ fontSize: "1.6vw", fontWeight: 700, color: "#1a202c" }}>Application Security</div>
                  <div style={{ fontSize: "1.1vw", color: "#718096", marginTop: "0.3vh" }}>OWASP Top 10, Burp Suite, XSS</div>
                </div>
                <div style={{ padding: "0.5vh 1.2vw", backgroundColor: "#e2e8f0", borderRadius: "2vw", fontSize: "1vw", fontWeight: 700, color: "#718096", flexShrink: 0 }}>Upcoming</div>
              </div>

              <div style={{ backgroundColor: "#ffffff", padding: "1.8vw 2vw", borderRadius: "1.2vw", display: "flex", justifyContent: "space-between", alignItems: "center", boxShadow: "0 0.5vw 1.5vw rgba(0,0,0,0.05)" }}>
                <div>
                  <div style={{ fontSize: "1vw", color: "#718096", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08vw", marginBottom: "0.5vh" }}>Phase 5</div>
                  <div style={{ fontSize: "1.6vw", fontWeight: 700, color: "#1a202c" }}>Cryptography</div>
                  <div style={{ fontSize: "1.1vw", color: "#718096", marginTop: "0.3vh" }}>TLS/SSL, PKI, Hash functions</div>
                </div>
                <div style={{ padding: "0.5vh 1.2vw", backgroundColor: "#e2e8f0", borderRadius: "2vw", fontSize: "1vw", fontWeight: 700, color: "#718096", flexShrink: 0 }}>Upcoming</div>
              </div>

              <div style={{ backgroundColor: "#f4e8c1", padding: "1.8vw 2vw", borderRadius: "1.2vw", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <div style={{ fontSize: "1vw", color: "#718096", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08vw", marginBottom: "0.5vh" }}>Phase 6</div>
                  <div style={{ fontSize: "1.6vw", fontWeight: 700, color: "#1a202c" }}>Penetration Testing</div>
                  <div style={{ fontSize: "1.1vw", color: "#718096", marginTop: "0.3vh" }}>Kali Linux, Metasploit, CTFs</div>
                </div>
                <div style={{ padding: "0.5vh 1.2vw", backgroundColor: "#e2e8f0", borderRadius: "2vw", fontSize: "1vw", fontWeight: 700, color: "#718096", flexShrink: 0 }}>Upcoming</div>
              </div>

            </div>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "2vh", borderTop: "0.2vw solid rgba(45,55,72,0.1)" }}>
          <div style={{ fontSize: "1.2vw", fontWeight: 500, color: "#718096" }}>Tekendra Bhandari</div>
          <div style={{ fontSize: "1.2vw", fontWeight: 700, color: "#2d3748" }}>09</div>
        </div>
      </div>
    </div>
  );
}

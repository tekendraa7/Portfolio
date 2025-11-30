
'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export function CyberBackground() {
  const mountRef = useRef<HTMLDivElement>(null);
  const matrixCanvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!mountRef.current || !matrixCanvasRef.current) return;

    const container = mountRef.current;
    const matrixCanvas = matrixCanvasRef.current;

    // --- Three.js Scene Setup ---
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 2000);
    camera.position.set(0, 0, 120);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    container.appendChild(renderer.domElement);

    // Parameters
    const isMobile = /Mobi|Android/i.test(navigator.userAgent) || window.innerWidth < 720;
    const particleCount = isMobile ? 120 : 420;
    const areaSize = 220;
    const connectionDistance = isMobile ? 28 : 48;

    // Particle geometry
    const positions = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * areaSize; // x
      positions[i3 + 1] = (Math.random() - 0.5) * areaSize * 0.6; // y
      positions[i3 + 2] = (Math.random() - 0.5) * areaSize * 0.6; // z

      velocities[i3] = (Math.random() - 0.5) * 0.22;
      velocities[i3 + 1] = (Math.random() - 0.5) * 0.22;
      velocities[i3 + 2] = (Math.random() - 0.5) * 0.22;

      sizes[i] = Math.random() * 1.8 + 0.5;
    }

    const sprite = new THREE.TextureLoader().load(
      'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64"><defs><radialGradient id="g"><stop offset="0" stop-color="white" stop-opacity="1"/><stop offset="0.55" stop-color="%2307a6ff" stop-opacity="0.85"/><stop offset="1" stop-color="%23000000" stop-opacity="0"/></radialGradient></defs><rect width="100%" height="100%" fill="black" /><circle cx="32" cy="32" r="20" fill="url(%23g)"/></svg>'
    );

    const pointsGeo = new THREE.BufferGeometry();
    pointsGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    pointsGeo.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    const pointsMat = new THREE.PointsMaterial({
      size: 2.8,
      map: sprite,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      color: new THREE.Color(0x42d6ff),
    });

    const points = new THREE.Points(pointsGeo, pointsMat);
    scene.add(points);

    // Lines geometry
    const maxConnections = particleCount * 6;
    const linePositions = new Float32Array(maxConnections * 2 * 3);
    const lineColors = new Float32Array(maxConnections * 2 * 3);
    const lineGeo = new THREE.BufferGeometry();
    lineGeo.setAttribute('position', new THREE.BufferAttribute(linePositions, 3).setUsage(THREE.DynamicDrawUsage));
    lineGeo.setAttribute('color', new THREE.BufferAttribute(lineColors, 3).setUsage(THREE.DynamicDrawUsage));

    const lineMat = new THREE.LineBasicMaterial({ vertexColors: true, transparent: true, opacity: 0.9, blending: THREE.AdditiveBlending });
    const lineSegments = new THREE.LineSegments(lineGeo, lineMat);
    scene.add(lineSegments);
    
    // Hex grid
    const hexGeo = new THREE.CircleGeometry(1, 6);
    const hexMat = new THREE.MeshBasicMaterial({ color: 0x063b5a, transparent: true, opacity: 0.03, side: THREE.DoubleSide });
    const hexGroup = new THREE.Group();
    for (let x = -10; x <= 10; x += 1.6) {
      for (let y = -6; y <= 6; y += 1.6) {
        const m = new THREE.Mesh(hexGeo, hexMat);
        m.position.set(x * 12, y * 8 + (x % 2 ? 4 : 0), -60);
        m.rotation.z = Math.random() * Math.PI;
        const s = 6 + Math.random() * 8;
        m.scale.setScalar(s);
        hexGroup.add(m);
      }
    }
    scene.add(hexGroup);

    // Mouse interaction
    const mouse = new THREE.Vector2(9999, 9999);
    const handlePointerMove = (e: PointerEvent) => {
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('pointermove', handlePointerMove);

    // Resize handler
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      matrixCanvas.width = window.innerWidth;
      matrixCanvas.height = window.innerHeight;
    };
    window.addEventListener('resize', onResize, { passive: true });
    onResize();

    // Matrix overlay
    const mctx = matrixCanvas.getContext('2d');
    const fontSize = 14;
    const columns = Math.floor(window.innerWidth / fontSize);
    const drops = new Array(columns).fill(0).map(() => Math.random() * window.innerHeight);

    function drawMatrix() {
        if (!mctx) return;
        mctx.clearRect(0, 0, matrixCanvas.width, matrixCanvas.height);
        mctx.font = fontSize + 'px monospace';
        for (let i = 0; i < columns; i++) {
            const x = i * fontSize;
            const y = drops[i] * fontSize;
            const char = String.fromCharCode(0x30a0 + (Math.random() * 96) | 0);
            mctx.fillStyle = 'rgba(20,130,255,0.12)';
            mctx.fillText(char, x, y);
            drops[i] += 0.02 + Math.random() * 0.8;
            if (drops[i] * fontSize > matrixCanvas.height) drops[i] = 0;
        }
    }

    // Animation loop
    let lastTime = performance.now();
    let animationFrameId: number;
    const animate = (now: number) => {
      animationFrameId = requestAnimationFrame(animate);
      const dt = Math.min(0.05, (now - lastTime) / 1000);
      lastTime = now;

      // Update particles
      const posAttr = pointsGeo.getAttribute('position') as THREE.BufferAttribute;
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        positions[i3] += velocities[i3] * (1 + Math.sin(now * 0.0009 + i) * 0.2);
        positions[i3 + 1] += velocities[i3 + 1] * (1 + Math.cos(now * 0.0007 + i) * 0.2);
        positions[i3 + 2] += velocities[i3 + 2] * (1 + Math.sin(now * 0.0013 + i) * 0.2);

        if (positions[i3] > areaSize / 2 || positions[i3] < -areaSize / 2) velocities[i3] *= -1;
        if (positions[i3 + 1] > areaSize / 2 || positions[i3 + 1] < -areaSize / 2) velocities[i3 + 1] *= -1;
        if (positions[i3 + 2] > areaSize / 2 || positions[i3 + 2] < -areaSize / 2) velocities[i3 + 2] *= -1;
        
        if(mouse.x < 9998){
          const vector = new THREE.Vector3(mouse.x, mouse.y, 0.5).unproject(camera);
          const dir = vector.sub(camera.position).normalize();
          const distance = -camera.position.z / dir.z;
          const mousePos = camera.position.clone().add(dir.multiplyScalar(distance));
          const dx = mousePos.x - positions[i3];
          const dy = mousePos.y - positions[i3+1];
          const dz = mousePos.z - positions[i3+2];
          const dist = Math.sqrt(dx*dx + dy*dy + dz*dz) + 0.0001;
          const attraction = Math.min(120 / (dist*dist), 0.12);
          velocities[i3] += dx * attraction * dt;
          velocities[i3+1] += dy * attraction * dt;
          velocities[i3+2] += dz * attraction * dt;
        }

        posAttr.array[i3] = positions[i3];
        posAttr.array[i3 + 1] = positions[i3 + 1];
        posAttr.array[i3 + 2] = positions[i3 + 2];
      }
      posAttr.needsUpdate = true;

      // Update lines
      let ptr = 0;
      const linePosAttr = lineGeo.getAttribute('position') as THREE.BufferAttribute;
      const lineColAttr = lineGeo.getAttribute('color') as THREE.BufferAttribute;
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        for (let j = i + 1; j < particleCount; j++) {
          const j3 = j * 3;
          const dx = positions[i3] - positions[j3];
          const dy = positions[i3 + 1] - positions[j3 + 1];
          const dz = positions[i3 + 2] - positions[j3 + 2];
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
          if (dist < connectionDistance) {
            if (ptr < maxConnections) {
              const lp = ptr * 6;
              linePositions[lp] = positions[i3];
              linePositions[lp + 1] = positions[i3 + 1];
              linePositions[lp + 2] = positions[i3 + 2];
              linePositions[lp + 3] = positions[j3];
              linePositions[lp + 4] = positions[j3 + 1];
              linePositions[lp + 5] = positions[j3 + 2];

              const alpha = 1 - dist / connectionDistance;
              const cidx = ptr * 6;
              const colR = 0.2 + 0.8 * alpha;
              const colG = 0.9 * (0.35 + 0.65 * alpha);
              const colB = 1.0;
              lineColors[cidx] = colR; lineColors[cidx + 1] = colG; lineColors[cidx + 2] = colB;
              lineColors[cidx + 3] = colR; lineColors[cidx + 4] = colG; lineColors[cidx + 5] = colB;
              ptr++;
            }
          }
        }
      }
      
      for(let k=ptr;k<maxConnections;k++){
        const lp = k*6; linePositions[lp]=linePositions[lp+1]=linePositions[lp+2]=0; linePositions[lp+3]=linePositions[lp+4]=linePositions[lp+5]=0;
        const cidx = k*6; lineColors[cidx]=lineColors[cidx+1]=lineColors[cidx+2]=0; lineColors[cidx+3]=lineColors[cidx+4]=lineColors[cidx+5]=0;
      }

      linePosAttr.needsUpdate = true;
      lineColAttr.needsUpdate = true;
      
      hexGroup.rotation.z += 0.0008;
      hexGroup.rotation.y += 0.0002;
      
      if(mouse.x < 9998){
        camera.position.x += (mouse.x * 30 - camera.position.x) * 0.02;
        camera.position.y += (mouse.y * 18 - camera.position.y) * 0.02;
        camera.lookAt(scene.position);
      } else {
        camera.position.x *= 0.98; camera.position.y *= 0.98; camera.lookAt(scene.position);
      }

      renderer.render(scene, camera);
      if (Math.random() < 0.65) drawMatrix();
    };

    animate(performance.now());

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('pointermove', handlePointerMove);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      // Dispose of Three.js objects
      scene.traverse(object => {
        if (object instanceof THREE.Mesh) {
          if (object.geometry) object.geometry.dispose();
          if (object.material) {
             if (Array.isArray(object.material)) {
                object.material.forEach(material => material.dispose());
             } else {
                object.material.dispose();
             }
          }
        }
      });
      pointsGeo.dispose();
      pointsMat.dispose();
      lineGeo.dispose();
      lineMat.dispose();
      sprite.dispose();
      hexGeo.dispose();
      hexMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <>
      <div id="bg-root" ref={mountRef}></div>
      <canvas id="matrix" ref={matrixCanvasRef}></canvas>
    </>
  );
}

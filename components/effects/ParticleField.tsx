// # components/effects/ParticleField.tsx
"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export function ParticleField() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const timer = new THREE.Timer();
    timer.connect(document);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 1000);
    camera.position.z = 8;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const mouse = { x: 0, y: 0 };

    const count = 2000;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 20;
      positions[i3 + 1] = (Math.random() - 0.5) * 20;
      positions[i3 + 2] = (Math.random() - 0.5) * 20;

      const colorChoice = Math.random();
      if (colorChoice < 0.33) {
        colors[i3] = 0.4 + Math.random() * 0.2;
        colors[i3 + 1] = 0.3 + Math.random() * 0.2;
        colors[i3 + 2] = 0.9 + Math.random() * 0.1;
      } else if (colorChoice < 0.66) {
        colors[i3] = 0.6 + Math.random() * 0.2;
        colors[i3 + 1] = 0.2 + Math.random() * 0.2;
        colors[i3 + 2] = 0.8 + Math.random() * 0.2;
      } else {
        colors[i3] = 0.9 + Math.random() * 0.1;
        colors[i3 + 1] = 0.3 + Math.random() * 0.2;
        colors[i3 + 2] = 0.5 + Math.random() * 0.2;
      }
    }

    const particleGeom = new THREE.BufferGeometry();
    particleGeom.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    particleGeom.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.03,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      sizeAttenuation: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particleGeom, particleMat);
    scene.add(particles);

    const linePositions = new Float32Array(300 * 3 * 2);
    for (let i = 0; i < 300; i++) {
      const i6 = i * 6;
      linePositions[i6] = (Math.random() - 0.5) * 15;
      linePositions[i6 + 1] = (Math.random() - 0.5) * 15;
      linePositions[i6 + 2] = (Math.random() - 0.5) * 15;
      linePositions[i6 + 3] = (Math.random() - 0.5) * 15;
      linePositions[i6 + 4] = (Math.random() - 0.5) * 15;
      linePositions[i6 + 5] = (Math.random() - 0.5) * 15;
    }

    const lineGeom = new THREE.BufferGeometry();
    lineGeom.setAttribute("position", new THREE.BufferAttribute(linePositions, 3));

    const lineMat = new THREE.LineBasicMaterial({
      color: 0x6366f1,
      transparent: true,
      opacity: 0.1,
    });

    const lines = new THREE.LineSegments(lineGeom, lineMat);
    scene.add(lines);

    scene.add(new THREE.AmbientLight(0xffffff, 0.5));

    container.appendChild(renderer.domElement);

    const resize = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      if (w === 0 || h === 0) return;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h, false);
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(container);

    const onMove = (e: PointerEvent) => {
      const rect = renderer.domElement.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
    };

    renderer.domElement.addEventListener("pointermove", onMove);

    let raf = 0;
    const animate = (timestamp?: number) => {
      timer.update(timestamp);

      const time = timer.getElapsed();

      lines.rotation.x = time * 0.01;
      lines.rotation.y = time * 0.015;

      particles.rotation.x = time * 0.02;
      particles.rotation.y = time * 0.03;

      const targetX = (mouse.x * Math.PI) / 10;
      const targetY = (mouse.y * Math.PI) / 10;
      particles.rotation.x += (targetY - particles.rotation.x) * 0.02;
      particles.rotation.y += (targetX - particles.rotation.y) * 0.02;

      renderer.render(scene, camera);

      raf = requestAnimationFrame(animate);
    };

    raf = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      renderer.domElement.removeEventListener("pointermove", onMove);
      timer.dispose();
      particleGeom.dispose();
      particleMat.dispose();
      lineGeom.dispose();
      lineMat.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 -z-10 [&_canvas]:block [&_canvas]:h-full [&_canvas]:w-full" />
  );
}

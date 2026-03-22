/* ============================================================
   js/threejs-bg.js
   Three.js animated particle field + floating wireframe shapes
   ✏️  You can tweak particle count (N), shape count, colors
============================================================ */

(function initThree() {
  try {
    const canvas = document.getElementById("bgc");
    const R = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    R.setPixelRatio(Math.min(devicePixelRatio, 2));
    R.setSize(innerWidth, innerHeight);

    const S = new THREE.Scene();
    const C = new THREE.PerspectiveCamera(65, innerWidth / innerHeight, 0.1, 1000);
    C.position.z = 55;

    /* ── Particle cloud ──────────────────────────────────── */
    const N  = 1500;                          /* ✏️ particle count */
    const PA = new Float32Array(N * 3);       /* positions */
    const CA = new Float32Array(N * 3);       /* colors    */

    for (let i = 0; i < N; i++) {
      PA[i * 3]     = (Math.random() - 0.5) * 220;
      PA[i * 3 + 1] = (Math.random() - 0.5) * 220;
      PA[i * 3 + 2] = (Math.random() - 0.5) * 120;

      const r = Math.random();
      if (r < 0.4) {
        /* blue  */ CA[i*3]=0.30; CA[i*3+1]=0.55; CA[i*3+2]=1.00;
      } else if (r < 0.7) {
        /* purple*/ CA[i*3]=0.66; CA[i*3+1]=0.33; CA[i*3+2]=0.97;
      } else {
        /* teal  */ CA[i*3]=0.02; CA[i*3+1]=0.84; CA[i*3+2]=0.63;
      }
    }

    const pg = new THREE.BufferGeometry();
    pg.setAttribute("position", new THREE.BufferAttribute(PA, 3));
    pg.setAttribute("color",    new THREE.BufferAttribute(CA, 3));

    const pm = new THREE.PointsMaterial({
      size:           0.45,       /* ✏️ particle size */
      vertexColors:   true,
      transparent:    true,
      opacity:        0.55,       /* ✏️ particle opacity */
      sizeAttenuation:true,
    });

    S.add(new THREE.Points(pg, pm));

    /* ── Floating wireframe shapes ───────────────────────── */
    const shapes = [];
    const SHAPE_GEOS = [
      new THREE.IcosahedronGeometry(2.2, 0),
      new THREE.OctahedronGeometry(1.8, 0),
      new THREE.TetrahedronGeometry(2.0, 0),
    ];
    const SHAPE_COLORS = [0x4f8eff, 0xa855f7, 0x06d6a0]; /* blue, purple, teal */

    for (let i = 0; i < 10; i++) {           /* ✏️ shape count */
      const mat  = new THREE.MeshBasicMaterial({
        color:      SHAPE_COLORS[i % 3],
        wireframe:  true,
        transparent:true,
        opacity:    0.13,                    /* ✏️ shape opacity */
      });
      const mesh = new THREE.Mesh(SHAPE_GEOS[i % 3], mat);
      mesh.position.set(
        (Math.random() - 0.5) * 90,
        (Math.random() - 0.5) * 70,
        (Math.random() - 0.5) * 40 - 15
      );
      mesh.userData = {
        rx: 0.002 + Math.random() * 0.004,   /* rotation speed X */
        ry: 0.001 + Math.random() * 0.004,   /* rotation speed Y */
        fo: Math.random() * Math.PI * 2,     /* float phase offset */
      };
      shapes.push(mesh);
      S.add(mesh);
    }

    /* ── Mouse parallax ──────────────────────────────────── */
    const mouse = { x: 0, y: 0 };
    document.addEventListener("mousemove", (e) => {
      mouse.x = (e.clientX / innerWidth  - 0.5) * 0.6;
      mouse.y = (e.clientY / innerHeight - 0.5) * 0.4;
    });

    /* ── Resize handler ──────────────────────────────────── */
    addEventListener("resize", () => {
      C.aspect = innerWidth / innerHeight;
      C.updateProjectionMatrix();
      R.setSize(innerWidth, innerHeight);
    });

    /* ── Animation loop ──────────────────────────────────── */
    let t = 0;
    (function loop() {
      requestAnimationFrame(loop);
      t += 0.005;

      /* Camera follows mouse (smooth) */
      C.position.x += (mouse.x * 12 - C.position.x) * 0.025;
      C.position.y += (-mouse.y * 8  - C.position.y) * 0.025;

      /* Slow scene rotation */
      S.rotation.y = t * 0.03;

      /* Float and spin each shape */
      shapes.forEach((s) => {
        s.rotation.x += s.userData.rx;
        s.rotation.y += s.userData.ry;
        s.position.y += Math.sin(t + s.userData.fo) * 0.012;
      });

      R.render(S, C);
    })();

  } catch (err) {
    /* Three.js not available or WebGL blocked — silently skip */
    console.warn("Three.js background disabled:", err.message);
  }
})();

// ═══════════ SMOOTH SCROLL ═══════════
// Solo en desktop (no afecta touch/móvil)
if (window.matchMedia("(pointer: fine)").matches) {
  let currentY = window.scrollY;
  let targetY = window.scrollY;
  const ease = 0.09; //VELOCIDAD DEL SCROLL
  let animating = false;

  window.addEventListener("wheel", (e) => {
    e.preventDefault();
    targetY += e.deltaY * 1.2;
    targetY = Math.max(0, Math.min(targetY, document.body.scrollHeight - window.innerHeight));
    if (!animating) animate();
  }, { passive: false });

  function animate() {
    animating = true;
    const diff = targetY - currentY;

    if (Math.abs(diff) < 0.5) {
      currentY = targetY;
      animating = false;
      return;
    }

    currentY += diff * ease;
    window.scrollTo(0, currentY);
    requestAnimationFrame(animate);
  }
}
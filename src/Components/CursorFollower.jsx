import { useEffect, useRef } from "react";

function CursorFollower() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;

    // Disable on mobile
    if (window.innerWidth <= 768) {
      dot.style.display = "none";
      ring.style.display = "none";
      return;
    }

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;

    const moveMouse = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      dot.style.left = mouseX + "px";
      dot.style.top = mouseY + "px";
    };

    // Smooth follow animation
    const animate = () => {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;

      ring.style.left = ringX + "px";
      ring.style.top = ringY + "px";

      requestAnimationFrame(animate);
    };

    animate();
    window.addEventListener("mousemove", moveMouse);

    // Hover grow
    const grow = () => {
      ring.classList.add("scale-150", "border-red-500");
    };

    const shrink = () => {
      ring.classList.remove("scale-150", "border-red-500");
    };

    const pulse = () => {
      ring.classList.add("scale-75");
      setTimeout(() => {
        ring.classList.remove("scale-75");
      }, 150);
    };

    const hoverElements = document.querySelectorAll("a, button");
    hoverElements.forEach((el) => {
      el.addEventListener("mouseenter", grow);
      el.addEventListener("mouseleave", shrink);
      el.addEventListener("click", pulse);
    });

    return () => {
      window.removeEventListener("mousemove", moveMouse);
    };
  }, []);

  return (
    <>
      {/* Inner Dot */}
      <div
        ref={dotRef}
        className="fixed w-2 h-2 bg-red-500 rounded-full pointer-events-none z-[9999]"
        style={{ left: 0, top: 0 }}
      />

      {/* Outer Ring */}
      <div
        ref={ringRef}
        className="fixed w-8 h-8 border border-red-400 rounded-full pointer-events-none
        transition-transform duration-200 ease-out z-[9998]"
        style={{ left: 0, top: 0 }}
      />
    </>
  );
}

export default CursorFollower;
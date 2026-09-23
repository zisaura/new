document.addEventListener("DOMContentLoaded", () => {
  const t = document.querySelector(".menu-toggle");
  const n = document.querySelector(".nav");

  t?.addEventListener("click", () => {
    const o = n.classList.toggle("open");
    t.setAttribute("aria-expanded", String(o));
  });

  n?.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      n.classList.remove("open");
      t?.setAttribute("aria-expanded", "false");
    })
  );

  const year = document.getElementById("year");
  if (year) {
    year.textContent = new Date().getFullYear();
  }
});

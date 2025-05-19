---
title: "Galería"
---

# Galería

<section class="gallery">
  {% assign fotos = "foto1,foto2,foto3,foto4,foto5,foto6" | split: "," %}
  {% for f in fotos %}
    <figure>
      <a
        href="{{ '/images/' | relative_url }}{{ f }}-600.jpeg"
        class="lightbox-link">
        <img
          src="{{ '/images/' | relative_url }}{{ f }}-600.jpeg"
          loading="lazy"
          alt="Foto {{ forloop.index }}">
      </a>
    </figure>
  {% endfor %}
</section>

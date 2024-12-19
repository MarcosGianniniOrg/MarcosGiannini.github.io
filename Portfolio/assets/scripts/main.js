function smoothScroll(target, duration) {
    const targetPosition = target.getBoundingClientRect().top + window.scrollY;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    let startTime = null;

    function animation(currentTime) {
        if (!startTime) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    // Easing function (Ease In Out Quad)
    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        
        if (target) {
            let offset = 0;  // Desplazamiento adicional por defecto
            
            // Personaliza sólo para "Projects"
            if (this.getAttribute("href") === "#projects") {
                offset = 50;  // Desplaza 50px adicionales
            }

            // Calcula la nueva posición teniendo en cuenta el offset
            const targetPosition = target.getBoundingClientRect().top + window.scrollY + offset;
            smoothScrollTo(targetPosition, 1000);  // Desplaza en 1 segundo
        }
    });
});

function smoothScrollTo(targetPosition, duration) {
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    let startTime = null;

    function animation(currentTime) {
        if (!startTime) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
}

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");

    // Función para mostrar modal dinámico
    function showDynamicModal(title, message, type = "success") {
        // Elimina cualquier modal previo
        const existingModal = document.getElementById("dynamic-modal");
        if (existingModal) existingModal.remove();

        // Crea el modal dinámico
        const modal = document.createElement("div");
        modal.id = "dynamic-modal";
        modal.style.cssText = `
            display: flex; justify-content: center; align-items: center;
            position: fixed; top: 0; left: 0; width: 100%; height: 100%;
            background: rgba(0, 0, 0, 0.6); z-index: 9999; animation: fadeIn 0.5s ease;
        `;

        modal.innerHTML = `
            <div style="
                background: ${type === "success" ? "#e8f5e9" : "#ffebee"};
                color: ${type === "success" ? "#388e3c" : "#d32f2f"};
                padding: 2rem; border-radius: 10px; text-align: center; 
                box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3); max-width: 400px;
                animation: slideIn 0.5s ease;
            ">
                <h2>${title}</h2>
                <p>${message}</p>
                <button id="close-modal" style="
                    margin-top: 1rem; padding: 0.8rem 1.5rem; background: ${type === "success" ? "#4caf50" : "#f44336"};
                    color: white; border: none; border-radius: 5px; cursor: pointer; font-size: 1rem;
                ">Close</button>
            </div>
        `;

        document.body.appendChild(modal);

        // Evento para cerrar el modal
        document.getElementById("close-modal").addEventListener("click", () => {
            modal.remove();
        });
    }

    // Evento Submit con Fetch
    form.addEventListener("submit", async function (e) {
        e.preventDefault();

        const formData = new FormData(form);

        try {
            const response = await fetch(form.action, {
                method: "POST",
                body: formData,
                headers: { "Accept": "application/json" }
            });

            if (response.ok) {
                showDynamicModal(
                    "Message Sent! ✅", 
                    "Your message has been successfully sent. I will get back to you soon. Thank you for reaching out!", 
                    "success"
                );
                
                form.reset();
            } else {
                throw new Error("Error al enviar el formulario.");
            }
        } catch (error) {
            showDynamicModal(
                "Error 🚧", 
                "There was a problem sending your message. Please try again later.", 
                "error"
            );          
        }
    });
});

// Detecta y muestra elementos al hacer scroll
function handleScrollReveal() {
    const reveals = document.querySelectorAll(".reveal");
    
    reveals.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const revealPoint = window.innerHeight / 1.2; 
        
        if (elementTop < revealPoint) {
            element.classList.add("visible");
        } else {
            element.classList.remove("visible");
        }
    });
}

window.addEventListener("scroll", handleScrollReveal);
document.addEventListener("DOMContentLoaded", handleScrollReveal);

document.addEventListener("DOMContentLoaded", () => {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const projectCards = document.querySelectorAll(".project-card");

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            const filterCategory = button.getAttribute("data-filter");

            projectCards.forEach(card => {
                const cardCategory = card.getAttribute("data-category");

                if (filterCategory === "all" || cardCategory === filterCategory) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }
            });

            // Estilo activo para el botón seleccionado
            filterButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const heroSection = document.querySelector("#hero-section");
  
    if (heroSection) {
      let offset = 0;
  
      // Función para animar el fondo
      const animateBackground = () => {
        offset += 0.1; // Velocidad del movimiento (ajustable)
        heroSection.style.backgroundPosition = `50% ${offset}%`; // Movimiento vertical
        requestAnimationFrame(animateBackground); // Loop continuo
      };
  
      // Inicia la animación
      heroSection.style.backgroundSize = "200%"; // Asegura espacio suficiente para el movimiento
      heroSection.style.backgroundAttachment = "fixed"; // Fija el fondo para parallax
      animateBackground();
    }
  });
  
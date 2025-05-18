      const unitOptions = document.querySelectorAll(".unit-option");
      const totalDisplay = document.getElementById("totalPrice");

      unitOptions.forEach((option) => {
        option.addEventListener("click", () => {
          unitOptions.forEach((o) => {
            o.classList.remove("selected");
            o.querySelector('input[type="radio"]').checked = false;

            const opt = o.querySelector(".options");
            if (opt) opt.style.height = "0";
          });

          option.classList.add("selected");
          option.querySelector('input[type="radio"]').checked = true;

          const selectedOpt = option.querySelector(".options");
          if (selectedOpt) {
            selectedOpt.style.height = selectedOpt.scrollHeight + "px";
          }

          const price = parseFloat(option.getAttribute("data-price"));
          totalDisplay.textContent = `Total: $${price.toFixed(2)} USD`;
        });
      });

      // Optional: recalculate height on window resize
      window.addEventListener("resize", () => {
        const selected = document.querySelector(
          ".unit-option.selected .options"
        );
        if (selected) {
          selected.style.height = selected.scrollHeight + "px";
        }
      });

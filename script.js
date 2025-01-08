// state

document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".number");
  
    counters.forEach(counter => {
      counter.innerText = "0";
  
      const updateCounter = () => {
        const target = +counter.getAttribute("data-target");
        const current = +counter.innerText;
        const increment = target / 200; // Adjust speed by changing this value
  
        if (current < target) {
          counter.innerText = `${Math.ceil(current + increment)}`;
          setTimeout(updateCounter, 10);
        } else {
          counter.innerText = target;
        }
      };
  
      updateCounter();
    });
  });



  
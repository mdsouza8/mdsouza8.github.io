new Vivus(
  "brain-left",
  {
    duration: 100,
    animTimingFunction: Vivus.EASE,
    start: "autostart"
  },
  function(obj) {
    obj.el.classList.add("brain-colour");
    document.getElementById("brain-right").style.opacity = "1";
    new Vivus(
      "brain-right",
      {
        duration: 110,
        animTimingFunction: Vivus.EASE_IN,
        start: "autostart"
      },
      function(obj) {
        obj.el.classList.add("finished");
        // document.getElementById("line-title").style.opacity = "1";
        // new Vivus("line-title", {
        //   duration: 100,
        //   animTimingFunction: Vivus.EASE
        // });

      }
    );
  }
);

const glow = document.getElementById("brain-wrapper");

glow.onmouseover = changeColour;
glow.onmouseout = returnColour;

function changeColour() {
  glow.classList.add("backgroundchange");
}

function returnColour() {
  glow.classList.remove("backgroundchange");
}

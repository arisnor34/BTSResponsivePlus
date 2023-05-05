function toggleSection(id) {
    var section = document.getElementById("section" + id);
    var sections = document.getElementsByClassName("content-section");

    for (var i = 0; i < sections.length; i++) {
      if (sections[i].classList.contains("show") && sections[i] != section) {
        sections[i].classList.remove("show");
      }
    }
  
    if (section.classList.contains("show")) {
      section.classList.remove("show");
    } else {
      section.classList.add("show");
    }
  }
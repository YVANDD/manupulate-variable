const inputs = document.querySelectorAll(".controls input");

// that function will controlling

function handleUpdate(){
  const suffix = this.dataset.sizing||"";
  document.documentElement.style.setProperty(`--${this.name}`, this.value +suffix);
  // console.log(suffix);
}

// that event will be listened

inputs.forEach(inn =>inn.addEventListener("change", handleUpdate));
inputs.forEach(inn =>inn.addEventListener("mousemove", handleUpdate));
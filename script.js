const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)

const data = {
  gym: ["01-16", "01-17"],
  water: ["01-15", "01-16", "01-17", "01-18", "01-19"],
  food: ["01-16", "01-17", "01-18"],
  sleep: ["01-16", "01-18", "01-19"],
  study: ["01-16", "01-17", "01-18"],
}

nlwSetup.setData(data)
nlwSetup.load()
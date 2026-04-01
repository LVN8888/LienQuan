function getIntFromString(a) {
  if (isNaN(a)) {
    const groups = String(a).match(/^\d+\.\d+$/);
    if (groups != null && groups.length > 0) {
      return groups[0];
    }
    return 0;
  }
  return a;
}

function roundDown(num) {
  return Math.floor(num * 10) / 10 - 0.05;
}

function normaliseGrade(win_now, win_need, n) {
  win_now = getIntFromString(win_now);
  win_need = getIntFromString(win_need);
  n = getIntFromString(n);

  const n_win = (win_now / 100) * n;
  const n_need = ((win_need * n) - (100 * n_win.toFixed(0))) / (100 - win_need);

  return n_need.toFixed(0);
}

function setOutput(message, type) {
  const output = document.getElementById("output");
  output.className = "result-box";

  if (type === "success") {
    output.classList.add("result-success");
  } else if (type === "warning") {
    output.classList.add("result-warning");
  } else {
    output.classList.add("result-empty");
  }

  output.innerHTML = message;
}

function calculate() {
  const participation = document.getElementById("win_now").value.trim();
  const winNeedInput = document.getElementById("win_need").value.trim();
  const course_work = document.getElementById("n").value.trim();

  if (participation === "" || winNeedInput === "" || course_work === "") {
    setOutput("<strong>Vui lòng điền đủ thông tin.</strong>", "warning");
    return;
  }

  const mcq = roundDown(winNeedInput);
  const score = normaliseGrade(participation, mcq, course_work);

  let output = "";
  if (score < 0) {
    output = "<strong>Cần thua thêm " + Math.abs(score) + " trận liên tiếp.</strong>";
    setOutput(output, "warning");
  } else {
    output = "<strong>Cần thắng thêm " + score + " trận liên tiếp.</strong>";
    setOutput(output, "success");
  }
}

function resetForm() {
  document.getElementById("win_now").value = "";
  document.getElementById("win_need").value = "";
  document.getElementById("n").value = "";
  setOutput("Kết quả sẽ hiển thị tại đây.", "empty");
  document.getElementById("win_now").focus();
}

document.getElementById("calcButton").addEventListener("click", calculate);
document.getElementById("resetButton").addEventListener("click", resetForm);

document.querySelectorAll("input").forEach((input) => {
  input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      calculate();
    }
  });
});
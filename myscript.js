function getIntFromString(a){
	if (isNaN(a))
	{
		groups = a.match(/^\d+\.\d+$/);
		if (groups != null && groups.length > 0){
			return groups[0];
		}
		return 0;
	}
	return a;
}

function roundDown(num) {
  return Math.floor(num * 10) / 10 - 0.05;
}

function  normaliseGrade(win_now, win_need, n){
  win_now = getIntFromString(win_now)
  win_need = getIntFromString(win_need)
  n = getIntFromString(n)
  n_win = (win_now/100)*n
  n_need = ((win_need*n)-(100*n_win.toFixed(0)))/(100-win_need)
  return n_need.toFixed(0);
}

function calculate(){
  participation = document.getElementById("win_now").value;
  mcq = roundDown(document.getElementById("win_need").value);
  course_work = document.getElementById("n").value;
  if (participation == '' || mcq == '' || course_work == '') {
    return alert("Vui lòng điền đủ thông tin.");
  }
  score = normaliseGrade(participation,mcq,course_work)
  if (score < 0) {
    output = "<strong> Cần thua thêm " + Math.abs(score) + " trận liên tiếp.</strong>"
  }
  else {
    output = "<strong> Cần thắng thêm " + score + " trận liên tiếp.</strong>"
  }
  console.debug(output)
  document.getElementById("output").innerHTML = output
}
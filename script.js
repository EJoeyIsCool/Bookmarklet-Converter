document.addEventListener('DOMContentLoaded', function() {
  const convertBtn = document.getElementById('convertBtn');
  const scriptInput = document.getElementById('scriptInput');
  const convertedScript = document.getElementById('convertedScript');

  if (convertBtn && scriptInput && convertedScript) {
    convertBtn.addEventListener('click', function() {
      const input = scriptInput.value;
      const output = input.replace(/%([0-9A-Fa-f]{2})/g, function(match, p1) {
        return String.fromCharCode(parseInt(p1, 16));
      });
      convertedScript.textContent = output;
    });
  } else {
    console.error('One or more elements could not be found.');
  }
});

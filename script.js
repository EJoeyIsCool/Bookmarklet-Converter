document.getElementById('convertBtn').addEventListener('click', function() {
  const scriptInput = document.getElementById('scriptInput').value;
  const convertedScript = scriptInput.replace(/%([0-9A-Fa-f]{2})/g, function(match, p1) {
    return String.fromCharCode(parseInt(p1, 16));
  });
  document.getElementById('convertedScript').textContent = convertedScript;
});

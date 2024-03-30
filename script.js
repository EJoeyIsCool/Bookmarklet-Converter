document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('convertBtn').addEventListener('click', function() {
    const scriptInput = document.getElementById('scriptInput').value;
    const convertedScript = scriptInput.split('%').join('');
    document.getElementById('convertedScript').textContent = convertedScript;
  });

  document.getElementById('copyBtn').addEventListener('click', function() {
    const convertedScriptText = document.getElementById('convertedScript').textContent;
    navigator.clipboard.writeText(convertedScriptText).then(() => {
      alert('Converted script copied to clipboard!');
    }).catch(err => {
      console.error('Error copying text: ', err);
    });
  });
});

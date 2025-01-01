function translateText() {
    const text = document.getElementById('text').value;
    const sourceLang = document.getElementById('sourceLang').value;
    const targetLang = document.getElementById('targetLang').value;
  
    if (!text || !sourceLang || !targetLang) {
      alert('Please fill in all fields');
      return;
    }
  
    fetch(`/translate?text=${encodeURIComponent(text)}&sourceLang=${sourceLang}&targetLang=${targetLang}`)
      .then(response => response.json())
      .then(data => {
        if (data.translation) {
          document.getElementById('result').textContent = `Translation: ${data.translation}`;
        } else {
          document.getElementById('result').textContent = 'Error in translation.';
        }
      })
      .catch(error => {
        document.getElementById('result').textContent = 'Error: Could not fetch translation.';
      });
  }
  
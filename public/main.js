document.addEventListener('DOMContentLoaded', async () => {
    const sourceLangDropdown = document.getElementById('sourceLang');
    const targetLangDropdown = document.getElementById('targetLang');
    const translateButton = document.getElementById('translateButton');
    const outputDiv = document.getElementById('output');
  
    // Fetch available languages from the backend (prominent ones)
    const response = await fetch('/languages');
    const languages = await response.json();
  
    // Populate the dropdowns with available languages
    languages.forEach(lang => {
      const option = document.createElement('option');
      option.value = lang.code;
      option.textContent = lang.name;
      sourceLangDropdown.appendChild(option);
      targetLangDropdown.appendChild(option.cloneNode(true)); // Add the same options to target dropdown
    });
  
    // Prevent selecting the same language for both source and target
    sourceLangDropdown.addEventListener('change', () => {
      if (sourceLangDropdown.value === targetLangDropdown.value) {
        targetLangDropdown.selectedIndex = 0; // Reset target language
      }
    });
  
    targetLangDropdown.addEventListener('change', () => {
      if (sourceLangDropdown.value === targetLangDropdown.value) {
        sourceLangDropdown.selectedIndex = 0; // Reset source language
      }
    });
  
    // Handle the translation when the button is clicked
    translateButton.addEventListener('click', async () => {
      const sourceLang = sourceLangDropdown.value;
      const targetLang = targetLangDropdown.value;
      const text = document.getElementById('textInput').value.trim();
  
      if (!sourceLang || !targetLang || !text) {
        alert('Please fill out all fields');
        return;
      }
  
      try {
        const response = await fetch(`/api/v1/${sourceLang}/${targetLang}/${encodeURIComponent(text)}`);
        const result = await response.json();
  
        if (result.translation) {
          outputDiv.textContent = result.translation;
        } else {
          outputDiv.textContent = 'Translation failed. Please try again.';
        }
      } catch (error) {
        outputDiv.textContent = 'Error: Unable to fetch translation.';
      }
    });
  });
  
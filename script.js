const fetchRandomWord = async (partOfSpeech) => {
  const url = `https://wordsapiv1.p.rapidapi.com/words?random=true&partOfSpeech=${partOfSpeech}`;
  const options = {
      method: 'GET',
      headers: {
          'X-RapidAPI-Key': 'PUT_YOUR_API_KEY_HERE',
          'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
      }
  };

  try {
      const response = await fetch(url, options);
      const result = await response.json();
      return result.word;
  } catch (error) {
      console.error(error);
      return null;
  }
};

document.getElementById('generateButton').addEventListener('click', async () => {
  const randomNoun = await fetchRandomWord('noun');
  const randomAdjective = await fetchRandomWord('adjective');
  const randomVerb = await fetchRandomWord('verb');

  if (randomNoun && randomAdjective && randomVerb) {
      document.getElementById('instruction').innerHTML = `You don't really want to be <strong>${randomAdjective}</strong> these days, try using <strong>${randomNoun}</strong>, or avoiding to <strong>${randomVerb}</strong>.`;
  } else {
      document.getElementById('instruction').textContent = 'Failed to generate Cyber Cheese. Please try again.';
  }

});

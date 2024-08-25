import React, { useEffect } from 'react';

const TestSwalekh = ({ index, input, onInputChange, language }) => {
  useEffect(() => {
    const initializeSwalekh = () => {
      if (window.loadSwalekh) {
        window.loadSwalekh({
          apiKey: "172c5bb5af18516905473091fd58d30afe740b3f",
          appId: "rev.transliteration",
          querySel: ".swalekh-t13n",
          lang: language,
          domain: '1',
          mode: 'phonetic',
        });
      } else {
        console.error("Swalekh Web plugin not found or failed to initialize.");
      }
    };

    initializeSwalekh();

    return () => {
      if (window.unloadSwalekh) {
        window.unloadSwalekh({ querySel: ".swalekh-t13n" });
      }
    };
  }, []);

  const handleInputChange = (event) => {
    const value = event.target.value;
    onInputChange(index, value); // Send both index and value
  };

  return (
    <input
      type="text"
      value={input}
      onChange={handleInputChange}
      className="swalekh-t13n"
    />
  );
};

export default TestSwalekh;
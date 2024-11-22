import React, { useEffect } from 'react';

const Chatbot = () => {
  useEffect(() => {
    // Ensure that the Dialogflow Messenger script is only loaded once
    const scriptId = 'dialogflow-script';
    const existingScript = document.getElementById(scriptId);

    if (!existingScript) {
      const script = document.createElement('script');
      script.id = scriptId; // Set the script ID to track it
      script.src = 'https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1';
      script.async = true;

      script.onload = () => {
        console.log('Dialogflow Messenger script loaded.');
      };

      script.onerror = () => {
        console.error('Failed to load Dialogflow Messenger script.');
      };

      document.body.appendChild(script);
    }

    // Cleanup function: only remove the script in production to avoid multiple instances in dev mode
    return () => {
      if (process.env.NODE_ENV !== 'development') {
        const scriptElement = document.getElementById(scriptId);
        if (scriptElement) {
          document.body.removeChild(scriptElement);
        }
      }
    };
  }, []);

  useEffect(() => {
    // Ensure we only add the <df-messenger> once
    const existingMessenger = document.querySelector('df-messenger');
    if (!existingMessenger) {
      const dfMessenger = document.createElement('df-messenger');
      dfMessenger.setAttribute('agent-id', '16322d5f-4d7d-4eac-bb1a-a94427d8edb0'); // Replace with your agent ID
      dfMessenger.setAttribute('chat-title', 'Phoenix Chat');
      dfMessenger.setAttribute('language-code', 'en');
      dfMessenger.setAttribute('intent', 'WELCOME');
      
      document.body.appendChild(dfMessenger);
    }

    return () => {
      // Optional cleanup for <df-messenger> (remove if necessary)
      const dfMessenger = document.querySelector('df-messenger');
      if (dfMessenger) {
        document.body.removeChild(dfMessenger);
      }
    };
  }, []);

  return (
    <div style={{ position: 'fixed', bottom: '20px', right: '20px' }}>
      {/* This part will be managed dynamically */}
    </div>
  );
};

export default Chatbot;

import React, { useState, useEffect, useRef } from 'react';
import History from './components/History';

function App() {
  const [entries, setEntries] = useState([]);
  const [showInput, setShowInput] = useState(false);
  const [phrase, setPhrase] = useState('');
  const [tempData, setTempData] = useState(null);
  const inputRef = useRef(null);

  useEffect(() => {
    const saved = localStorage.getItem('blink_entries');
    if (saved) {
      try {
        setEntries(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to load entries', e);
      }
    }
  }, []);

  useEffect(() => {
    if (showInput && inputRef.current) {
      inputRef.current.focus();
    }
  }, [showInput]);

  const handleExistClick = () => {
    const timestamp = Date.now();
    let locationData = null;

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // We voluntarily don't block for location. 
          // If it comes later, we might update, but for simplicity/speed 
          // we might just capture it if available instantly or ignore.
          // For this "calm" app, let's just trigger permission 
          // but strictly speaking we won't wait for it to show the input.
          // We'll store it in the final entry if available then.
        },
        (err) => {
          console.log("Location denied or error", err);
        }
      );
    }

    setTempData({ timestamp });
    setShowInput(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!tempData) return;

    const newEntry = {
      id: Date.now().toString(), // Simple ID
      timestamp: tempData.timestamp,
      text: phrase || '...', // Default if empty
    };

    const updatedEntries = [newEntry, ...entries];
    setEntries(updatedEntries);
    localStorage.setItem('blink_entries', JSON.stringify(updatedEntries));

    setShowInput(false);
    setPhrase('');
    setTempData(null);
  };

  return (
    <>
      <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100%' }}>
        {!showInput ? (
          <button onClick={handleExistClick}>
            I exist
          </button>
        ) : (
          <form onSubmit={handleSubmit} style={{ width: '100%', maxWidth: '300px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ color: '#666' }}>
              Presence confirmed. Note?
            </div>
            <input
              ref={inputRef}
              type="text"
              value={phrase}
              onChange={(e) => setPhrase(e.target.value)}
              placeholder="..."
              maxLength={20}
            />
            <button type="submit" style={{ fontSize: '1rem', padding: '0.5rem', width: 'auto', alignSelf: 'center', minWidth: '100px' }}>
              Save
            </button>
          </form>
        )}
      </div>

      <div style={{ width: '100%', paddingBottom: '2rem' }}>
        <History entries={entries} />
      </div>
    </>
  );
}

export default App;

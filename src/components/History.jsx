import React from 'react';

const History = ({ entries }) => {
  if (!entries || entries.length === 0) {
    return <div style={{ marginTop: '2rem', fontSize: '0.8rem', color: '#333' }}>No presence recorded yet.</div>;
  }

  return (
    <div className="history-list">
      {entries.map((entry) => {
        const date = new Date(entry.timestamp);
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        
        return (
          <div key={entry.id} className="history-item">
            <span className="timestamp">{hours}:{minutes}</span>
            <span className="phrase">{entry.text}</span>
          </div>
        );
      })}
    </div>
  );
};

export default History;

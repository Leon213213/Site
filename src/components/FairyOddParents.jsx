import { useState } from 'react';

function FairyOddParents() {
  const [error, setError] = useState(null);

  const videos = [
    {
      title: 'Episode 1',
      videoUrl: 'https://leon-movies.s3.eu-north-1.amazonaws.com/Fairy+Odd+Parents/The+Fairly+Odd+Parents+S01+E01.mp4'
    },
    {
      title: 'Episode 2',
      videoUrl: 'https://leon-movies.s3.eu-north-1.amazonaws.com/Fairy+Odd+Parents/The+Fairly+Odd+Parents+S01+E02.mp4'
    },
    {
      title: 'Episode 3',
      videoUrl: 'https://leon-movies.s3.eu-north-1.amazonaws.com/Fairy+Odd+Parents/The+Fairly+Odd+Parents+S01+E03.mp4'
    },
    {
      title: 'Episode 4',
      videoUrl: 'https://leon-movies.s3.eu-north-1.amazonaws.com/Fairy+Odd+Parents/The+Fairly+Odd+Parents+S01+E04.mp4'
    },
    {
      title: 'Episode 5',
      videoUrl: 'https://leon-movies.s3.eu-north-1.amazonaws.com/Fairy+Odd+Parents/The+Fairly+Odd+Parents+S01+E05.mp4'
    },
    {
      title: 'Episode 6',
      videoUrl: 'https://leon-movies.s3.eu-north-1.amazonaws.com/Fairy+Odd+Parents/The+Fairly+Odd+Parents+S01+E06.mp4'
    },
    {
      title: 'Episode 7',
      videoUrl: 'https://leon-movies.s3.eu-north-1.amazonaws.com/Fairy+Odd+Parents/The+Fairly+Odd+Parents+S01+E07.mp4'
    }
  ];

  const handleVideoError = (e) => {
    console.error('Video Error:', e);
    setError('Error loading video. Please check the console for details.');
  };

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column',
      maxWidth: '1000px', 
      marginBottom: 'auto',
      marginLeft: 'auto',
      marginRight: 'auto',
      paddingBottom: '20px',
      paddingLeft: '20px',
      paddingRight: '20px',
      width: '96%'
    }}>
      <h1 style={{ textAlign: 'center', width: '100%' }}>Fairy Odd Parents</h1>
      {videos.map((video, index) => (
        <div key={index} style={{ marginBottom: '50px' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>{video.title}</h2>
          <div style={{ 
            position: 'relative', 
            paddingBottom: '56.25%', 
            height: 0, 
            overflow: 'hidden', 
            backgroundColor: '#000'
          }}>
            {error ? (
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                backgroundColor: '#000',
                padding: '20px',
                textAlign: 'center'
              }}>
                {error}
              </div>
            ) : (
              <video
                controls
                preload="metadata"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  border: 'none'
                }}
                onError={handleVideoError}
                crossOrigin="use-credentials"
                playsInline
              >
                <source src={video.videoUrl} type="video/mp4" crossOrigin="use-credentials" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default FairyOddParents;
    

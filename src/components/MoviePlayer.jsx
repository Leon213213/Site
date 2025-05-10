import { useState } from 'react';

function MoviePlayer({ movieId }) {
  const [error, setError] = useState(null);

  const movies = {
    'christmas-carol': {
      title: 'A Christmas Carol',
      videoUrl: 'https://leon-movies.s3.eu-north-1.amazonaws.com/A.Christmas.Carol.2009.720p.BrRip.x264.YIFY.mp4'
    },
    'polar-express': {
      title: 'Polar Express',
      videoUrl: 'https://leon-movies.s3.eu-north-1.amazonaws.com/Polar.Express.2004.720p.BrRip.x264.YIFY.mp4'
    },
    'monsters-inc': {
      title: 'Monsters Inc',
      videoUrl: 'https://leon-movies.s3.eu-north-1.amazonaws.com/Monsters.Inc.2001.720p.BluRay.x264.YIFY.mp4'
    },
    'sinbad-legend-of-the-seven-seas': {
      title: 'Sinbad: Legend of the Seven Seas',
      videoUrl: 'https://leon-movies.s3.eu-north-1.amazonaws.com/Sinbad%20Legend%20Of%20The%20Seven%20Seas%202003%20720p%20HDTV%20Rip%20x264%20-MgB.mp4'
    },
    'nemo': {
      title: 'Nemo',
      videoUrl: 'https://leon-movies.s3.eu-north-1.amazonaws.com/monsters-inc.mp4'
    }
  };

  const movie = movies[movieId] || movies['christmas-carol'];

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
      <h1 style={{ textAlign: 'center', width: '100%' }}>{movie.title}</h1>
      <div style={{ 
        position: 'relative', 
        paddingBottom: '56.25%', 
        height: 0, 
        overflow: 'hidden', 
        marginBottom: '50px',
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
            src={movie.videoUrl}
            onError={handleVideoError}
            crossOrigin="use-credentials"
            playsInline
          >
            <source src={movie.videoUrl} type="video/mp4" crossOrigin="use-credentials" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>
    </div>
  );
}

export default MoviePlayer; 
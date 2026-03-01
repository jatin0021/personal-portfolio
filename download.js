import axios from 'axios';
import fs from 'fs';

async function downloadImage() {
  const url = 'https://i.pinimg.com/736x/b6/2a/7c/b62a7cb2b6e1ba4cb1ab9dc15fd1c910.jpg';
  const path = 'public/anime-boy.jpg';

  try {
    const response = await axios({
      method: 'GET',
      url: url,
      responseType: 'stream',
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      }
    });

    response.data.pipe(fs.createWriteStream(path));
    
    return new Promise((resolve, reject) => {
      response.data.on('end', () => resolve());
      response.data.on('error', err => reject(err));
    });
  } catch (error) {
    console.error('Error downloading:', error.message);
  }
}

downloadImage();

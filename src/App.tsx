import { useState, useEffect } from 'react';
import Modal from 'react-modal';

import { Footer, Navbar, Stories, StoryModal, Subtitle } from './components';
import { DataContext, ThemeContext } from './context';
import { Loader } from './reusables';
import { Story } from './types';
import { getPreviousMonthDate } from './utils';

Modal.setAppElement('#root');

function App() {
  const [stories, setStories] = useState<Story[] | null>(null);
  const [selectedStory, setSelectedStory] = useState<number | null>(null);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    (async () => {
      const resp = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${
          process.env.REACT_APP_NASA_APIKEY
        }&start_date=${getPreviousMonthDate()}`
      );
      const data: Story[] = await resp.json();
      data.reverse();
      setStories(data);
    })();
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <DataContext.Provider
        value={{
          data: stories,
          setData: setStories,
          selectedStory,
          setSelectedStory,
        }}
      >
        <div className='h-screen w-screen flex flex-col items-center overflow-y-scroll dark:bg-darkBg'>
          <div className='h-full w-full' style={{ maxWidth: '900px' }}>
            <Navbar />
            <Subtitle />
            {stories ? <Stories stories={stories} /> : <Loader />}
            <StoryModal />
            <Footer />
          </div>
        </div>
      </DataContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;

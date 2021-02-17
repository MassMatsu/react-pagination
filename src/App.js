import React, { useEffect, useState } from 'react';
import { useFetch } from './useFetch';
import Follower from './Follower';

const url = 'https://api.github.com/users/john-smilga/followers?per_page=100';

const App = () => {
  const { loading, data } = useFetch(url);
  const [followers, setFollowers] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    if (loading) return;
    setFollowers(data[currentPage]);
  }, [loading, currentPage, data]);

  const handlePrev = () => {
    setCurrentPage((oldPage) => {
      let prevPage = oldPage - 1;
      if (prevPage < 0) {
        prevPage = data.length - 1;
      }
      return prevPage;
    });
  };
  const handleNext = () => {
    setCurrentPage((oldPage) => {
      let nextPage = oldPage + 1;
      if (nextPage > data.length - 1) {
        nextPage = 0;
      }
      return nextPage;
    });
  };

  return (
    <main>
      <div className='section-title'>
        <h1>{loading ? 'loading...' : 'pagination'}</h1>
        <div className='underline'></div>
      </div>
      <section className='followers'>
        <div className='container'>
          {followers &&
            followers.map((follower) => {
              return <Follower key={follower.id} {...follower} />;
            })}
        </div>
        {!loading && (
          <div className='btn-container'>
            <button className='prev-btn' onClick={handlePrev}>
              prev
            </button>
            {data.map((_, index) => {
              return (
                <button
                  className={`page-btn ${
                    index === currentPage && 'active-btn'
                  }`}
                  key={index}
                  onClick={() => setCurrentPage(index)}
                >
                  {index + 1}
                </button>
              );
            })}
            <button className='next-btn' onClick={handleNext}>
              next
            </button>
          </div>
        )}
      </section>
    </main>
  );
};

export default App;

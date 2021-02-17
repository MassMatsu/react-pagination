import React from 'react';
import { useFetch } from './useFetch';
import Follower from './Follower';

const url = 'https://api.github.com/users/john-smilga/followers?per_page=100';

const App = () => {
  const { loading, data } = useFetch(url);

  console.log(loading, data);
  // useEffect(() => {
  //   if (loading) return;

  // }, [loading]);

  return (
    <main>
      <div className='section-title'>
        <h1>pagination</h1>
        <div className='underline'></div>
      </div>
      <section className='followers'>
        <div className='container'>
          {data.map((follower) => {
            return <Follower key={follower.id} {...follower} />;
          })}
        </div>
      </section>
    </main>
  );
};

export default App;

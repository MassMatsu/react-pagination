import React from 'react';

export default function Follower({
  avatar_url: image,
  login: name,
  html_url: url,
}) {
  return (
    <article className='card'>
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <a href={url}>
        <button className='btn'>view profile</button>
      </a>
    </article>
  );
}

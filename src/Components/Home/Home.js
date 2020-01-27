import React from 'react';
import './Home.css';

function Home() {
	return (
		<div className='home-component'>
			{/* Home Component from Routes */}
			<video 
				autoplay='autoplay' muted='muted' data-video-loop-time='0' data-video-repeat-times='3' poster="https://magic.wizards.com/sites/mtg/files/gV45RNA2sdf_0.jpg" loop='true'>
				<source type='video/mp4' src='https://magic.wizards.com/sites/mtg/files/gV45RNA2sdf_vid_4.mp4'></source>
				<source type='video/webm' src='https://magic.wizards.com/sites/mtg/files/gV45RNA2sdf 2.webm'></source>
				<img src='https://magic.wizards.com/sites/mtg/files/gV45RNA2sdf 0.jpg' alt />
			</video>
			{/* <div className='box'></div> */}
		</div>
	)
}

export default Home;
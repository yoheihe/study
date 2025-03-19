'use client'
import * as React from 'react';
// import '../../styles/global.css';

//コンポーネント使用
import ButtonGroup from "../components/ButtonGroup";
import ProfileSection from '../components/ProfileSection';
import SocialIcons from "../components/SocialIcons";
// import '../../styles/globals.css';

export default function About() {
  return (
    <main className="main-global">

      <div className="top-container">
        <div className="topText">
          <h1>Welcome to My Page</h1>
        </div>
        <ButtonGroup />
      </div>
      <div className="about-profile">
        <ProfileSection />
      </div>

      <SocialIcons />

    </main>
  );

}
'use client'
import * as React from 'react';

//コンポーネント使用
import ButtonGroup from "../components/ButtonGroup";
import ProfileSection from '../components/ProfileSection';
import SocialIcons from "../components/SocialIcons";

export default function About() {
  return (
    <main className="main-global">

      <div className="top-container">
        <div className="topText">
          <h1>Welcome to My Page</h1>
        </div>
      </div>
        <ButtonGroup />

      <ProfileSection />

      <SocialIcons />

    </main>
  );

}
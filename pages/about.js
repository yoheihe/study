'use client'
import * as React from 'react';
import Image from 'next/image';
import '../src/app/globals.css';


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
      <div>
        <h3>大学在学中に劇団ひまわりに入団。劇団時代に脚本作成を行い、文章を書くようになる。幼少期は全く本を読まず国語の成績は中学まで偏差値30。高校受験を契機に読書をするようになる。現在は小説投稿サイトカクヨムに小説を投稿中。</h3>
      </div>

      <div>
        <div>
        <div className="about-profile-image">
          <Image
            src="/profile-baseball.png"
            alt="Baseball Image"
            width={150}
            height={150}
          />
        </div>
        <div><h3>ヤクルトスワローズファン。真夏に神宮球場で応援するのが好き</h3></div>
        </div>
        <div></div>
        <div></div>

      </div>

      <SocialIcons />

    </main>
  );

}
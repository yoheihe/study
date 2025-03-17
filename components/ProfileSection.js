import Image from "next/image";

const ProfileSection = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
          <div style={{ display: "flex", justifyContent: "center" }}></div>
      <Image
        src="/profile.png"
        alt="Profile Image"
        width={150}
        height={150}
        style={{ borderRadius: "50%" }}
      />
      <div className="profilleContaniner">
      <h1>湯元みこと</h1>
      <h3>
        歴史とファンタジーが大好き<br />
        趣味は遺跡巡りと朝カフェ
      </h3>
      </div>
    </div>
  );
};

export default ProfileSection;

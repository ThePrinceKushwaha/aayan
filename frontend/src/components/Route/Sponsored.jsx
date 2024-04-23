import React from "react";
import styles from "../../styles/styles";

const Sponsored = () => {
  return (
    <div
      className={`${styles.section} hidden sm:block bg-white py-10 px-5 mb-12 cursor-pointer rounded-xl`}
    >
      <div className="sponseered_title" >
      <h1>Brands</h1>
      </div>
      <div className="flex justify-between w-full">
      <div className="flex items-start">
          <img
            src="https://www.hamronirman.com/content/images/thumbs/66249acf788ae0000120ed86_panchakanya_450.jpeg"
            alt=""
            style={{width:"150px", objectFit:"contain"}}
          />
        </div>
        <div className="flex items-start">
          <img
            src="https://www.hamronirman.com/content/images/thumbs/661e0680788ae00001f7193d_ingco_450.jpeg"
            alt=""
            style={{width:"150px", objectFit:"contain"}}
          />
        </div>
        <div className="flex items-start">
          <img
            src="https://www.hamronirman.com/content/images/thumbs/661cd7b4788ae0000157f0f5_nuplast_450.png"
            style={{width:"150px", objectFit:"contain"}}
            alt=""
          />
        </div>
        <div className="flex items-start">
          <img
            src="https://www.hamronirman.com/content/images/thumbs/661cd697788ae000015654a9_toyo_450.png"
            style={{width:"150px", objectFit:"contain"}}
            alt=""
          />
        </div>
        <div className="flex items-start">
          <img
            src="https://www.hamronirman.com/content/images/thumbs/661cda13788ae0000165e6e8_safewell_450.png"
            style={{width:"150px", objectFit:"contain"}}
            alt=""
          />
        </div>
        <div className="flex items-start">
          <img
            src="https://www.hamronirman.com/content/images/thumbs/66249b46788ae00001223516_nepatop_450.jpeg"
            style={{width:"150px", objectFit:"contain"}}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Sponsored;

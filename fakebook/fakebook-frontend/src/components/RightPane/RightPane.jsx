import React from 'react';
import './rightPane.css';

export default function RightPane() {
  return (
    <div className='rightPaneBox'>
      <div className="rightPaneContainer">
        <div className="addContainer">
          <span className="sponsored">Sponsored</span>
          <img src="/images/ad2.jpg" alt="" className="addImage" />
          <span className="adText">
            Order your favorite food from your favorite restaurant. We can deliver it to your doorstep in no time. Grab your phone and order now...!
          </span>
          <div className="birthdayContainer">
            <img src="/images/gift1.jpeg" alt="" className="birthdayImage" />
            <span className="birthdayText"><b>Daniel Samuel</b> and <b>2 others</b> having birthday today...!</span>
          </div>
          <div className="friendList">
            <li className="onlineFriend">
              <div className="onlineFriendImageContainer">
                <img src="/images/5.jpg" alt="" className="onlineFriendImage" />
                <span className="onlineStatus"></span>
              </div>
              <span className="onlineFriendName">Nick Pressly</span>
            </li>
            <li className="onlineFriend">
              <div className="onlineFriendImageContainer">
                <img src="/images/2.jpeg" alt="" className="onlineFriendImage" />
                <span className="onlineStatus"></span>
              </div>
              <span className="onlineFriendName">James Smith</span>
            </li>
            <li className="onlineFriend">
              <div className="onlineFriendImageContainer">
                <img src="/images/4.jpeg" alt="" className="onlineFriendImage" />
                <span className="onlineStatus"></span>
              </div>
              <span className="onlineFriendName">Ana Carolin</span>
            </li>
            <li className="onlineFriend">
              <div className="onlineFriendImageContainer">
                <img src="/images/8.jpeg" alt="" className="onlineFriendImage" />
                <span className="onlineStatus"></span>
              </div>
              <span className="onlineFriendName">Jessica Biel</span>
            </li>
            <li className="onlineFriend">
              <div className="onlineFriendImageContainer">
                <img src="/images/6.jpg" alt="" className="onlineFriendImage" />
                <span className="onlineStatus"></span>
              </div>
              <span className="onlineFriendName">Terry Nicholas</span>
            </li>
            <li className="onlineFriend">
              <div className="onlineFriendImageContainer">
                <img src="/images/7.png" alt="" className="onlineFriendImage" />
                <span className="onlineStatus"></span>
              </div>
              <span className="onlineFriendName">Jennifer Lopez</span>
            </li>
          </div>
        </div>
      </div>
    </div>
  )
}

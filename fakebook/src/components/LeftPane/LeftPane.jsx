import React from 'react';
import './leftPane.css';
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt';
import GroupsIcon from '@mui/icons-material/Groups';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import FlagIcon from '@mui/icons-material/Flag';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import BuildIcon from '@mui/icons-material/Build';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export default function LeftPane() {
  return (
    <div className='leftPaneBox'>
      <div className="leftPaneContainer">
        <div className="leftPaneMenu">
          <li className="leftPaneMenuItem">
            <MarkUnreadChatAltIcon className='leftPaneMenuIcon'/>
            <span className="leftMenuText">Message</span>
          </li>
          <li className="leftPaneMenuItem">
            <GroupsIcon className='leftPaneMenuIcon'/>
            <span className="leftMenuText">Groups</span>
          </li>
          <li className="leftPaneMenuItem">
            <RssFeedIcon className='leftPaneMenuIcon'/>
            <span className="leftMenuText">Feed</span>
          </li>
          <li className="leftPaneMenuItem">
            <FlagIcon className='leftPaneMenuIcon'/>
            <span className="leftMenuText">Pages</span>
          </li>
          <li className="leftPaneMenuItem">
            <CalendarMonthIcon className='leftPaneMenuIcon'/>
            <span className="leftMenuText">Events</span>
          </li>
          <li className="leftPaneMenuItem">
            <BuildIcon className='leftPaneMenuIcon'/>
            <span className="leftMenuText">Settings</span>
          </li>
          <li className="leftPaneMenuItem">
            <SportsEsportsIcon className='leftPaneMenuIcon'/>
            <span className="leftMenuText">Games</span>
          </li>
          <li className="leftPaneMenuItem">
            <NewspaperIcon className='leftPaneMenuIcon'/>
            <span className="leftMenuText">News</span>
          </li>
          <li className="leftPaneMenuItem">
            <WorkOutlineIcon className='leftPaneMenuIcon'/>
            <span className="leftMenuText">Jobs</span>
          </li>
          <li className="leftPaneMenuItem">
            <AddShoppingCartIcon className='leftPaneMenuIcon'/>
            <span className="leftMenuText">Market</span>
          </li>
          <hr/>
          <div className="pagesYouLiked">
            <h4>Pages You Liked</h4>
          </div>
          <div className="pageList">
          <div className="pageListItem">
            <img src="./images/2.jpeg" alt="" className="pagePic" />
            <span className="PageName">James Smith</span>
          </div>
          <div className="pageListItem">
            <img src="./images/3.jpeg" alt="" className="pagePic" />
            <span className="PageName">Jordin Sparks</span>
          </div>
          <div className="pageListItem">
            <img src="./images/4.jpeg" alt="" className="pagePic" />
            <span className="PageName">Ana Carolin</span>
          </div>
          <div className="pageListItem">
            <img src="./images/5.jpg" alt="" className="pagePic" />
            <span className="PageName">Nick Pressly</span>
          </div>
          <div className="pageListItem">
            <img src="./images/6.jpg" alt="" className="pagePic" />
            <span className="PageName">Terry Nicholas</span>
          </div>
          <div className="pageListItem">
            <img src="./images/7.png" alt="" className="pagePic" />
            <span className="PageName">Jennifer Lopez</span>
          </div>
          <div className="pageListItem">
            <img src="./images/8.jpeg" alt="" className="pagePic" />
            <span className="PageName">Jessica Biel</span>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

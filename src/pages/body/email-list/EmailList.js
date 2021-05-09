import { Checkbox, IconButton } from '@material-ui/core';
import {
  ArrowDropDown,
  ChevronLeft,
  ChevronRight,
  Inbox,
  LocalOffer,
  MoreVert,
  People,
  Redo,
  Settings,
} from '@material-ui/icons';
import React from 'react';
import './EmailList.css';
import Section from './components/Section';
import EmailRow from './components/EmailRow';

export default function EmailList() {
  return (
    <div className='emailList'>
      <div className='emailList__settings'>
        <div className='emailList__settings__left'>
          <Checkbox />
          <IconButton>
            <ArrowDropDown />
          </IconButton>
          <IconButton>
            <Redo />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
        <div className='emailList__settings__right'>
          <IconButton>
            <ChevronLeft />
          </IconButton>
          <IconButton>
            <ChevronRight />
          </IconButton>
          <IconButton>
            <Settings />
          </IconButton>
        </div>
      </div>
      <div className='emailList__sections'>
        <Section Icon={Inbox} title='Primary' color='red' selected={true} />
        <Section
          Icon={People}
          title='Social'
          color='#1A73E8'
          selected={false}
        />
        <Section
          Icon={LocalOffer}
          title='Promotions'
          color='green'
          selected={false}
        />
      </div>
      <div className='emailList__list'>
        <EmailRow
          title='Twitch'
          subject='Hey Follow Streamer!'
          description='This is the best'
          time='10pm'
        />
      </div>
    </div>
  );
}

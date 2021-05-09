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
import React, { useEffect, useState } from 'react';
import './EmailList.css';
import Section from './components/Section';
import EmailRow from './components/EmailRow';
import { db } from '../../../firebase';

export default function EmailList() {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    db.collection('emails')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) =>
        setEmails(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

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
        {emails.map(({ id, data: { to, subject, message, timestamp } }) => (
          <EmailRow
            id={id}
            title={to}
            subject={subject}
            description={message}
            time={new Date(timestamp?.seconds * 1000).toUTCString()}
            key={id}
          />
        ))}
      </div>
    </div>
  );
}

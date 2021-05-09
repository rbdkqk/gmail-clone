import React from 'react';
import './Sidebar.css';
import { Button, IconButton } from '@material-ui/core';
import SidebarOption from './components/SidebarOption';
import {
  Add,
  Inbox,
  Star,
  AccessTime,
  LabelImportant,
  NearMe,
  Note,
  ExpandMore,
  Person,
  Duo,
  Phone,
} from '@material-ui/icons';
import { useDispatch } from 'react-redux';
import { openSendMessage } from '../../features/mailSlice';

export default function Sidebar() {
  const dispatch = useDispatch();

  return (
    <div className='sidebar'>
      <Button
        className='sidebar__compose'
        startIcon={<Add fontSize='large' />}
        onClick={() => dispatch(openSendMessage())}
      >
        Compose
      </Button>
      <SidebarOption Icon={Inbox} title='Inbox' number={54} selected={true} />
      <SidebarOption Icon={Star} title='Starred' number={54} selected={false} />
      <SidebarOption
        Icon={AccessTime}
        title='Snoozed'
        number={54}
        selected={false}
      />
      <SidebarOption
        Icon={LabelImportant}
        title='Important'
        number={54}
        selected={false}
      />
      <SidebarOption Icon={NearMe} title='Sent' number={54} selected={false} />
      <SidebarOption Icon={Note} title='Drafts' number={54} selected={false} />
      <SidebarOption
        Icon={ExpandMore}
        title='More'
        number={54}
        selected={false}
      />
      <div className='sidebar__footer'>
        <div className='sidebar__footerIcons'>
          <IconButton>
            <Person />
          </IconButton>
          <IconButton>
            <Duo />
          </IconButton>
          <IconButton>
            <Phone />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

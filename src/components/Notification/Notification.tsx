import React, { FC } from 'react';
import { NotificationStyled, INotificationStyled } from './NotificationStyled';

interface INotification extends INotificationStyled {
  label: string;
}

export const Notification: FC<INotification> = ({ isVisible, label, mode }) => {
  return (
    <NotificationStyled mode={mode} isVisible={isVisible}>
      {label}
    </NotificationStyled>
  );
};

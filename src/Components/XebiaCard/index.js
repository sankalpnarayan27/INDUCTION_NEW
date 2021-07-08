import React from 'react';
import { Card, Image } from 'react-bootstrap';

import styles from './XebiaCard.module.scss';

export default ({
  title,
  desc,
  icon,
  active,
  onClick,
  style
}) => {
  return (
    <Card 
      role="presentation" 
      onClick={() => onClick(title)} 
      className={`${styles.xebiaCard} ${active ? styles.active : ''}`}
      style={{...style}}
    >
      <Card.Body>
        <Image
          fluid
          src={icon}
        />
        <h4>
          {title}
        </h4>
        { desc && (
            <p>
              {desc}
            </p>
          )
        } 
      </Card.Body>
    </Card>
  )
};

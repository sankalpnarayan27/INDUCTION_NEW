import React from 'react';
import { Card, Image } from 'react-bootstrap';

import styles from './XebiaCard.module.scss';

export default ({
  title,
  desc,
  icon,
  active = false
}) => (
  <Card className={`${styles.xebiaCard} ${active ? styles.active : ''}`}>
    <Card.Body>
      <Image
        fluid
        src={icon}
      />
      <h4>
        {title}
      </h4>
      <p>
        {desc}
      </p>
    </Card.Body>
  </Card>
);

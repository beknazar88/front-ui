import React from 'react';
import styles from './DataCard.module.css';

import budgetLogo from '../../assets/img/logos/budget-card-logo.svg'
import { Card, CardContent } from '@mui/material';


  type Props = {
    budgetType?: string;
    factVal?: string;
    forecastVal?: string;
    fulfillmentPercentage?: string;
    img: string;
  }
  

const DataCard = ({...props}: Props) => (
  <Card  elevation={2} className={styles.cardStyle} sx={{ width: 270, height: 350}}>
    <CardContent>
    <div className={styles.topSection}>
      <img alt={'budget-logo'} src={props.img}/>
      <div className={styles.cardTitle}>
        <p>{props.budgetType}</p>
      </div>
    </div>
    <div className={styles.middleSection}>
      <div className={styles.fact}>Факт</div>
      <div className={styles.factVal}>
        {props.factVal} сом
      </div>
      <div className={styles.percentageArea}>
        <div className={styles.percentage}>
          {props.fulfillmentPercentage}
        </div>
      </div>
    </div>
    <div className={styles.bottomSection}>
      <div className={styles.progressBar}>
      </div>
      <div className={styles.forecastVal}>
         <p>{props.forecastVal}</p>
      </div>
    </div>
    </CardContent>
  </Card>
);

export default DataCard;

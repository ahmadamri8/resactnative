import React from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonThumbnail,
  IonLabel,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonAvatar,
  IonCardSubtitle,
  IonCardContent,
} from '@ionic/react';
import './Tab1.css'; 

const Tab1: React.FC = () => {
  

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      <IonCard className='card'>
        <IonCardHeader  className='header'>
        <IonCardTitle>Ahmad Amri</IonCardTitle>
        <IonAvatar>
        <img alt="" src="data:image/jpeg;base64,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" />
        </IonAvatar>
        <IonCardSubtitle></IonCardSubtitle>
        </IonCardHeader>
        <IonCardContent></IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;

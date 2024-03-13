import { IonBackButton, IonButtons, IonCard, IonCheckbox, IonCol, IonContent, IonGrid, IonList, IonPage, IonRow, IonToolbar } from "@ionic/react";
import React from "react";
import { chevronBackOutline, alertCircleOutline, addCircleOutline } from 'ionicons/icons';
import './main.css'

const classification : React.FC = () => {
    return(
        <IonPage>
            <IonToolbar>
                <IonButtons slot="start" >
                    <IonBackButton defaultHref="/familyCompositionList" icon={chevronBackOutline} text="Back"></IonBackButton>
                </IonButtons>
            </IonToolbar>
            <IonContent className="scroll-content">
                <h1>
                    Register
                </h1>
                <p className="fam-info">Family Composition</p>
                <p className="sub-text"><i>(Category of being a Solo Parent)</i></p>
                <IonCard className="classification-card">
                    <IonGrid>
                        <IonRow>
                            <IonCol size="12" size-md="6">
                                <IonList className="ion-padding list-one">
                                    <IonCheckbox labelPlacement="end" className="classification">Biyuda/Biyudo</IonCheckbox>
                                </IonList>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol>
                                <IonList className="ion-padding list-two">
                                    <IonCheckbox labelPlacement="end" className="classification">Hiwalay sa asawa (for at least 6 months)</IonCheckbox>
                                </IonList>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol>
                                <IonList className="ion-padding list-three">
                                    <IonCheckbox labelPlacement="end" className="classification">Napakawalang bisa o annuled and kasal</IonCheckbox>
                                </IonList>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol>
                                <IonList className="ion-padding list-four">
                                    <IonCheckbox labelPlacement="end" className="classification">Inabandona o iniwan ng kinakasama (for at least 6 months)</IonCheckbox>
                                </IonList>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol>
                                <IonList className="ion-padding list-five">
                                    <IonCheckbox labelPlacement="end" className="classification">Sinumang indibidwal na tumatayo na magulang ng bata/ ng mga bata </IonCheckbox>
                                </IonList>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol>
                                <IonList className="ion-padding list-six">
                                    <IonCheckbox labelPlacement="end" className="classification">Sinumang miyembro ng pamilya na tumatayo bilang head of the family bunga ng pag-abandona, pagkawala o matagal na pagkakahiwalay ng magulang o Solo Parent</IonCheckbox>
                                </IonList>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol>
                                <IonList className="ion-padding list-seven">
                                    <IonCheckbox labelPlacement="end" className="classification">Biktima ng panggagahasa</IonCheckbox>
                                </IonList>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol>
                                <IonList className="ion-padding list-eight">
                                    <IonCheckbox labelPlacement="end" className="classification">Asawa ng nakulong at/o hinatulan na mabilanggo (for at least  months)</IonCheckbox>
                                </IonList>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol>
                                <IonList className="ion-padding list-nine">
                                    <IonCheckbox labelPlacement="end" className="classification">Hindi sapatang mental o pisikal ng asawa/kinakasama/anak (with Doctor's Certificate)</IonCheckbox>
                                </IonList>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </IonCard>
                
            </IonContent>
        </IonPage>
    )
}

export default classification;
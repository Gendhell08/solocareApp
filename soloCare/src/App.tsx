import { Redirect, Route, Router } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';


/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import splashScreen from './pages/splashScreen';
import landingPage from './pages/landingPage';
import login from './pages/login';
import ForgotPasswordPage from './pages/forgotPassword';
import verification from './pages/verification';
import getOtp from './pages/getOtp';
import register from './pages/register';
import nextRegister from './pages/nextRegister';
import familyComposition from './pages/familyComposition';
import familyCompositionList from './pages/familyCompositionList';
import classification from './pages/classification';

setupIonicReact();

const App: React.FC = () => (


  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path='/splashScreen' component={splashScreen}></Route>
        <Route exact path='/landingPage' component={landingPage}></Route>
        <Route exact path='/login' component={login}></Route>
        <Route exact path='/forgotPassword' component={ForgotPasswordPage}></Route>
        <Route exact path='/verification' component={verification}></Route>
        <Route exact path='/getOtp' component={getOtp}></Route>
        <Route exact path='/register' component={register}></Route>
        <Route exact path='/nextRegister' component={nextRegister}></Route>
        <Route exact  path='/familyComposition' component={familyComposition}></Route>
        <Route exact path='/familyCompositionList' component={familyCompositionList}></Route>
        <Route exact path='/classification' component={classification}></Route>
        <Route exact path="/">
          <Redirect to="/splashScreen" />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;

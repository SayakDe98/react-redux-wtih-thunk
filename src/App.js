import React, { Suspense, useEffect, useState } from 'react';
import { Header } from './components/index'
import dummyData from './utils/dummyData/profile.json';
import { useDispatch, useSelector } from 'react-redux';
import { LOGIN_USER, PREMIUM_USER } from './utils/constants';
import { premiumSelectors, profileSelectors } from './selectors';
import { profileActions, premiumActions } from "./actions/index";

// import { getProfile } from './selectors/profileSelectors';
// import * as Components from './components';
// const Header = Components.Header
// const Header = Components.default.Header
// const Button = Components.default.Button
const Button = React.lazy(() => import('./components/Button'));

function App() {
  // const user = useSelector((state) => state.profile);
  // const user = useSelector(getProfile)
  const [activeUser, setActiveUser] = useState(1);
  const user = useSelector(profileSelectors.getProfile);
  const { premium } = useSelector(premiumSelectors.getPremiumUser);
  const dispatch = useDispatch();
    useEffect(() => {
      const getUser = async () => {
        const data = await dummyData;
        console.log(data)
        // dispatch({ type: LOGIN_USER, payload: { id: data[activeUser].id, name: data[activeUser].name, role: data[activeUser].role }});
        dispatch(
          profileActions.loginUser({ id: data[activeUser].id, name: data[activeUser].name, role: data[activeUser].role })
        );
        // dispatch({ type: PREMIUM_USER, payload:  data[activeUser].premium })
        dispatch(
          premiumActions.premiumUser(data[activeUser].premium)
        );
        // setActiveUser(data[activeUser].id);
      };
      getUser();
    }, [activeUser]);
    const handleClick = () => {
      console.log('clicked');
      if(activeUser === 0) {setActiveUser(1); } else if(activeUser === 1) { setActiveUser(0);}
    }
  return (
    <div>
      <Header />
      <div
        className="App"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "90vh",
        }}
      >
        <p>{premium === true ? "Premium" : "Normal"} User</p>
        Hi {user.name}
        <Suspense fallback={<div>Loading...</div>}>
          <Button handleClick={handleClick}/>
        </Suspense>
      </div>
    </div>
  );
}

export default App;

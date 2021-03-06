import React, { useEffect } from "react";
import "./App.css";
import Navibar from "./HeaderComponents/Navibar";
import "bootstrap/dist/css/bootstrap.min.css";

import PureMaths from "./BodyComponents/subjects/PureMaths";
import AppliedMaths from "./BodyComponents/subjects/AppliedMaths";
import Physicsunit from "./BodyComponents/subjects/Physicsunit";
import Chemistryunits from "./BodyComponents/subjects/Chemistryunit";
import Biologyunits from "./BodyComponents/subjects/Biologyunits";
import InformationTech from "./BodyComponents/subjects/InformationTech";
//import ComMathscategories from "./BodyComponents/subjects/ComMathscategories";
import SubjectVideo from "./BodyComponents/SubjectVideo";
import SigninPage from "./BodyComponents/SigninPage";
import HomePage from "./BodyComponents/HomePage";
import Checkout from "./BodyComponents/PaymentComponents/Checkout";
import PaymentCategories from "./BodyComponents/PaymentComponents/PaymentCategories";
import MyTable from "./BodyComponents/TableComponents/MyTable";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import AdminDashboard from "./Admin/AdminDashboard";

function App() {
  return (
    <Router>
      <Navibar />
      <main>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/signin" exact>
            <SigninPage />
          </Route>
          <Route path="/paymentcategory" exact>
            <PaymentCategories />
          </Route>
          <Route path="/paymentform" exact>
            <Checkout />
          </Route>
          <Route path="/mytable" exact>
            <MyTable />
          </Route>
          <Route path="/physicsunits" exact>
            <Physicsunit />
          </Route>
          <Route path="/chemistryunits" exact>
            <Chemistryunits />
          </Route>
          <Route path="/appliedMaths" exact>
            <AppliedMaths />
          </Route>
          <Route path="/pureMaths" exact>
            <PureMaths />
          </Route>
          <Route path="/itunits" exact>
            <InformationTech />
          </Route>
          <Route path="/biologyunits" exact>
            <Biologyunits />
          </Route>
          <Route path="/:unitId/modules" exact>
            <SubjectVideo />
          </Route>
          <Route path="/admin" exact>
            <AdminDashboard />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;

/*
<Route path="/biosubjects" exact>
            <Biologysubjects />
          </Route>
          <Route path="/physubjects" exact>
            <Physicalsubjects />
          </Route>
          <Route path="/combinedmathscat" exact>
            <ComMathscategories />
          </Route>
          <Route path="/learningPlatform" exact>
            <Streamspage />
          </Route>
*/

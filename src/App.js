import React, {Component} from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import { Attendee, Admin, AuthenticatedUser } from './routeAuthorization';
import Header from './containers/Header';
import Footer from './components/Footer';
import { Home } from './containers/Home';
import { About } from './containers/Home';
import { EventsList } from './containers/EventsList';
import { EventDetails } from './containers/EventDetails';
import PurchaseForm from './containers/PurchaseForm';
import { LogIn } from './containers/LogIn';
import { LogInAdmin } from './containers/LogIn';
import SignUp from './containers/SignUp';
import { AttendeeCalendar } from './containers/AttendeeCalendar';
import { AttendeeHistory } from './containers/AttendeeHistory';
import AdminDashboard from './containers/AdminDashboard';
import { CreateEventForm } from './containers/EventsList';
import {InviteAdminForm} from './containers/Admins';
import {AdminRegistration} from './containers/Admins';  

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="App-container">
          <Route path="/" exact component={Home} />
          <Route path="/home" exact component={Home} />
          <Route path="/events" exact component={EventsList} />
          <Route path="/events?categoryId=:id" exact component={EventsList} />
          <Route path="/events?date=:date" exact component={EventsList} />
          <Route path="/events?title=:title" exact component={EventsList} />
          <Route path="/events?categoryId=:id&date=:date" exact component={EventsList} />
          <Route path="/events/:id" exact component={EventDetails} />
          <Route path="/events/:id/tickets" exact component={Attendee(PurchaseForm)} />
          <Route path="/about" exact component={About} />
          <Route path="/login" exact component={LogIn} />
          <Route path="/admin/login" exact component={LogInAdmin} />
          <Route path="/signup" exact component={SignUp} />
          <Route path="/calendar" exact component={Attendee(AttendeeCalendar)} />
          <Route path="/history" exact component={Attendee(AttendeeHistory)} />
          <Route path="/admin/dashboard" exact component={Admin(AdminDashboard)} />
          <Route path="/admin/create" exact component={Admin(CreateEventForm)} />
          <Route path="/admin/update/:id" exact component={Admin(CreateEventForm)} />
          <Route path="/admin/invite" exact component={Admin(InviteAdminForm)} />
          <Route path="/newadmin" exact component={AdminRegistration} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
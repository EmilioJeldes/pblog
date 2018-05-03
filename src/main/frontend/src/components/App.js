import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

const Header = () => <h2>Header</h2>;
const Dashboard = () => <h2>Dashboard</h2>;
const TaskNew = () => <h2>TaskNew</h2>;
const Landing = () => <h2>Landing</h2>;
const Footer = () => <h2>Footer</h2>;

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/" component={Landing} />
          <Route exact path="/tasks" component={Dashboard} />
          <Route exact path="/tasks/new" component={TaskNew} />
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;

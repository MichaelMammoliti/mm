import { Navigation } from './components';

const navigationItems = [
  {
    text: 'who I am',
  },
  {
    text: 'experience',
  },
  {
    text: 'interests',
  },
  {
    text: 'contacts',
  },
];

const App = () => (
  <div>
    <Navigation orientation='vertical' type='circle' items={navigationItems} />
  </div>
);

export default App;

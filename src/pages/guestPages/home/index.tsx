// Home/index.tsx
import { Fragment } from 'react';
import Card from './@components/Card';
import { Button } from '../../../components';

import './style.scss';

const HomePage = () => {
  const userData = {
    gender: 'Male',
    email: 'ryan.fletcher@example.com',
    location: 'Winston–Salem, United States',
    title: 'Mr. Ryan Fletcher',
    image: 'https://randomuser.me/api/portraits/thumb/men/29.jpg',
  };

  return (
    <Fragment>
      <h1>This is the Home Page</h1>
      <Card
        title={userData?.title || 'N/A'}
        location={userData?.location || 'N/A'}
        email={userData?.email || 'N/A'}
        gender={userData?.gender || 'N/A'}
        image={userData?.image || ''}
      />
      <Button>Click</Button>
    </Fragment>
  );
};
export default HomePage;

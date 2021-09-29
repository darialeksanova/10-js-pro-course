import React from 'react';
import './App.css';
import Field from './components/Field';
import Card from './components/Card';
import Header from './components/Header';
import CardTitle from './components/CardTitle';
import ServicesList from './components/ServicesList';
import Price from './components/Price';
import Button from './components/Button';
import CardDescription from './components/CardDescription';

function App() {
  return (
    <div className='App'>
      <Field>
        <Header 
          title='Transparent Pricing For You'
        />
        <div className='cards-list'>
          <Card backgroundColor='rgb(10, 100, 48)'> 
            <CardTitle
              title='Save More' 
              color='white'
              isBold='false'
            />
            <CardTitle
              title='With Goodplans.' 
              color='white'
              isBold='true'
            />
            <CardDescription 
              content='Choose a plan and get onboard in minutes.
              Then get $100 credits for your next payment.'
              color='white'
              fontSize='0.8rem'
              optionalElement='&#10148;'
            />
          </Card>
  
          <Card>
            <CardTitle 
              symbol='&#9734;'
              title='Day Pass'
              isBold='false' 
            />
            <div className='card-content'>
              <CardDescription 
                content="What You'll Get"
                color='grey'
                font-size='1rem'
              />
              <ServicesList 
                servicesList={[
                  '8 hours usage of our coworking space',
                  'Access to All our rooms'
                ]}
              />
              <hr className='dash-line'/>
              <Price 
                amount='$20'
                period='day'
              />
            </div>
            <Button
              handleButtonClick={() => console.log('Day Pass')}
              content='Choose'
              backgroundColor='rgb(10, 100, 48)'
            />
          </Card>
            
          <Card>
            <CardTitle 
              symbol='&#9734;'
              title='Monthly Pass' 
              isBold='false'
            />
            <div className='card-content'>
              <CardDescription 
                content="What You'll Get"
                color='grey'
                font-size='1rem'
              />
              <ServicesList 
                servicesList={[
                  '8 hours usage of our coworking space',
                  'Access to All our rooms',
                  'Dedicated Desk',
                  'Free Business Address',
                  'Free Lunch 1x a day'
                ]}
              />
              <hr className='dash-line'/>
              <Price 
                amount='$380'
                period='month'
              />
            </div>
            <Button 
              handleButtonClick={() => console.log('Month Pass')}
              content='Choose'
              backgroundColor='rgb(10, 100, 48)'
            />
          </Card>
        </div>
      </Field>
    </div>
  );
}

export default App;

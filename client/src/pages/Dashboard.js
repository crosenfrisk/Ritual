import React from 'react';
import { Box, Center, Flex } from '@chakra-ui/react';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';
import GoalForm from '../components/GoalForm';
import { ActivityDash } from '../components/ActivityList';
import GoalList from '../components/GoalList';

const fakeUserData = {
  _id: '626dd2c8db8783636bb74a0f',
  username: 'mike',
  email: 'mike@mike.com',
  activities: [
    {
      _id: '626dd27dcbfc48efe3a4edb9',
      title: 'Deep Breathing',
      // text: 'nulla ultrices aliquet maecenas leo odio condimentum id luctus',
      image: 'deep-breathing.png'
    },
    {
      _id: '626dd27dcbfc48efe3a4edbd',
      title: 'Yoga',
      // text: 'nam congue risus semper porta volutpat quam pede lobortis',
      image: 'yoga.png'
    }
  ],
  goals: [
    {
      _id: '626dd43bd3ee7a5ae5824836',
      name: 'stretch!',
      description: "make sure you're stretching. No old man back here!",
      createdAt: 'Apr 30th, 2022 at 7:28 pm',
      challenges: [],
      reflection: [
        {
          _id: '626dd45fd3ee7a5ae582483f',
          reflectionText: 'I did it! Woohoo!',
          createdAt: 'Apr 30th, 2022 at 7:29 pm'
        }
      ],
      isComplete: false
    },
    {
      _id: '626dd44fd3ee7a5ae5824839',
      name: 'Smile',
      description: 'Happy thoughts',
      createdAt: 'Apr 30th, 2022 at 7:29 pm',
      challenges: [
        {
          _id: '626dd474d3ee7a5ae5824844',
          challengeText: 'This is challenging!',
          createdAt: 'Apr 30th, 2022 at 7:29 pm'
        }
      ],
      reflection: [
        {
          _id: '626dd48ad3ee7a5ae5824846',
          reflectionText: 'This was fun to think about',
          createdAt: 'Apr 30th, 2022 at 7:30 pm'
        }
      ],
      isComplete: false
    }
  ]
};

const Dashboard = () => {
  return (
    <div>
      <Flex>
        <Box borderWidth="2px" w="50%" h="80%" borderRadius="lg">
          <Center>My Activities</Center>
          <Box templateColumns='repeat(5, 1fr)' gap={6}>
            {fakeUserData.activities.map((activity) => {
              return <ActivityDash activity={activity}></ActivityDash>;
            })}
          </Box>
        </Box>
        <Box borderWidth="2px" w="50%" borderRadius="lg">
          <Center>My Goals</Center>
          {fakeUserData.goals.map((goal) => {
            return <GoalList goal={goal} />;
          })}
          <Center>
            <GoalForm />
          </Center>
        </Box>
      </Flex>
    </div>
  );
};

export default Dashboard;

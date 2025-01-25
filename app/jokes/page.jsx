"use client"
import Layout from '../components/Layout';
import JokeDirectory from './JokeDirectory';
import AddJoke from '../components/AddJoke/AddJoke';
import { useJokes } from '@/context/JokeContext';
import { useAuth } from '@/context/AuthContext';


export default function JokesPage() {

  const { jokes } = useJokes()
  const { user } = useAuth()


  return (
    <Layout>
      <JokeDirectory jokes={jokes} />
      {user?.name &&

        <AddJoke />
      }
    </Layout>
  );
}

"use client"
import Layout from '../components/Layout';
import JokeDirectory from './JokeDirectory';
import AddJoke from '../components/AddJoke/AddJoke';
import { useJokes } from '@/context/JokeContext';


export default function JokesPage() {

  const { jokes } = useJokes()

  return (
    <Layout>
      <JokeDirectory jokes={jokes} />
      <AddJoke />
    </Layout>
  );
}

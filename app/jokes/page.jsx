import Layout from '../components/Layout';
import JokeDirectory from './JokeDirectory';
import fetcher from '../utils/fetcher';

export default async function JokesPage() {
  const data = await fetcher("joke" , { method : "GET" ,cache:  "no-cache" })
  const jokesList = data.jokes
  

  return (
      <Layout>
        <JokeDirectory jokes={jokesList} />
      </Layout>
  );
}

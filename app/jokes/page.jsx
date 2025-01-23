import Layout from '../components/Layout';
import ProtectedRoute from '../components/ProtectedJokes'; // Import the Client Component
import JokeDirectory from './JokeDirectory';

export default async function JokesPage() {
  const response = await fetch('https://randomuser.me/api/?results=100&seed=abc', {
    cache: 'force-cache', // Use cache to optimize performance
  });

  const data = await response.json();
  const jokes = data.results.map(el => ({ ...el, userName: "آیدان", joke: "بعد از دو اشتباه پارسا حالا دیگر اثری از آدم ربا نیست پس حالا باید دید پارسا برای رسیدن به آدم ربا و اثبات حرف هایش به کارآگاه کیانی دست به چه کارهایی می زند.سریال بازنده محصول ایران در سال 1403 است که توسط امین حسین پور کارگردانی شده. از بازیگرانی که در این سریال جنایی و رازآلود به ایفای نقش پرداخته‌اند می‌توان علیرضا کمالی، سارا بهرامی، صابر ابر، صدف اسپهبدی، رویا جاویدنیا، محمد علی محمدی، امیر غفارمنش، مهدی رکنی، علی مردانه، الهه اذکاری، ترنم کرمانیان، سپیده مولوی و ستاره قهرمانی,لیلا محمدی و آیدا یعقوبی و رضضا اکبرپور و فرشته محمدنزاد ستاره پسیانیاحمد مهرانفر ارسطو عامل لیلات حاتمی ترانه علیدوسیتی لیلی رشیدی  را نام برد." }));

  return (
    <ProtectedRoute>
      <Layout>
        <JokeDirectory jokes={jokes} />
      </Layout>
    </ProtectedRoute>
  );
}

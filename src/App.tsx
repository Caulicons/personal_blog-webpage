import { Route, Routes } from 'react-router-dom';
import Footer from './components/molecules/footer/footer.component';
import Header from './components/molecules/header/header.component';
import Home from './components/pages/home/home.component';
import Login from './components/pages/login/login.component';
import RegisterPage from './components/pages/register/register.component';
import Posts from './components/pages/posts/post.component';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/posts" element={<Posts />} />
        {/* <Route path="/post/:id" element={<Post />} />
        <Route path="*" element={<NotFound />} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;

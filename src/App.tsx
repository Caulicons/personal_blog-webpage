import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/molecules/footer/index.footer';
import Header from './components/molecules/header/index.header';
import Home from './components/pages/home/index.home';
import Login from './components/pages/login/index.login';
import RegisterPage from './components/pages/register/index.register';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterPage />} />
        {/* <Route path="/posts" element={<Posts />} />
          <Route path="/post/:id" element={<Post />} />
          <Route path="*" element={<NotFound />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

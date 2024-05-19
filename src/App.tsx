import Body from './components/basics/body/index.body';
import Footer from './components/basics/footer/index.footer';
import Header from './components/basics/header/index.header';
import Home from './pages/home/index.home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/login/index.login';

function App() {
  return (
    <BrowserRouter>
      <Body>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/register" element={<Register />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/post/:id" element={<Post />} />
          <Route path="*" element={<NotFound />} /> */}
        </Routes>
        <Footer />
      </Body>
    </BrowserRouter>
  );
}

export default App;

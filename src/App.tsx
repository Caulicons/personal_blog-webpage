import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/home/home.page';
import Login from './components/pages/login/login.page';
import RegisterPage from './components/pages/register/register.page';
import PostsPage from './components/pages/posts/posts.page';
import loggedOnly from './components/wrappers/loggedOnly/logged.component';
import Model from './components/atoms/model/model.component';
import ServerError from './components/pages/serverError/serverError.page';
import Post from './components/molecules/posts/post/index.post';
import PostCreate from './components/molecules/posts/postCreate/index.postCreate';
import PostEdit from './components/molecules/posts/postEdit/index.postEdit';
import RequestError from './components/pages/RequestError/index.requestError';
import Profile from './components/pages/profile/profile.page';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Model />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/posts" Component={PostsPage} />
          <Route path="/posts/:id" element={<Post />} />
          <Route path="/posts/:id/edit" Component={loggedOnly(PostEdit)} />
          <Route path="/posts/create" Component={loggedOnly(PostCreate)} />
          <Route path="/profile" Component={loggedOnly(Profile)} />
          <Route path="/500" element={<ServerError />} />
          <Route path="/404" element={<RequestError />} />
          <Route path="/401" element={<RequestError />} />
          {/*  />
        <Route path="*" element={<NotFound />} /> */}
        </Route>
      </Routes>
    </>
  );
}

export default App;

import { FC, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

interface PostDeleteProps {}

const PostDelete: FC<PostDeleteProps> = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(!!id);

  return <div></div>;
};

export default PostDelete;

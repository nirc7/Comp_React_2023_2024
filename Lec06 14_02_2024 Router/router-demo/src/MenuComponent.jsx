import { useParams } from 'react-router';

export default function MenuComponent() {
  const params = useParams();

  return (
    <div>MenuComponent <br />
      userId= {params.userId}
    </div>
  )
}

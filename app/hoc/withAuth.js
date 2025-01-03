"use client"; 
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../context/AuthContext';

const withAuth = (WrappedComponent) => {
  // eslint-disable-next-line react/display-name
  return (props) => {
    const { user } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (!user?.email) {
        router.push('/');
      }
    }, [user, router]);

    if (!user?.email) {
      return null;
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;

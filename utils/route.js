import React, { useContext } from 'react';
import { useRouter } from 'next/router';
import { AuthContext } from './../context/AuthContext';

export function withPublic(Component) {
  return function WithPublic(props) {
    const { user } = useContext(AuthContext);

    const router = useRouter();

    if (user) {
      router.replace('/dashboard');
      return <h1>Loading...</h1>;
    }
    return <Component user={user} {...props} />;
  };
}

export function withProtected(Component) {
  return function WithProtected(props) {
    const { user } = useContext(AuthContext);
    const router = useRouter();

    if (!user) {
      router.replace('/');
      return <h1>Loading...</h1>;
    }
    return <Component user={user} {...props} />;
  };
}

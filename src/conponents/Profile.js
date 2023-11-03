import React from 'react'

const Profile = () => {
    const user = JSON.parse(localStorage.getItem('user'));

  if (!user) {
    return <div>You are not logged in.</div>;
  }

  return (
    <div class="flex items-center justify-center h-screen">
        <div class="text-center">
            <h2 class="text-2xl font-bold mb-4">Welcome, {user.firstname} {user.lastname}!</h2>
        </div>
    </div>
  );
};

export default Profile
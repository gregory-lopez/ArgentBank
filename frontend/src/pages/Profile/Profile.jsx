import React, { useState } from 'react';
import useUserData from '../../hooks/useUserData';
import AccountCard from '../../components/AccountCard/AccountCard';
import accountCardData from '../../datas/accountCardData';
import UserEditForm from '../../components/UserEditForm/userEditForm';
import Button from '../../components/Button/Button';
import './profile.scss';

const Profile = () => {
  const { user, error } = useUserData();
  const [isEditing, setIsEditing] = useState(false);

  if (error) return <div>{error}</div>;
  if (!user) return <div>Loading...</div>;

  return (
    <main className="profile-page">
      <div className="profile-header">
        <h1>Welcome back</h1>
        <h1>{user.firstName} {user.lastName}!</h1>
      </div>
      <div className='profile-edit-button'>
        {!isEditing && <Button text="Edit Name" onClick={() => setIsEditing(true)} className="edit-button" />}
      </div>
      {isEditing && <UserEditForm initialData={user} onCancel={() => setIsEditing(false)} />}

      {accountCardData.map((account, index) => (
        <AccountCard key={index} title={account.title} amount={account.amount} description={account.description} buttonText="View transactions" />
      ))}
    </main>
  );
};

export default Profile;
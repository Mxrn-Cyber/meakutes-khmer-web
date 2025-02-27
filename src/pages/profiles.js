import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

const Profile = () => {
  const { data: session } = useSession();
  const router = useRouter();

  if (!session) {
    // Redirect if not authenticated
    router.push("/login");
  }

  return (
    <div>
      <h1>Welcome to your Profile</h1>
      {session && <p>Email: {session.user.email}</p>}
    </div>
  );
};

export default Profile;

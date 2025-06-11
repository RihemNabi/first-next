import { signOut } from "next-auth/react";

function AdminClient() {
  return (
    <div>
      <button onClick={() => signOut({ callbackUrl: "/" })}>
        Se déconnecter
      </button>
      {/* ton contenu admin ici */}
    </div>
  );
}

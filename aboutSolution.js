```javascript
// pages/about.js
import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "../pages/api/auth/[...nextauth]";

export async function getServerSideProps(context) {
  const session = await unstable_getServerSession(context.req, context.res, authOptions);
  return {
    props: {
      session: JSON.stringify(session) // Serialize the session
    },
  };
}

export default function About({ session }) {
  const parsedSession = JSON.parse(session); // Parse the JSON string on the client
  return (
    <div>
      <h1>About Page</h1>
      {parsedSession && (
        <div>
          <p>Logged in as {parsedSession.user.email}</p>
        </div>
      )}
    </div>
  );
}
```